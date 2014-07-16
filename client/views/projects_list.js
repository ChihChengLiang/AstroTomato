Template.projectsList.helpers({
    projects: function () {
        return Projects.find({}, {
            sort: {
                created: -1
            },
            limit: 5
        })
    }
});