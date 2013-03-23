Messages = new Meteor.Collection("messages");

// just for testing...
Meteor.startup(function() {
	console.log("Starting the chat");
	if (Messages.find().count() == 0) {
		Messages.insert({ userName: "Server Message", message: "Starting meteor js chat..."});
	}
});
