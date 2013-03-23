Messages = new Meteor.Collection("messages");

Template.chatTemplate.messages = function() {
	return Messages.find();
};

Template.chatTemplate.events = {
	'submit' : function(e, tmpl) {
		e.preventDefault();
		console.log("Clicked submit!");

		var newMessage = {
			userName : tmpl.find("#userName").value,
			message : tmpl.find("#chatInput").value
		};

		// clear out the old message
		tmpl.find("#chatInput").value = "";

		Meteor.call(
			"addMessage",
			newMessage,
			function (err, result) {
				if (err) {
					alert("Could not send message " + err.reason);
				}
			}
		);
	}
};

