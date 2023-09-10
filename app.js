var body = document.getElementsByTagName('body')[0];
var button = document.getElementsByTagName('button')[0]
console.log(body)
var colors = ['brown' , 'red' , 'yellow', 'purple' ,'blue', 'white']
var i=0;
function color(){
    i++;
    random = [Math.floor(Math.random()*(colors.length-1))]
    body.style.backgroundColor = colors[random];
    button.innerText = colors[random];
    if (i >= colors.length-1) {
        i = -1
    }
}