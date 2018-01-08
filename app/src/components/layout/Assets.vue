<template>
  <div class="layout-padding">
    <q-collapsible label="Showcasing some of the options" sublabel="Change them to see it in action" style="max-width: 600px; margin-bottom: 25px" class="shadow-2">
      <q-field icon="title" label="Data Table Title" :label-width="4">
        <q-input v-model="config.title" />
      </q-field>

      <q-field icon="widgets" label="Some Features" :label-width="4">
        <div class="column group" style="margin: -5px -7px">
          <q-checkbox v-model="config.refresh" label="Refresh" />
          <q-checkbox v-model="config.columnPicker" label="Column Picker" />
          <q-checkbox v-model="pagination" label="Pagination" />
          <q-checkbox v-model="config.responsive" label="Responsive" />
          <q-checkbox v-model="config.noHeader" label="No Header" />
        </div>
      </q-field>

      <q-field icon="check box" label="Selection" :label-width="4">
        <q-select v-model="config.selection" class="col-xs-12 col-sm" float-label="Selection" :options="[
            {label: 'None', value: false},
            {label: 'Single', value: 'single'},
            {label: 'Multiple', value: 'multiple'}
          ]" />
      </q-field>

      <q-field icon="place" label="Sticky Columns" :label-width="4">
        <q-select v-model="config.leftStickyColumns" class="col-xs-12 col-sm" float-label="Left Sticky Columns" :options="[
            {label: 'None', value: 0},
            {label: '1', value: 1},
            {label: '2', value: 2}
          ]" />
        <br>
        <q-select v-model="config.rightStickyColumns" class="col-xs-12 col-sm" float-label="Right Sticky Columns" :options="[
            {label: 'None', value: 0},
            {label: '1', value: 1},
            {label: '2', value: 2}
          ]" />
      </q-field>

      <q-field icon="format_line_spacing" label="Row height" :label-width="4">
        <q-slider v-model="rowHeight" :min="50" :max="200" label-always :label-value="`${rowHeight}px` " />
      </q-field>

      <q-field icon="content_paste" label="Table body" :label-width="4">
        <div class="row no-wrap items-center">
          <div class="col-auto" style="margin-top: 10px">
            <q-select v-model="bodyHeightProp" float-label="Style" :options="[
                {label: 'Auto', value: 'auto'},
                {label: 'Height', value: 'height'},
                {label: 'Min Height', value: 'minHeight'},
                {label: 'Max Height', value: 'maxHeight'}
              ]" />
          </div>
          <q-slider class="col" v-model="bodyHeight" :min="100" :max="700" label-always :disable="bodyHeightProp === 'auto'" :label-value="`${bodyHeight}px`" />
        </div>
      </q-field>
    </q-collapsible>

    <q-data-table :data="table" :config="config" :columns="columns" @refresh="refresh" @selection="selection">
      <template slot="col-message" slot-scope="cell">
        <span class="light-paragraph">{{cell.data}}</span>
      </template>
      <template slot="col-source" slot-scope="cell">
        <div v-if="cell.data === 'checkin'" class="my-label text-white bg-primary">
          Audit
          <q-tooltip>Some data</q-tooltip>
        </div>
        <div v-else class="my-label text-white bg-negative">{{cell.data}}</div>
      </template>
      <template slot='col-user_can_checkout' slot-scope='cell'>
        <div v-if="cell.data">
          <q-btn outline color="primary" @click='openCheckOut(cell.row.id)' small>Check Out</q-btn>
        </div>
        <div v-else>
          <q-btn outline color="purple" @click='checkIn(cell.row.id)' small>Check In</q-btn>
          <!-- <q-btn color="primary" @click='check(cell.row.id)'>Check In</q-btn> -->

        </div>
      </template>
      <template slot="selection" slot-scope="props">
        <q-btn flat color="primary" @click="changeMessage(props)">
          <q-icon name="edit" />
        </q-btn>
        <q-btn flat color="primary" @click="deleteRow(props)">
          <q-icon name="delete" />
        </q-btn>
      </template>
    </q-data-table>
    <q-modal ref="positionModal" :position="position" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn flat @click="$refs.positionModal.close()">
            <q-icon name="keyboard_arrow_left" />

          </q-btn>
          <q-toolbar-title>
            Checkout Asset
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <q-select stack-label="Delimited options" inverted color="secondary" separator v-model="select" :options="userList" />
          <div v-if="select">
            <q-btn color="primary" @click="checkOut()">Checkout</q-btn>

          </div>
          <!-- <q-btn color="warning" @click="$refs.layoutModal.close()">Cancel</q-btn> -->
        </div>
      </q-modal-layout>

    </q-modal>
  </div>

</template>

<script>
import {
  QDataTable,
  QField,
  QInput,
  QCheckbox,
  QSelect,
  QSlider,
  QBtn,
  QIcon,
  QTooltip,
  QCollapsible,
  clone
} from "quasar"

