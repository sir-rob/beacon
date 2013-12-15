cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.saurabh.MQTTJavaPlugin/www/MQTTJavaPlugin.js",
        "id": "org.saurabh.MQTTJavaPlugin.MQTTJavaPlugin",
        "clobbers": [
            "window.MQTTJavaPlugin"
        ]
    }
]
});