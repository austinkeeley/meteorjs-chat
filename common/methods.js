Meteor.methods( {
	addMessage : function (newMessage) {

		if (newMessage.userName == "") {
			throw new Meteor.Error(413, "Missing a user name...");
		}
		if (newMessage.message == "") {
			throw new Meteor.Error(413, "Missing message content...");
		}
		var id = Messages.insert(newMessage);
		
		var cursor = Messages.find();
		if (cursor.count() > 20) {
			var oldestMessage = Messages.findOne();
			Messages.remove(oldestMessage);
		}

		return id;
	}
});
