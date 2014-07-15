Template.tomatosList.helpers({
    tomatos: function () {
        return Tomatos.find({}, {
            sort: {
                created: -1
            },
            limit: 5
        })
    }
});