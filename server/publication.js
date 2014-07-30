Meteor.publish('tomatos', function () {
    return Tomatos.find({
        user: this.userId
    }, {
        sort: {
            "created": -1
        }
    });
});