Template.newTomato.events({
    'submit form': function (e) {
        e.preventDefault();
        var tomato = {
            title: $(e.target).find('[name=title]').val(),
            created: Date.now(),
            tag: $(e.target).find('[name=tag]').tagsinput('items')
        };

        Meteor.call('tomatose', tomato, function (error) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            } else {
                Router.go('/');
            }
        });
    }
});


Template.newTomato.rendered = function () {
    $("input[name='tag']").tagsinput({
        confirmKeys: [192, 44]
    });
};