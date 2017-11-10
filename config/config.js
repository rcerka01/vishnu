var secret = require("./secret");

module.exports = {
    app: {
        protocol: "http",
        port: "3003",
    },
    user: {
        apiKey: secret.apiKey
    }
}
