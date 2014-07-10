if (Tomatos.find().count() === 0) {
    Tomatos.insert({
        title: 'I do nothing',
        project: 'do nothing',
        created: Date.now(),
        tag: ['demo', 'do nothing']
    });
    Tomatos.insert({
        title: 'I do nothing again',
        project: 'do nothing',
        created: Date.now(),
        tag: ['demo', 'do nothing']
    });
    Tomatos.insert({
        title: 'Still do nothing once again',
        project: 'do nothing',
        created: Date.now(),
        tag: ['demo', 'do nothing']
    });
}