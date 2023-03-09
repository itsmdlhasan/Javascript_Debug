// change background
const bgChange = setTimeout(bgColor, 5000);

function bgColor() {
    const bg = document.getElementById('background');
    bg.style.backgroundColor = 'grey';
}

// stop background to be changed
function bgStop() {
    clearTimeout(bgChange);
}





// getting count
const count = document.getElementById('count');

// start count
let num = 0;
function counterStart() {
    count.innerText = ++num;
}

let countStart;
document.getElementById('start-btn').addEventListener('click', function(){
    countStart = setInterval(counterStart, 1000)
})

// stop count
document.getElementById('stop-btn').addEventListener('click', function(){
    clearInterval(countStart);
})

// reset count
document.getElementById('reset-btn').addEventListener('click', function() {
    num = 0;
    count.innerText = num;
})