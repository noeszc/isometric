window.onload = function () {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        tileWidth = 100,
        tileHeight = 50;

    context.translate(width / 2, 50);

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            drawTile(i, j, getRandomColor());
        }
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function drawTile(x, y, color) {
        context.save();
        context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);
        console.log((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);
        context.beginPath();

        context.moveTo(0, 0);
        context.lineTo(tileWidth / 2, tileHeight / 2);
        context.lineTo(0, tileHeight);
        context.lineTo(-tileWidth / 2, tileHeight / 2);

        context.closePath();
        context.fillStyle = color;
        context.fill();

        context.restore();
    }
}