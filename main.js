let blockX = 0;
let blockY = 0; 
let drawTimer;
const speed = 1;
const distance = 2;
let blockColor = 'pink';


function setup () {
    createCanvas(500, 500);
    background(0);

}

function drawBlock(x, y, color) {
    fill(blockColor || 255);
    noStroke();
    rect(x, y, 50, 50);
}
function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if (blockY - 50 <= height) {
            drawBlock(blockY, blockX, 255);
            blockY += distance;
        } else {
            blockY = 0;
            blockX += 50;
        }
        if(blockY + 100 > height && blockX + 50 > width){
            window.clearInterval(drawTimer);
            alert('This art has ended');
        }
    }, speed);
}, 1000);

