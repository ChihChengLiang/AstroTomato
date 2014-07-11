defaultClock = 10
clock = defaultClock;
timeLeft = function () {
    if (clock > 0) {
        clock--;
        Session.set("time", clock);
        $("#countDownBar").attr('style', "width:" + (1 - clock / defaultClock) * 100 + "%");
        //console.log(clock);
    } else {
        //console.log("That's All Folks");
        Meteor.clearInterval(interval);
        Router.go("/newTomato");
    }
}
interval = Meteor.setInterval(timeLeft, 1000);