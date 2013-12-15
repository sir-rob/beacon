var MQTTJavaPlugin =  {
    createEvent: function(server, port, username, message, topic, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MQTTJavaPlugin', // mapped to our native Java class called "MQTTJavaPlugin"
            'connect', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "server": server,
                "port": port,
                "username": username,
                "message": message,
                "topic": topic
            }]
        );
    }
}
module.exports = MQTTJavaPlugin;