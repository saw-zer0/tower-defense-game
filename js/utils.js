function getDistance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1,2));
}

function getRandom(min, max){
    return (Math.random()*(max - min))+ min;
}
