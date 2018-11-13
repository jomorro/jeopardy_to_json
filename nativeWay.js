module.exports = function (uri) {

    const http = require("http");
    const logSpacing = "\n\n\n";
    const wetBody;

    http.get(uri, response => {
        let jsonBody = "";

        // make sure we're supporting international characters
        response.setEncoding("utf8");

        // build our jsonBody string from the chunks of data as they are downloaded
        response.on("data", chunk => (jsonBody += chunk));

        // finally, hydrate and log it
        response.on("end", () => {
            console.log(logSpacing);
            console.log("Native Node HTTP library way of making a GET request");
            console.log("Status code:", response.statusCode);

            wetBody = JSON.parse(jsonBody);
            console.log(wetBody);
        });
    });
    return wetBody

}