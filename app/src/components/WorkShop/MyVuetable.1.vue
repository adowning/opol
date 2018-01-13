<template>
  <div class="ui container">
    <vuetable ref="vuetable"
      api-url="https://wt-4b2720bcf712029a2fa08942c7e9bd70-0.run.webtask.io/get_workshop_items"
      :fields="fields"
      pagination-path=""
      :css="css.table"
      @vuetable:pagination-data="onPaginationData"
    >
     <template slot="actions" slot-scope="props">
      <div class="custom-actions">
        <button type="button" class="btn btn-info small" data-toggle="modal" data-target="#modal-info">
                Launch Info Modal
              </button>
        <!-- <button type="button" class="btn btn-block btn-primary btn-flat small"  @click="onAction('view-item', props.rowData, props.rowIndex)">Default</button> -->
        <!-- <button class="ui basic button"
          @click="onAction('view-item', props.rowData, props.rowIndex)">
          <i class="zoom icon"></i>
        </button> -->
        <!-- <button class="ui basic button"
          @click="onAction('edit-item', props.rowData, props.rowIndex)">
          <i class="edit icon"></i>
        </button>
        <button class="ui basic button"
          @click="onAction('delete-item', props.rowData, props.rowIndex)">
          <i class="delete icon"></i>
        </button> -->
      </div>
    </template>
    </vuetable>
    <div class="vuetable-pagination ui basic segment grid">
      <vuetable-pagination-info ref="paginationInfo"
      ></vuetable-pagination-info>
      <vuetable-pagination ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>

        <div class="modal modal-info fade" id="modal-info">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Info Modal</h4>
              </div>
              <div class="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-outline">Save changes</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
  </div>
</template>

<script>
import accounting from 'accounting'
import moment from 'moment'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import CssConfig from './VuetableCssConfig.js'


export default {
   data () {
    return {
          css: CssConfig,

      fields: [
        'first_name', 'email',

        {
          name: 'last_name',
          callback: 'allcap'
        },
        {
          name: 'tech',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
        },
        {
          name: 'cost',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          // callback: 'formatNumber'
        },
        {
          name: '__slot:actions',   // <----
          title: 'Actions',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        }
      ]
    }
  },

    tableClass: 'table table-striped table-bordered',
  ascendingIcon: 'glyphicon glyphicon-chevron-up',
  descendingIcon: 'glyphicon glyphicon-chevron-down',
  handleIcon: 'glyphicon glyphicon-menu-hamburger',
  renderIcon: function(classes, options) {
    return `<span class="${classes.join(' ')}"></span>`
  },

  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },

  methods: {
    onAction (action, data, index) {
      console.log('slot) action: ' + action, data.name, index)
    },
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
    },
        onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
}
</script>
<style>
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.8.1
 * https://github.com/wenzhixin/bootstrap-table/
 */

.bootstrap-table .table {
    margin-bottom: 0 !important;
    border-bottom: 1px solid #dddddd;
    border-collapse: collapse !important;
    border-radius: 1px;
}

.bootstrap-table .table,
.bootstrap-table .table > tbody > tr > th,
.bootstrap-table .table > tfoot > tr > th,
.bootstrap-table .table > thead > tr > td,
.bootstrap-table .table > tbody > tr > td,
.bootstrap-table .table > tfoot > tr > td {
    padding: 8px !important;
}

.bootstrap-table .table.table-no-bordered > thead > tr > th,
.bootstrap-table .table.table-no-bordered > tbody > tr > td {
    border-right: 2px solid transparent;
}

.fixed-table-container {
    position: relative;
    clear: both;
    border: 1px solid #dddddd;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
}

.fixed-table-container.table-no-bordered {
    border: 1px solid transparent;
}

.fixed-table-footer,
.fixed-table-header {
    overflow: hidden;
}

.fixed-table-footer {
    border-top: 1px solid #dddddd;
}

.fixed-table-body {
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
}

.fixed-table-container table {
    width: 100%;
}

.fixed-table-container thead th {
    height: 0;
    padding: 0;
    margin: 0;
    border-left: 1px solid #dddddd;
}

