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
    	
    	$.mobile.loadPage("home.html", { showLoadMsg: false });
    	$.mobile.loadPage("contacts.html", { showLoadMsg: true });
    	$.mobile.loadPage("chat-list.html", { showLoadMsg: true });
    	$.mobile.loadPage("chat.html", { showLoadMsg: false });

        $.mobile.changePage("home.html");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
