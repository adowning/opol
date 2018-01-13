var RocketChatApi = require("rocketchat").RocketChatApi
var RocketChatClient = require("rocketchat").RocketChatClient
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.json())

const WebSocket = require("ws")

const ws = new WebSocket("ws://vultr.ashdevtools.com:3000/websocket", {
    perMessageDeflate: false
})

ws.on("open", function open() {
    ws.send({
        "msg": "method",
        "method": "login",
        "id": "42",
        "params": [{
            "oauth": {
                "credentialToken": "L9FndEWCqCotN6kci",
                "credentialSecret": "xV-MBVmSu0-frCQvI95a04SvoVSyJnk3UxeqCLT9zbr"
            }
        }]
    })
})

var rocketChatApi = null

sendmessage = function(rocketChatClient, req) {
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
})
var msg
data = function(x) {
    console.log(x)
}
onEventPublished = function(msg) {
    console.log(msg)
}
listen = function(rocketChatClient, req) {
    rocketChatClient.notify.room.onChanged("GENERAL", function(data) {
        console.log(data)
    })

    // rocketChatClient.on('message'function(msg))
    rocketChatClient = null
}

app.post("/listen", (req, res) => {
    console.log(req.body)
    var rocketChatApi = null
    config = {
        protocol: "http",
        host: "vultr.ashdevtools.com",
        port: "3000",
        username: "ash",
        password: "sugarlips42"
    }
    rocketChatClient = new RocketChatClient(config)
    rocketChatClient.authentication.login("ash", "sugarlips42", function(
        err,
        body
    ) {
        console.log(err)
        if (!err) {
            this.listen(rocketChatClient, req)
        }
    })
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))