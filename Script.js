 

function dotFinder(centerX, centerY, radius, dotX, dotY){
    if((centerX+radius < dotX) || (centerX-radius > dotX)){
        alert('smart calculator');
        return true;
    }

    if((centerY+radius < dotY) || (centerY-radius > dotY)){
        alert('smart calculator');
        return true;
    }

    alert('smart calculator');
}

dotFinder(5, 6, 7, 8, 9)

var display = document.getElementById('display');

function press(x){
    display.value += x;
}

function del(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}