var totalShapes = 0;
var lastSqId = 1;
var lastCircId = 1; 

function initDraw() {
    var menu = document.getElementsByName('option');

    if(menu.value == "squares"){
        drawSquare();
    }
    else if(menu.value == "circles"){
        drawCircle();
    }
    else if(menu.value == "random") {
        drawRand();
    }
    document.getElementById("r").disabled = true;
    document.getElementById("s").disabled = true;
    document.getElementById("c").disabled = true;
}



function drawSquare()
{
    for (var i = 1; i <= 5; i++)
    {
        var parent = document.getElementById("container");
        var sq = document.createElement("div");

        var x = Math.floor(Math.random() * 401);
        var y = Math.floor(Math.random() * 401);
        var r = (Math.random()*255) + 1;
        var g = (Math.random()*255) + 1;
        var b = (Math.random()*255) + 1;

        var squareId = "sq" + lastSqId;

        sq.setAttribute("style", "position:absolute;top:" + y + "px;left:" + x + "px;width:50px;height:50px;background-color:rgb(" + r + "," + g + "," + b + ");");
        sq.setAttribute("id", squareId);
        sq.setAttribute("onmouseover", "hide(this.id)");

        parent.appendChild(sq);
        totalShapes += 1;
        lastSqId += 1;
    }
}

function drawCircle()
{
    for (var i = 1; i <= 5; i++)
    {
        var parent = document.getElementById("container");
        var circ = document.createElement("div");

        var x = Math.floor(Math.random() * 401);
        var y = Math.floor(Math.random() * 401);
        var r = (Math.random()*255) + 1;
        var g = (Math.random()*255) + 1;
        var b = (Math.random()*255) + 1;

        var circleId = "circ" + lastCircId;

        circ.setAttribute("style", "position:absolute;top:" + y + "px;left:" + x + "px;width:50px;height:50px;background-color:rgb(" + r + "," + g + "," + b + ");border-radius:50%");
        circ.setAttribute("id", circleId);
        circ.setAttribute("onmouseover", "hide(this.id)");

        parent.appendChild(circ);
        totalShapes += 1;
        lastCircId += 1;
    }
}

//add function to check if to draw circle of square
function drawRand()
{
    var rand = Math.floor(Math.random()*2);
    if (rand == 0)
    {
        drawSquare();
    }
    else if (rand == 1)
    {
        drawCircle();
    }
}

function hide(id)
{   
    var child =  document.getElementById(id);
    child.remove();
    totalShapes -= 1;
    if (totalShapes == 0)
    {
        alert("Last one!");
    }
}
