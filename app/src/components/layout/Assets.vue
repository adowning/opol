<template>
  <div class="layout-padding">
<div class="row">
  <div class="col-md-12">
    <div class="box">
      <div class="box-body">
      
          <div class="row">
            <div class="col-md-12">
             
              <div id="toolbar">
                <select name="bulk_actions" class="form-control select2">
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                  <option value="labels">Generate Labels</option>
                </select>
                <button class="btn btn-primary" id="bulkEdit" disabled>Go</button>
              </div>
        

              <vuetable
              name="assets"
              data-row-style="rowStyle" 
              data-toolbar="#toolbar"
              class="table table-striped snipe-table"
       
              data-advanced-search="true"
              data-id-table="advancedTable"
              api-url="http://localhost/api/v1"
              data-click-to-select="true"
              </vuetable>
          
            </div><!-- /.col -->
          </div><!-- /.row -->
       
      </div><!-- ./box-body -->
    </div><!-- /.box -->
  </div>
</div>
  </div>

</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";

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
} from "quasar";

// import table from '../../assets/table'//adsf
var table;
var userList = [];
export default {
  data: {
    table: []
  },
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
  computed: {
    table: function() {
      return this.$snipeit
        .get("hardware")
        .then(response => {
          console.log(response.data.rows);
          this.table = response.data.rows;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  methods: {
    changeMessage(props) {
      props.rows.forEach(row => {
        row.data.message = "Hai";
      });
    },
    deleteRow(props) {
      props.rows.forEach(row => {
        this.table.splice(row.index, 1);
      });
    },
    refresh(done) {
      console.log("refreshing");
      // this.table = response.data.rows = this.$db.ref("checkedOutDevices")
      // this.$db
      //   .ref("checkedOutDevices")
      //   .then(response => {
      //     // console.log(response.data.rows)
      //     this.table = response.data.rows
      //     done()
      //   })
      //   .catch(e => {
      //     this.errors.push(e)
      //   })
      // // this.timeout = setTimeout(() => {
      // //   done()
      // // }, 5000)
    },
    selection(number, rows) {
      console.log(`selected ${number}: ${rows}`);
    },
    rowClick(row) {
      console.log("clicked on a row", row);
    },
    checkIn(id) {
      this.$snipeit
        .post("hardware/" + id + "/checkin")
        .then(response => {
          console.log(reponse);
          this.refresh();
        })
        .catch(e => {
          this.errors.push(e);
          this.refresh();
        });
    },
    openCheckOut(id) {
      this.$nextTick(() => {
        this.checkoutID = id;
        this.$refs.positionModal.open(id);
      });
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
      );
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
          console.log(response);
          this.refresh();
          this.$refs.positionModal.close();
        })
        .catch(e => {
          console.log(e);
          this.refresh();

          this.errors.push(e);
        });
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
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
        refresh: false,
        noHeader: false,
        columnPicker: false,
        leftStickyColumns: 0,
        rightStickyColumns: 0,
        // bodyStyle: {
        //   maxHeight: "500px"
        // },
        rowHeight: "50px",
        responsive: true,
        // pagination: {
        //   rowsPerPage: 15,
        //   options: [5, 10, 15, 30, 50, 500]
        // },
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
            return value.status_meta;
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
              return value.name;
            } catch (e) {}
            return "";
          }
        },
        {
          label: "Category",
          field: "category",
          filter: true,
          sort: false,
          type: "string",
          format(value) {
            return value.name;
          }
        },

        {
          label: "Checkin/Checkout",
          field: "user_can_checkout",
          sort: false,
          width: "120px",
          style: { "text-align": "center" },
          format(value) {
            if (value) {
              return "Check In";
            } else {
              return "Check Out";
            }
          }
        }
      ],

      pagination: false,
      rowHeight: 50,
      bodyHeightProp: "maxHeight",
      bodyHeight: 500
      // bodyStyle:
      // {
      //   align: "right"
      // }
    };
  },

  created() {
    var _this = this;
    var ar = [];
    this.$snipeit
      .get("hardware")
      .then(response => {
        console.log(response.data.rows);
        this.table = response.data.rows;
      })
      .catch(e => {
        this.errors.push(e);
      });
    this.$snipeit
      .get("users")
      .then(response => {
        console.log(response.data.rows);
        // this.userList = response.data.rows
        for (var user of response.data.rows) {
          var item = {};
          (item.label = user.name), (item.value = user.id);
          this.userList.push(item);
        }
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  watch: {
    // table(value){
    //     this.table = value
    // }
    pagination(value) {
      if (!value) {
        this.oldPagination = clone(this.config.pagination);
        this.config.pagination = false;
        return;
      }

      this.config.pagination = this.oldPagination;
    },
    rowHeight(value) {
      this.config.rowHeight = value + "px";
    },
    bodyHeight(value) {
      let style = {};
      if (this.bodyHeightProp !== "auto") {
        style[this.bodyHeightProp] = value + "px";
      }
      this.config.bodyStyle = style;
    },
    bodyHeightProp(value) {
      let style = {};
      if (value !== "auto") {
        style[value] = this.bodyHeight + "px";
      }
      this.config.bodyStyle = style;
    }
  }
};
</script>

<style lang="stylus">
.my-label {
  padding: 10px;
  border-radius: 6px;
  display: inline-block;
}
</style>
