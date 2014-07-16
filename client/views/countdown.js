timeLeft = function () {
    if (clock > 0) {
        clock--;
        Session.set("time", clock);
        $("#countDownBar").attr('style', "width:" + (1 - clock / defaultClock) * 100 + "%");
        //console.log(clock);
    } else {
        //console.log("That's All Folks");
        Meteor.clearInterval(interval);
        audio = new Audio('ring.ogg');
        audio.play();
        if (isBreak) {
            Router.go("/");
        } else {
            Router.go("/newTomato");
        }
    }
}

Template.countDownTomato.rendered = function () {
    if (!this._rendered) {
        this._rendered = true;
        defaultClock = 10;
        clock = defaultClock;
        interval = Meteor.setInterval(timeLeft, 1000);
        isBreak = false;
    }
}

Template.countDownBreak.rendered = function () {
    if (!this._rendered) {
        this._rendered = true;
        defaultClock = 5;
        clock = defaultClock;
        interval = Meteor.setInterval(timeLeft, 1000);
        isBreak = true;
    }
}