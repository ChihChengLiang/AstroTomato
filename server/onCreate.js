Accounts.onCreateUser(function () {
    id = Meteor.userId
    now = Date.now()
    Tomatos.insert({
        user: id,
        title: 'Did nothing',
        created: now,
        tag: ['demo', 'do nothing'],
    })
    Tomatos.insert({
        user: id,
        title: 'Did nothing again',
        created: now - 3 * 3600 * 1000,
        tag: ['demo', 'do nothing'],
    });
    Tomatos.insert({
        user: id,
        title: 'Still did nothing once again',
        created: now - 5 * 3600 * 1000,
        tag: ['demo', 'do nothing'],
    });
    Tomatos.insert({
        user: id,
        title: 'Made a coffee',
        created: now - 38 * 3600 * 1000,
        tag: ['demo', 'sugar', 'coffee'],
    });
})