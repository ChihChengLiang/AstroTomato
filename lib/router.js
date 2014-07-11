Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});
Router.map(function () {
    this.route('welcome', {
        path: '/'
    });
    this.route('newTomato', {
        path: '/newTomato'
    });
    this.route('countDown', {
        path: '/countDown'
    });
});

Router.onBeforeAction('loading');