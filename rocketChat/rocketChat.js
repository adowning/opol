var RocketChatApi = require("rocketchat").RocketChatApi
var RocketChatClient = require("rocketchat").RocketChatClient
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.json())

// const config = {
//     protocol: "http",
//     host: "vultr.ashdevtools.com",
//     port: "3000",
//     username: "ash",
//     password: "sugarlips"
// }

// rocketChatClient = new RocketChatClient(config)
// rocketChatClient.authentication.me(function(err, body) {
//     console.log(err)
//     console.log(body)
// })
var rocketChatApi = null
    // var rocketChatApi = new RocketChatApi(
    //     "http",
    //     "vultr.ashdevtools.com",
    //     3000,
    //     "ash",
    //     "sugarlips42"
    // )

// rocketChatApi.login(config.username, config.password, function(err, body) {
//     console.log(body)
//     rocketChatApi.sendMsg("GENERAL", "HAI", function(err, body) {
//         console.log(err)
//     })
// })
sendmessage = function(rocketChatClient, req) {
    // console.log("recieved " + req.body.channel)
    // console.log("recieved " + req.body.user)
    // var rocketChatApi = null

    // rocketChatApi = new RocketChatApi(
    //     "http",
    //     config.host,
    //     config.port,
    //     "ash",
    //     "sugarlips"
    // )

    // rocketChatApi.joinRoom(req.body.channel, function(err) {})
    rocketChatClient.chat.postMessage({ roomId: req.body.channel, text: req.body.msg },
        function(err) {
            console.log(err)
        }
    )
    rocketChatClient = null
}
var config = {}
app.post("/sendmsg", (req, res) => {
    console.log(req.body)
    var rocketChatApi = null
    config = {
        protocol: "http",
        host: "vultr.ashdevtools.com",
        port: "3000",
        username: req.body.user,
        password: "Andrews1"
    }
    rocketChatClient = new RocketChatClient(config)
    rocketChatClient.authentication.login(req.body.user, "Andrews1", function(
        err,
        body
    ) {
        console.log(err)
        if (!err) {
            this.sendmessage(rocketChatClient, req)
        }
    })

    // this.sendmessage(req)
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))