.fixed-table-container thead th:first-child {
    border-left: none;
    border-top-left-radius: 4px;
    -webkit-border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
}

.fixed-table-container thead th .th-inner,
.fixed-table-container tbody td .th-inner {
    padding: 8px;
    line-height: 24px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.fixed-table-container thead th .sortable {
    cursor: pointer;
    background-position: right;
    background-repeat: no-repeat;
    padding-right: 30px;
}

.fixed-table-container thead th .both {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X QMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC');
}

.fixed-table-container thead th .asc {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==');
}

.fixed-table-container thead th .desc {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII= ');
}

.fixed-table-container th.detail {
    width: 30px;
}

.fixed-table-container tbody td {
    border-left: 1px solid #dddddd;
}

.fixed-table-container tbody tr:first-child td {
    border-top: none;
}

.fixed-table-container tbody td:first-child {
    border-left: none;
}

/* the same color with .active */
.fixed-table-container tbody .selected td {
    background-color: #f5f5f5;
}

.fixed-table-container .bs-checkbox {
    text-align: center;
}

.fixed-table-container .bs-checkbox .th-inner {
    padding: 8px 0;
}

.fixed-table-container input[type="radio"],
.fixed-table-container input[type="checkbox"] {
    margin: 0 auto !important;
}

.fixed-table-container .no-records-found {
    text-align: center;
}

.fixed-table-pagination div.pagination,
.fixed-table-pagination .pagination-detail {
    margin-top: 10px;
    margin-bottom: 10px;
}

.fixed-table-pagination div.pagination .pagination {
    margin: 0;
}

.fixed-table-pagination .pagination a {
    padding: 6px 12px;
    line-height: 1.428571429;
}

.fixed-table-pagination .pagination-info {
    line-height: 34px;
    margin-right: 5px;
}

.fixed-table-pagination .btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.fixed-table-pagination .dropup .dropdown-menu {
    margin-bottom: 0;
}

.fixed-table-pagination .page-list {
    display: inline-block;
}

.fixed-table-toolbar .columns-left {
    margin-right: 5px;
}

.fixed-table-toolbar .columns-right {
    margin-left: 5px;
}

.fixed-table-toolbar .columns label {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.428571429;
}

.fixed-table-toolbar .bars,
.fixed-table-toolbar .search,
.fixed-table-toolbar .columns {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 34px;
}

.fixed-table-pagination li.disabled a {
    pointer-events: none;
    cursor: default;
}

.fixed-table-loading {
    display: none;
    position: absolute;
    top: 42px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    text-align: center;
}

.fixed-table-body .card-view .title {
    font-weight: bold;
    display: inline-block;
    min-width: 30%;
    text-align: left !important;
}

/* support bootstrap 2 */
.fixed-table-body thead th .th-inner {
    box-sizing: border-box;
}

.table th, .table td {
    vertical-align: middle;
    box-sizing: border-box;
}

.fixed-table-toolbar .dropdown-menu {
    text-align: left;
    max-height: 300px;
    overflow: auto;
}

.fixed-table-toolbar .btn-group > .btn-group {
    display: inline-block;
    margin-left: -1px !important;
}

.fixed-table-toolbar .btn-group > .btn-group > .btn {
    border-radius: 0;
}

.fixed-table-toolbar .btn-group > .btn-group:first-child > .btn {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.fixed-table-toolbar .btn-group > .btn-group:last-child > .btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.bootstrap-table .table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 1px solid #ddd;
}

/* support bootstrap 3 */
.bootstrap-table .table thead > tr > th {
    padding: 0;
    margin: 0;
}

.bootstrap-table .fixed-table-footer tbody > tr > td {
    padding: 0 !important;
}

.bootstrap-table .fixed-table-footer .table {
    border-bottom: none;
    border-radius: 0;
}

.pull-right .dropdown-menu {
    right: 0;
    left: auto;
}

/* calculate scrollbar width */
p.fixed-table-scroll-inner {
    width: 100%;
    height: 200px;
}

div.fixed-table-scroll-outer {
    top: 0;
    left: 0;
    visibility: hidden;
    width: 200px;
    height: 150px;
    overflow: hidden;
}
</style>