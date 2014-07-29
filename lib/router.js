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
    this.route('countDownTomato', {
        path: '/countDownTomato'
    });
    this.route('countDownBreak', {
        path: '/countDownBreak'
    });
});

Router.onBeforeAction('loading');

Router.onBeforeAction(function () {
    clearErrors()
});