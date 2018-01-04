<template>
  <div id="e3" style="max-width: 900px; margin: auto;" class="grey lighten-3">

    <v-layout row wrap>

      <v-flex xs12>

        <v-card>
            <v-layout row>

                <!-- <v-card-media src="https://randomuser.me/api/portraits/men/85.jpg" height="115px" contain></v-card-media> -->




              <v-flex xs11>
                <v-list two-line>
                  <v-list-tile>
                      <v-list-tile-content>
                  <v-list-tile-title>Apply Date</v-list-tile-title>
                  <v-list-tile-sub-title>Jan 1st, 2013</v-list-tile-sub-title>
                      <v-list-tile-sub-title class="grey--text text--darken-4">Janitorial</v-list-tile-sub-title>

                </v-list-tile-content>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ firstName}}, {{ lastName }}</v-list-tile-title>
                      <v-list-tile-sub-title >{{addressList[0].street}}, Tyler TX 75701</v-list-tile-sub-title>
                      <v-list-tile-sub-title>
                        <a href="tel:+13174562564">317-456-2564</a>
                      </v-list-tile-sub-title>

                    </v-list-tile-content>
                    <v-list-tile-content>
                      <v-list-tile-title>ACME Corporation</v-list-tile-title>
                      <v-list-tile-sub-title> Jan 1st, 2013 - Jan 23, 2017</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-spacer></v-spacer>
                      <v-list-tile-action-text>Hire</v-list-tile-action-text>
                      <v-icon  large color="blue darken-2">ic_thumb_up</v-icon>
                    </v-list-tile-action>
                    <!-- <v-list-tile-action>
                      <v-list-tile-action-text>Pass</v-list-tile-action-text>
                      <v-icon color="grey lighten-1">ic_thumb_down</v-icon>
                    </v-list-tile-action> -->

                  </v-list-tile>
                  <v-layout row>

                    <v-spacer></v-spacer>
                    <v-btn outline small @click.native="documents_show = !documents_show">Documents</v-btn>
                    <v-btn outline small @click.native="show = !show">Availability</v-btn>
                    <v-btn outline small @click.native="show = !show">Employment History</v-btn>
                    <v-btn outline small @click.native="show = !show">Addresses</v-btn>
                  </v-layout>
                </v-list>
              </v-flex>

            </v-layout>
            <v-layout row>
              <!-- <v-spacer></v-spacer><v-btn flat  @click.native="show = !show">Documents</v-btn><v-btn flat  @click.native="show = !show">Availability</v-btn><v-btn flat  @click.native="show = !show">Employment History</v-btn><v-btn flat  @click.native="show = !show">Previous Addresses</v-btn> -->

            </v-layout>
          <v-slide-y-transition>
            <v-card-text v-show="documents_show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

    </v-layout>

  </div>
</template>


<script>
export default {
  props: ["firstName", "lastName", "addressList", "jobHistory"],
  data: () => ({
    documents_show: false
  }),

  methods: {
    edit() {
      this.firstName += "*";
    }
  }
};
</script>
