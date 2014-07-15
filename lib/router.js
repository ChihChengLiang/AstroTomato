Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});
Router.map(function () {
    if (!!Meteor.user) {
        //console.log("logged in");
        this.route('tomatosList', {
            path: '/'
        });
    } else {
        //console.log("not logged in");
        this.route('welcome', {
            path: '/'
        });
    };
    this.route('newTomato', {
        path: '/newTomato'
    });
    this.route('countDown', {
        path: '/countDown'
    });
});

Router.onBeforeAction('loading');