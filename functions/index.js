const functions = require('firebase-functions'),
    admin = require('firebase-admin'),
    axios = require('axios');
(maps = require('@google/maps').createClient({
    // key: functions.config().googlemaps.key,
    key: 'AIzaSyCPsEEFceW4ey3xbpFf6b_Ab_n3yO77qkk',
    Promise: require('q').Promise
})),
(storage = require('@google-cloud/storage')())

admin.initializeApp(functions.config().firebase)

var token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4Zjg1MzAzNDlhMDhlNzAwODYyYzcwNDM5OTRjMDhhNTBlMWI2NGE0ZWYxNjA0NjM3ZjcwNjc4Y2QyYjViMmQyM2NmNTU0NzExYmMwNTg5In0.eyJhdWQiOiIxIiwianRpIjoiNjhmODUzMDM0OWEwOGU3MDA4NjJjNzA0Mzk5NGMwOGE1MGUxYjY0YTRlZjE2MDQ2MzdmNzA2NzhjZDJiNWIyZDIzY2Y1NTQ3MTFiYzA1ODkiLCJpYXQiOjE1MTQ1MzE4OTYsIm5iZiI6MTUxNDUzMTg5NiwiZXhwIjoxNTQ2MDY3ODk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dyzpV0D-KkEcmPwTXXnCYkSbvKlqCBYDZMBgzNQvRz9ydgygOVEX8RcRigEjtAIYD4vquok1aq3SmHm_4ZNuOyux82sZt6HiucBJCWzZhWJ1t5sEeMuQaWB2hDxQEu8HbS-xRYl4df94BP_vJM-v-FfKCJ3x-QZaY6Srmu9m8hzZWGfG-U7jbBDxDV1RFMyD6506i0B1Z-cTrBBSY4q0V4Ke6JF7LYzX_sm3KoV6NOEjGqKtNqWwOOfCXfdwgsBV3GUCZCRDBdBXQSACBN8cUl5syalP9tIIuZ4Zzzcxff-4WzuEWwkQL5gYSX5bESG59NmEDFyGI7dmZXt9ytHOsQZGy0bOgRJkNtqAID1F-0TXduMr0pJzszRtVawqqrVWQ2oS2UvI8JKzv4F5c7m9A6l3G9i3CnWT5wgN8QLNsh0D7PlrmRQQl5P8D4WjxfHsvyKn7cp4oH605Rupbx6UG-TsFR4RoNQQ4xJW6zeNnIEOtPTFftJNNIxQnt4JDh2v8fd5hbg0MkDHjt-nflVvf53KfPnLR_gSqvyBZzmKXWAz8zbH_ISWLY7cywvmzA5qYtdr-UDetU7-KEwiSbVZH-FY4GYBlcDR4C35nC9CO1z_e8x-0p4WBjvDNYO7Q3UWt7U8EsnAXHGIKcNWO38zFJo0VHqgUCW7zBtwiPCAA5o'

var snipeit = axios.create({
    baseURL: 'http://andrewsgroup.hopto.org/api/v1/',
    timeout: 1000,
    headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json'
    }
})

exports.date = functions.https.onRequest((req, res) => {
    console.log(req.body.text)
    if (
        req.body.text == 'Asset Checked In' ||
        req.body.text == 'Asset Checked Out'
    ) {
        snipeit
            .get('hardware?status=Deployed')
            .then(function(response) {
                console.log(response.data)
                var cod = admin.database().ref(`/checkedOutDevices`)
                cod.set(response.data.rows)
                res.status(200).send('OK')
            })
            .catch(function(error) {
                console.log(error)
                res.status(200).send('Not OK')
            })
    } else {
        console.log('unkown command')
        res.status(200).send('Not OK')
    }
})

// exports.setLatLng = functions.database
//     .ref('/users/{uid}/brunchSpots/{spot}/address')
//     .onWrite(event => {
//         if (!event.data.exists()) return

//         const position = event.data.ref.parent.child('position'),
//             errVal = { lat: null, lng: null, error: true }

//         return maps
//             .geocode({ address: event.data.val() })
//             .asPromise()
//             .then(
//                 response => {
//                     if (response.status !== 200 || response.json.status !== 'OK') {
//                         if (
//                             response.status !== 200 ||
//                             response.json.status !== 'ZERO_RESULTS'
//                         ) {
//                             console.info('Geocode failed:', response)
//                         }

//                         return position.set(errVal)
//                     }

//                     return position.set({
//                         lat: response.json.results[0].geometry.location.lat,
//                         lng: response.json.results[0].geometry.location.lng,
//                         error: null
//                     })
//                 },
//                 err => {
//                     console.error('Geocode error:', err)

//                     return position.set(errVal)
//                 }
//             )
//     })

// exports.removeBrunchLogo = functions.database
//     .ref('/users/{uid}/brunchSpots/{spot}/logo')
//     .onWrite(event => {
//         if (!event.data.previous.exists()) return

//         const bucket = storage.bucket(functions.config().firebase.storageBucket)
//         const imageId = event.data.previous.val()

//         return bucket
//             .file(
//                 'users/' +
//                 event.params.uid +
//                 '/images/' +
//                 imageId.toString() +
//                 '/original'
//             )
//             .delete()
//     })