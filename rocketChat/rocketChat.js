var RocketChatApi = require("rocketchat").RocketChatApi
var RocketChatClient = require("rocketchat").RocketChatClient
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.json())

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

app.listen(3000, () => console.log("Example app listening on port 3000!"))