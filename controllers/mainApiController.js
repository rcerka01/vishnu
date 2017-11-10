var config = require("../config/config");
var request = require("request");

function listEventStatusUrl(apiKey, eventId) { 
    return "https://www.betfair.com/inplayservice/v1/eventDetails"
    + "?_ak=" + apiKey
    + "&alt=json" 
    + "&eventIds=" + eventId 
    + "&locale=en_GB"
    + "&productType=EXCHANGE"
    + "&regionCode=UK"
}

module.exports = { run: function(app) { 

        app.get("/api/listEventStatus/:eventId", function(req, res) {
            request 
                .get(listEventStatusUrl(config.user.apiKey, req.params.eventId))
                .on('error', function(err) {
                    console.log("Error to retrieve game stats: " + err)
                })
                .pipe(res)
            })

    }
}
