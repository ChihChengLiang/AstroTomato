Template.newTomato.events({
    'submit form': function (e) {
        e.preventDefault();
        var tomato = {
            title: $(e.target).find('[name=title]').val(),
            created: Date.now()
        }
        tomato._id = Tomatos.insert(tomato);
        Router.go('/');
    }
});