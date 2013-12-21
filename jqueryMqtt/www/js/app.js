$(document).bind("mobileinit", function(){
	console.log(">>>mobileinit event");
	$.mobile.defaultPageTransition = "slide";
	$.mobile.listview.prototype.options.filterPlaceholder = "";
	$.mobile.listview.prototype.options.dividerTheme = "a";
	//$.mobile.touchOverflowEnabled = true;
	//$.mobile.page.prototype.options.addBackBtn = true;
	//$.support.touchOverflow = true;
    
	console.log("<<<mobileinit event");
});

// Contacts Page functions
$(document).on("pageinit", "#ContactsPage", function() {
	console.log(">>>ContactsPage pageinit event");
	
	var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    
    var fields = ["id", "name", "displayName", "phoneNumbers", "emails", "photos"];
    
    navigator.contacts.find(
    	fields, 
    	onContactsSuccess,
    	onContactsFail,
    	options
    );
	
	console.log("<<<ContactsPage pageinit event");
});

function onContactsSuccess(contacts) {

	for (var i=0; i<contacts.length; i++) {
		if (contacts[i].phoneNumbers) {
			for(var j=0; j<contacts[i].phoneNumbers.length; j++) {
				// for some reason ios7 displays null when using displayName...
				$("#ContactsPage #contacts").append("<li><a><img src='img/avatar.gif'/><h4 >" + contacts[i].name.givenName + " " + contacts[i].name.familyName + "</h4><p>"+ contacts[i].phoneNumbers[j].value +"</p></a></li>").listview("refresh");  
			}
		}
	}
}

function onContactsFail(error) {
	console.log(error);
}

// Chat Page functions
$(document).on("pageinit", "#ChatPage", function() {
	console.log(">>>ChatPage pageinit event");
	
	
	$(".send").unbind().on("tap", function(event) {
		
		var messageInput = $(".message");
		
		if (messageInput.val() != "") {
			var chatMessage = document.createElement("div");
			var $chatMessage = $(chatMessage).addClass("bubble-right").html(messageInput.val());
			
			$("#chat-messages").append($chatMessage);
			messageInput.val("");
			messageInput.focus();
			
			//client.send(message);
			return false;
		}
	});
	$(".message").keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $(".send").tap();
        }
    });
	
	console.log("<<<ChatPage pageinit event");
});

// jQuery Mobile IOS header fix...
$(document).on("blur", "input, textarea", function() {
	
    setTimeout(function() {
    	if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
    		window.scrollTo(document.body.scrollLeft, document.body.scrollTop + 20 + "px");
    	} else {
    		window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
    	}
    }, 0);
});

$(document).on("pageinit", function(event) {
    if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
        $("body").addClass("ios7");
        $('body').append('<div id="ios7statusbar"/>');
    }
});