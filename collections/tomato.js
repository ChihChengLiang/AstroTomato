Tomatos = new Meteor.Collection('tomatos');

Meteor.methods({
    tomatose: function (tomatoAttribute) {
        var user = Meteor.user(),
            tomatoWithSameLink = Tomatos.findOne({
                url: tomatoAttribute.url
            });
        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new tomato");
        // ensure the tomato has a title
        if (!tomatoAttribute.title)
            throw new Meteor.Error(422, 'Please fill in a title');
        // check that there are no previous posts with the same link
        if (tomatoAttribute.url && tomatoWithSameLink) {
            throw new Meteor.Error(302,
                'This link has already been used',
                tomatoWithSameLink._id);
        }
        // pick out the whitelisted keys
        var tomato = _.extend(_.pick(tomatoAttribute, 'url', 'title', 'tag'), {
            userId: user._id,
            created: new Date().getTime()

        });
        var tomatoID = Tomatos.insert(tomato);
        return tomatoID;
    }
});