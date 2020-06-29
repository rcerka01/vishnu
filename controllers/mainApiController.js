var config = require("../config/config");
var request = require("request");

function listEventStatusUrl(apiKey, eventId) { 
    return "https://ips.betfair.com/inplayservice/v1/eventTimelines"
    + "?_ak=" + apiKey
    + "&alt=json"
    + "&eventIds=" + eventId 
    + "&locale=en_GB"
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
