Lists = new Meteor.Collection("lists");

Meteor.methods({
	addList: function(listName){
		if (!listName){
			throw new Meteor.Error(422, 'Please enter a name for your list');
		}

		var list = {name: listName};

		var listId = Lists.insert(list);

		return listId;
	},
	addListEntry: function(listId, entry){
		if(!entry){
			throw new Meteor.Error(422, 'No entry was entered');
		}

		Lists.update({_id:listId}, {$push: {entries: entry}});
	},
	removeListEntry: function(listId, entry){
		Lists.update({_id:listId}, {$pull: {entries: entry}}, {multi: true});
	}
})