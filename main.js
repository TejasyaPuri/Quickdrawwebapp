function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}
function clear()
{
    background("white");
}
function preload()
{
   classifier = ml5.imageClassifier("DoodleNet");
}

function draw()
{
    strokeWeight(7);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch()
    {
        if(drawn_sketch == sketch)
        {
            timer_counter = 0;
            answer_holder = "set";
            score = score+1;
            document.getElementById("score").innerHTML = "Score: "+ score;
        }
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(esults)
        document.getElementById('label').innerHTML = ' Label : ' + results[0].label;
        document.getElementById('confidence').innerHTML = ' Confidence : ' + Math.round(results[0].confidence*100) + "%";

        utterthis=new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis);
    }
}