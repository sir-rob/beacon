
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        var element = document.getElementById('deviceProperties');
        element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                            'Device Cordova: '  + device.cordova  + '<br />' +
                            'Device Platform: ' + device.platform + '<br />' +
                            'Device UUID: '     + device.uuid     + '<br />' +
                            'Device Version: '  + device.version  + '<br />';
    }

    
};

var searchTimer,
    stopWatch,
    time = 0,
    elapsed = '0.0';
// INITIALIZE
function Ctrl($scope) {
    $scope.text = 'guest';
    $scope.word = /^\s*\w*\s*$/;
    $scope.change = function() {
        //alert("change");
        clearInterval(searchTimer);
        searchTimer = setTimeout(function(){
            clearInterval(stopWatch);
            $(".result").remove();
            stopWatch = setInterval(function(){
                time += 100;
                elapsed = Math.floor(time / 100) / 10;
                if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
                $("#timer").html(elapsed+" secs");
            }, 100);
            searchName($scope.yourName);
        }, 700)
    };
}




// CONTACTS //////////////////////////////////////////////////////////////

function onSuccess(contacts) {
    //alert('Found ' + contacts.length + ' contacts.');
    clearInterval(stopWatch);
    for (var i = 0; i < contacts.length; i++) {
        //console.log("Display Name = " + contacts[i].displayName);
        $("div.app").append("<div class='result'>"+contacts[i].displayName+"</div>")
    }
}

function onError(contactError) {
    alert('onError!');
};

// // find all contacts with 'Bob' in any name field
function searchName(name_str){
    if(name_str == "" || !name_str){
        clearInterval(stopWatch);
        return false;
    } 
    // alert("searchName",name_str);
    var options      = new ContactFindOptions();
    options.filter   = name_str;
    options.multiple = true;
    var fields       = ["name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

$(document).ready(function(){
    console.log("jQuery");
});