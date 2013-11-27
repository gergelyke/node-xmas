var ac = require('ansi-canvas');

var canvas = ac(),
    i = 0,
    context;

function draw () {
    context = canvas.getContext('2d');

// draw a white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

// write Only XX days
    context.fillStyle = 'red';
    context.font = 'italic ' + ((8 + (i%4) * 0.5) + 'px') + ' sans-serif';
    context.textBaseline = 'bottom';
    context.fillText('Only ' + daysBetween(new  Date(), new Date(2013,11,25)) + ' days till XMAS!', 1, 10);
}

function render() {
    draw();
    var termCtx = canvas.getContext('2d');
    termCtx.clearRect(0, 0, context.width, context.height);
    i += 1;
    termCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    canvas.render();
}

function daysBetween(first, second) {

    // Copy date parts of the timestamps, discarding the time parts.
    var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
    var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());

    // Do the math.
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = two.getTime() - one.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.
    return Math.floor(days);
}


setInterval(function(){
    render();
}, 100);