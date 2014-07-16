if (Tomatos.find().count() === 0) {
    Tomatos.insert({
        title: 'Did nothing',
        project: 'do nothing',
        created: Date.now(),
        tag: ['demo', 'do nothing']
    });
    Tomatos.insert({
        title: 'Did nothing again',
        project: 'do nothing',
        created: Date.now(),
        tag: ['demo', 'do nothing']
    });
    Tomatos.insert({
        title: 'Still did nothing once again',
        project: 'do nothing',
        created: Date.now(),
        tag: ['demo', 'do nothing']
    });
    Tomatos.insert({
        title: 'Made a coffee',
        project: 'coffee',
        created: Date.now(),
        tag: ['demo', 'sugar', 'coffee']
    });
}
if (Projects.find().count() === 0) {
    Projects.insert({
        title: 'Do nothing',
        url: 'http://www.foo.com',
        description: 'This project is mean to achieve greater good by doing nothing.',
        created: Date.now()
    });
    Projects.insert({
        title: 'Become a coffee maker',
        url: 'http://www.foo.com',
        description: 'Make some nice coffee to save the world!',
        created: Date.now(),

    });

}