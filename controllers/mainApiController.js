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
            console.log(listEventStatusUrl(config.user.apiKey, req.params.eventid));
            request 
                .get(listEventStatusUrl(config.user.apiKey, req.params.eventid))
                .on('error', function(err) {
                    console.log("Error to retrieve game stats: " + err)
                })
                .pipe(res)
            })

    }
}