// import table from '../../assets/table'
var table
var userList = []
export default {
  components: {
    QDataTable,
    QField,
    QInput,
    QCheckbox,
    QSelect,
    QSlider,
    QBtn,
    QIcon,
    QTooltip,
    QCollapsible
  },
  methods: {
    changeMessage(props) {
      props.rows.forEach(row => {
        row.data.message = "Gogu"
      })
    },
    deleteRow(props) {
      props.rows.forEach(row => {
        this.table.splice(row.index, 1)
      })
    },
    refresh(done) {
      console.log("refreshing")
      this.$db
        .ref("checkedOutDevices")
        .then(response => {
          // console.log(response.data.rows)
          this.table = response.data.rows
          done()
        })
        .catch(e => {
          this.errors.push(e)
        })
      // this.timeout = setTimeout(() => {
      //   done()
      // }, 5000)
    },
    selection(number, rows) {
      console.log(`selected ${number}: ${rows}`)
    },
    rowClick(row) {
      console.log("clicked on a row", row)
    },
    checkIn(id) {
      this.$snipeit
        .post("hardware/" + id + "/checkin")
        .then(response => {
          console.log(reponse)
          this.refresh()
        })
        .catch(e => {
          this.errors.push(e)
          this.refresh()
        })
    },
    openCheckOut(id) {
      this.$nextTick(() => {
        this.checkoutID = id
        this.$refs.positionModal.open(id)
      })
    },
    checkOut() {
      console.log(
        "hardware/" +
          this.checkoutID +
          "/checkout?user_id=" +
          this.select +
          "&asset_id=" +
          this.checkoutID +
          "&location_id=1"
      )
      this.$snipeit
        .post(
          "hardware/" +
            this.checkoutID +
            "/checkout?assigned_user=" +
            this.select +
            "&assigned_asset=" +
            this.checkoutID +
            "&checkout_to_type=user"
        )
        .then(response => {
          console.log(response)
          this.refresh()
          this.$refs.positionModal.close()
        })
        .catch(e => {
          console.log(e)
          this.refresh()

          this.errors.push(e)
        })
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  data() {
    return {
      table,
      userList: [],
      select: "",
      checkoutID: "",
      errors: [],
      position: "right",
      config: {
        title: "Asset List",
        refresh: true,
        noHeader: false,
        columnPicker: true,
        leftStickyColumns: 0,
        rightStickyColumns: 0,
        bodyStyle: {
          maxHeight: "500px"
        },
        rowHeight: "50px",
        responsive: true,
        pagination: {
          rowsPerPage: 15,
          options: [5, 10, 15, 30, 50, 500]
        },
        selection: "multiple"
      },
      columns: [
        // {
        //   label: 'Date',
        //   field: 'isodate',
        //   width: '140px',
        //   classes: 'bg-orange-2',
        //   filter: true,
        //   sort(a, b) {
        //     return new Date(a) - new Date(b)
        //   },
        //   format(value) {
        //     return new Date(value).toLocaleString()
        //   }
        // },
        // {
        //   label: 'Service',
        //   field: 'serviceable',
        //   format(value) {
        //     if (value === 'Informational') {
        //       return '<i class="material-icons text-positive" style="font-size: 22px">info</i>'
        //     }
        //     return value
        //   },
        //   width: '70px'
        // },
        {
          label: "Asset Name",
          field: "name",
          sort: true,
          type: "string"
          // width: '120px'
        },
        {
          label: "Asset Tag",
          field: "asset_tag",
          filter: true,
          sort: true,
          type: "string"
          // width: '500px'
        },
        {
          label: "Status",
          field: "status_label",
          filter: true,
          sort: false,
          type: "string",
          format(value) {
            return value.status_meta
          }
        },
        {
          label: "Assigned To",
          field: "assigned_to",
          filter: true,
          sort: false,
          type: "string",
          format(value) {
            try {
              return value.name
            } catch (e) {}
            return ""
          }
        },
        {
          label: "Category",
          field: "category",
          filter: true,
          sort: false,
          type: "string",
          format(value) {
            return value.name
          }
        },

        {
          label: "Checkin/Checkout",
          field: "user_can_checkout",
          sort: false,
          format(value) {
            if (value) {
              return "Check In"
            } else {
              return "Check Out"
            }
          }
        }
      ],

      pagination: true,
      rowHeight: 50,
      bodyHeightProp: "maxHeight",
      bodyHeight: 500
    }
  },

  created() {
    var _this = this
    var ar = []
    this.$snipeit
      .get("hardware")
      .then(response => {
        // console.log(response.data.rows)
        this.table = response.data.rows
      })
      .catch(e => {
        this.errors.push(e)
      })
    this.$snipeit
      .get("users")
      .then(response => {
        // console.log(response.data.rows)
        // this.userList = response.data.rows
        for (var user of response.data.rows) {
          var item = {}
          ;(item.label = user.name), (item.value = user.id)
          this.userList.push(item)
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  watch: {
    pagination(value) {
      if (!value) {
        this.oldPagination = clone(this.config.pagination)
        this.config.pagination = false
        return
      }

      this.config.pagination = this.oldPagination
    },
    rowHeight(value) {
      this.config.rowHeight = value + "px"
    },
    bodyHeight(value) {
      let style = {}
      if (this.bodyHeightProp !== "auto") {
        style[this.bodyHeightProp] = value + "px"
      }
      this.config.bodyStyle = style
    },
    bodyHeightProp(value) {
      let style = {}
      if (value !== "auto") {
        style[value] = this.bodyHeight + "px"
      }
      this.config.bodyStyle = style
    }
  }
}
</script>

<style lang="stylus">
.my-label {
  padding: 5px;
  border-radius: 3px;
  display: inline-block;
}
</style>
