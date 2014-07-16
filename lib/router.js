Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});
Router.map(function () {

    this.route('dashboard', {
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