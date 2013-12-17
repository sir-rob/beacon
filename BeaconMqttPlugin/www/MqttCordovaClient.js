var MqttCordovaClient =  {
    sendHardCoded: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "MqttCordovaClient", "connect", []);
    }
}
module.exports = MqttCordovaClient;