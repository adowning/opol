<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout">
    <q-toolbar slot="header">
      <!-- opens drawer below -->
      <button class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()">
        <i>menu</i>
      </button>

      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </q-toolbar>

    <!-- Navigation Tabs -->
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="input" to="/home" replace label="Home" />
      <q-route-tab slot="title" icon="map" to="/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/contact" replace hide="icon" label="Contact" />
      <q-route-tab slot="title" icon="view_day" to="/more" replace label="More" />
    </q-tabs>

    <!-- Left Side Panel -->
    <div slot="left">

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item>
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>

    <!-- Right Side Panel -->
    <!-- <div slot="right">
      <p>Right Panel</p>
    </div> -->

    <router-view />

    <!-- Footer -->
    <q-toolbar slot="footer">
      <p>Footer</p>
    </q-toolbar>

  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QList,
  QBtn,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QList,
    QListHeader,
    QItem,
    QBtn,
    QItemSide,
    QItemMain
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
