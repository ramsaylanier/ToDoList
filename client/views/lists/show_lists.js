Template.showLists.events({
	'click .add-list-btn': function(e){
		e.preventDefault();
		$('.sidebar').toggleClass('add-list-active');
	},
	'submit form': function(e){
		e.preventDefault();
		var listName = $(e.target).find('[name=list-name]').val();

		Meteor.call('addList', listName, function(error, id){
			if(error){
				throwError(error.reason, 'error')
			}
		});
	},
	'click .list-name': function(e){
		$('.list-name').removeClass('active');
		$(e.target).parent().addClass('active');
	}
});

Template.showLists.helpers({
	lists: function() { 
		return Lists.find();
	}
})

Template.listItem.rendered = function(){
	var $item = $(this.find('.list-name'));
	Meteor.defer(function() {
		$item.removeClass('loaded');
	});
}