Projects = new Meteor.Collection('projects');

Meteor.methods({
    addproject: function (projectAttribute) {
        var user = Meteor.user(),
            projectWithSameLink = Projects.findOne({
                url: projectAttribute.url
            });
        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to create new project");
        // ensure the project has a title
        if (!projectAttribute.title)
            throw new Meteor.Error(422, 'Please fill in a title');
        // check that there are no previous posts with the same link
        if (projectAttribute.url && projectWithSameLink) {
            throw new Meteor.Error(302,
                'This link has already been used',
                projectWithSameLink._id);
        }
        // pick out the whitelisted keys
        var project = _.extend(_.pick(projectAttribute, 'url', 'title', 'description'), {
            userId: user._id,
            created: new Date().getTime()

        });
        var projectID = Projects.insert(project);
        return projectID;
    }
});