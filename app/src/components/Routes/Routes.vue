<template>
	<full-calendar :config="config" :events="events"/>
</template>

<script>
import FullCalendar from "vue-full-calendar"

import "fullcalendar-scheduler"
import "fullcalendar/dist/fullcalendar.min.css"
import "fullcalendar-scheduler/dist/scheduler.min.css"
import moment from "moment"
import Vue from "vue"
Vue.use(FullCalendar)
Vue.config.productionTip = false

export default {
  name: "hello",
  data() {
    return {
      events: [
        {
          title: "test",
          resourceId: "a",
          start: moment(),
          end: moment().add(1, "d")
        },
        {
          title: "test",
          resourceId: "a2",
          start: moment().add(2, "d"),
          end: moment().add(3, "d")
        }
      ],

      config: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        defaultView: "timelineMonth",
        resources: [
          {
            id: "a",
            title: "Routes",
            children: [
              {
                id: "a1",
                title: "Route 1"
              },
              {
                id: "a2",
                title: "Route 2"
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
