 <template>
  <q-card-main>
    <q-list highlight inset-separator>
      <q-item>
        <q-item-side avatar="statics/boy-avatar.png" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" />
        <q-item-side right stamp="1 min" />
      </q-item>
      <q-item multiline>
        <q-item-side avatar="statics/boy-avatar.png" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe" sublabel-lines="2" />
        <q-item-side right stamp="1 week<br>ago" />
      </q-item>
      <q-item multiline>
        <q-item-side avatar="statics/boy-avatar.png" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="2" sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe" />
        <q-item-side right stamp="10 min" />
      </q-item>
      <q-item multiline>
        <q-item-side>
          <q-item-tile avatar>
            <img src="~assets/boy-avatar.png" />
          </q-item-tile>
        </q-item-side>
        <q-item-main>
          <q-item-tile label>Brunch
            <span>5</span>
          </q-item-tile>
          <q-item-tile sublabel lines="2">
            John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile stamp>10 min</q-item-tile>
          <q-item-tile icon="star" color="yellow" />
        </q-item-side>
      </q-item>
      <q-item multiline>
        <q-item-side avatar="statics/boy-avatar.png" />
        <q-item-main>
          <q-item-tile label lines="1">Brunch this weekend? Yeah, this weekend. Really. This one.</q-item-tile>
          <q-item-tile sublabel lines="2">
            <span>John Doe</span>
            -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile stamp>2 years</q-item-tile>
          <q-item-tile icon="mail" color="primary" />
        </q-item-side>
      </q-item>
    </q-list>
    <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card-main>
</template>

<script>

const Moment = require('moment');

export default {
  data() {
    return {
  el: '#chat',
  data: {
    loading: true,
    messages: [],
    form: '',
    input: '',
    user: null,
  }}
    },
  methods: {
    keySubmit: (message, $event) => {
      if ($event.keyCode === 13 && !$event.shiftKey) {
        $event.preventDefault();
        // if (this.user && message && message.trim()) {
        //   this.$socket.emit('send-message', {
        //     user: this.user,
        //     msg: message,
        //   });
          // this.$children.forEach((value) => {
          //   Object.assign(value, { inputBind: null });
          // });
        }
      }
    },
    clickSubmit: (message, $event) => {
      $event.preventDefault();
      if (this.user && message && message.trim()) {
        // this.$socket.emit('send-message', {
        //   user: this.user,
        //   msg: message,
        // });
        // VueChat.$children.forEach((value) => {
        //   Object.assign(value, { inputBind: null });
        // });
      }
    },

  }
const addBulkMessage = (bulkMessage) => {
  bulkMessage.forEach((value, key) => {
    Object.assign(bulkMessage[key], {
      time: new Moment(value.time).format('DD/MM/YYYY - HH:mm').toString(),
    });
  });
  this.messages = bulkMessage;
};

// socket.on('read-message', bulkMessage => addBulkMessage(bulkMessage));
// socket.on('new-message', bulkMessage => addBulkMessage(bulkMessage));
// socket.on('message-saved', () => {
//   this.input = null;
// });

</script>
