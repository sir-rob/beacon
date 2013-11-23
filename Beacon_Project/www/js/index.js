/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
angular.module('App', []);

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

// MQTT MESSENGER /////////////////////////////////////////////////////
// client = new Messaging.Client(location.hostname, Number(location.port), "Alan");
// client = new Messaging.Client("localhost", 1883, "Alan");
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;
// client.connect({onSuccess:onConnect});

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("/World");
    message = new Messaging.Message("Hello");
    message.destinationName = "/World";
    client.send(message); 
};
function onConnectionLost(responseObject) {
if (responseObject.errorMessage)
  console.log("onConnectionLost:"+responseObject.errorMessage);
};
function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    client.disconnect(); 
};  

function WebSocketTest()
{
  if ("WebSocket" in window)
  {
     console.log("WebSocket is supported by your Browser!");
     // Let us open a web socket
     var ws = new WebSocket("ws://localhost:9998/echo");
     ws.onopen = function()
     {
        // Web Socket is connected, send data using send()
        ws.send("Message to send");
        console.log("Message is sent...");
     };
     ws.onmessage = function (evt) 
     { 
        var received_msg = evt.data;
        console.log("Message is received...");
     };
     ws.onclose = function()
     { 
        // websocket is closed.
        console.log("Connection is closed..."); 
     };
  }
  else
  {
     // The browser doesn't support WebSocket
     console.log("WebSocket NOT supported by your Browser!");
  }
}

// ON READY ////////////////////////////////
$(document).ready(function(){
    console.log("jQuery");
    WebSocketTest();
    client = new Messaging.Client("localhost", 1883, "Alan");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect});

});