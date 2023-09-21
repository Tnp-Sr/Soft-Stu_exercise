var bgColors = ["purple","blue","green","yellow","orange","red"]
var fontColors = ["pink","yellow","white","green","blue","black"]
var bgIndex = 0
var fontIndex = 0

function startWorker(){
    interval = setInterval(function(){
        var dates = new Date();
        var bgColor = bgColors[bgIndex];
        var fontColor = fontColors[fontIndex];
        bgIndex = bgIndex+1
        fontIndex = fontIndex+1
        if(bgIndex >= 6){
            bgIndex = 0 
        }
        if(fontIndex >= 6){
            fontIndex = 0 
        }

        postMessage({date:dates,bgColor:bgColor,fontColor:fontColor});
    },1000)
}
function stopWorker(){
    clearInterval(interval)
}

// get msg from main
onmessage = function(e){
    if(e.data == "start"){
        startWorker()
    }
    else if (e.data == "stop"){
        stopWorker()
    }
}