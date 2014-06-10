Template.listSingle.helpers({
	listEntries: function(){
		return Lists.findOne(this._id).entries;
	}
});


Template.listSingle.events({
	'submit form': function(e){
		e.preventDefault();

		var listId = this._id;
		var entry = $(e.target).find("[name=add-item-field]").val();

		Meteor.call("addListEntry", listId, entry, function(error, id){
			if(error){
				throwError(error.reason, 'error')
			}
		});
	},
	'click .delete-entry-btn': function(e, template){
		e.preventDefault();

		var listId = template.data._id;
		console.log(listId);
		var entry = $(e.target).parent().data('entry-name');

		Meteor.call('removeListEntry', listId, entry, function(error, id){
			if(error){
				throwError(error.reason, 'error')
			}
		});
	}
})

Template.entrySingle.rendered = function(){
	var $item = $(this.find('.list-entry'));
	Meteor.defer(function() {
		$item.removeClass('loaded');
	});
}