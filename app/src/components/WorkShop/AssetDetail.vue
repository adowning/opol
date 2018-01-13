 <template>
 <div class="row">
 <div class="col-md-12">
 <div class="nav-tabs-custom">

      <ul class="nav nav-tabs">
        <li class="active">
          <a href="#details" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-info-circle"></i></span> <span class="hidden-xs hidden-sm">Details</span></a>
        <!-- </li>
        <li>
          <a href="#software" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-floppy-o"></i></span> <span class="hidden-xs hidden-sm">{{ trans('general.licenses') }}</span></a>
        </li>
        <li>
          <a href="#components" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-hdd-o"></i></span> <span class="hidden-xs hidden-sm">{{ trans('general.components') }}</span></a>
        </li> -->
        <!-- <li>
          <a href="#assets" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-barcode"></i></span> <span class="hidden-xs hidden-sm">{{ trans('general.assets') }}</span></a>
        </li> -->
        <li>
          <a href="#maintenances" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-wrench"></i></span> <span class="hidden-xs hidden-sm">Maintenances</span></a>
        </li>
        <li>
          <a href="#history" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-history"></i></span> <span class="hidden-xs hidden-sm">{{ trans('general.history') }}</span></a>
        </li>
        <li>
          <a href="#files" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-files-o"></i></span> <span class="hidden-xs hidden-sm">Files</span></a>
        </li>
        <li class="pull-right">
          <!-- <a href="#" data-toggle="modal" data-target="#uploadFileModal"><i class="fa fa-paperclip"></i> </a> -->
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade in active" id="details">
          <div class="row">
            <div class="col-md-8">
              <div class="table-responsive" style="margin-top: 10px;">
                <table class="table">
                  <tbody>
                    <!-- @if ($asset->assetstatus) -->
                    <tr>
                      <td>{{ trans('general.status') }}</td>
                      <td>

                        <!-- @if (($asset->assignedTo) && ($asset->deleted_at=='')) -->
                          <!-- <i class="fa fa-circle text-blue"></i> {{ trans('general.deployed') }} <i class="fa fa-long-arrow-right" aria-hidden="true"></i> {!!  $asset->assignedTo->present()->glyph()  !!} -->
                          <!-- {!!  $asset->assignedTo->present()->nameUrl() !!} -->
                        <!-- @else -->
                          <!-- @if (($asset->assetstatus) && ($asset->assetstatus->deployable=='1')) -->
                            <i class="fa fa-circle text-green"></i>
                          <!-- @elseif (($asset->assetstatus) && ($asset->assetstatus->pending=='1')) -->
                              <i class="fa fa-circle text-orange"></i>
                          <!-- @elseif (($asset->assetstatus) && ($asset->assetstatus->archived=='1')) -->
                            <i class="fa fa-times text-red"></i>
                          <!-- @endif -->
                            <!-- <a href="{{ route('statuslabels.show', $asset->assetstatus->id) }}"> -->
                              <!-- {{ $asset->assetstatus->name }}</a> -->
                            <!-- <label class="label label-default">{{ $asset->present()->statusMeta }}</label> -->

                        <!-- @endif -->
                      </td>
                    </tr>
          </tbody>
          </table>
          </div>
          </div>
          </div> <!-- /.row -->
        </div> <!-- /.tab-pane files -->
      </div> <!-- /. tab-content -->
    </div> <!-- /.nav-tabs-custom -->
    </div>
    </div>
    </template>

    <script>

export default {
  components: {

  },
  data () {
    return {
      // userList: [],
      checkOutID: '',
    }
  },
    created () {
    this.$snipeit
      .get("hardware/1")
      .then(response => {
      console.log(response.data.rows)
        // this.userList = response.data.rows
        for (var user of response.data.rows) {
          var item = {}
          ;(item.label = user.name), (item.value = user.id)
          this.options.push(item)
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
}
      </script>
