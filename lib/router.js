Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ return Meteor.subscribe('lists');}
});

Router.onBeforeAction('loading');

Router.map(function(){
	this.route('home', {
		path: '/',
		data: function(){ return Lists.find();}
	});

	this.route('listSingle',{
		path: '/lists/:_id',
		data: function(){ return Lists.findOne(this.params._id);}
	});
})
