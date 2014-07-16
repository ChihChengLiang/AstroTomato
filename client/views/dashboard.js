Template.dashboard.helpers({
    notloggedin: function () {
        console.log(!!!Meteor.user());
        return !!!Meteor.user()
    }
});