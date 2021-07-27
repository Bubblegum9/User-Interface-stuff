< !DOCTYPE html >
    <
    html >
    <
    link rel = "stylesheet"
href = "https://fonts.googleapis.com/css?family=Pacifico" >
    <
    link rel = "stylesheet"
href = "https://fonts.googleapis.com/css?family=Sedgwick Ave" >
    <
    link rel = "stylesheet"
href = "https://fonts.googleapis.com/css?family=Truculenta" >
    <
    style >
    .YOUR {
        font - family: Truculenta;
        font - size: 40 px;
        color: Black;
        text - align: center;
    }

.Future {
    font - family: Truculenta;
    font - size: 68 px;
    color: Black;
    text - align: center;
}

.create {
    font - family: pacifico;
    font - size: 55 px;
    color: #4C4C6D;

        text-align: center;

    }

    

    .today {

        font-family: Truculenta;

        font-size: 70px;

        color: Black;

        text-align: center;

    }

    

    .button {

        font-family: Sedgwick Ave;

        font-size: 20px;

        color: # 4 C4C6D;
    text - align: center;
} <
/style>

<
body background = "https://i.pinimg.com/564x/cb/b2/f3/cbb2f3d7c7beef3d2dd9582ad9fdd4f5.jpg" >

    <
    body >



    <
    div class = "script" >
    <
    script >
    function mouseDown() {
        document.getElementById("mouse").style.color = "Black";
    }

function mouseUp() {
    document.getElementById("mouse").style.color = "Yellow";
}

function mouseClick() {
    document.getElementById("element").innerHTML = "Hidden Elements"
}

function doubleClick() {
    document.getElementById("title").innerHTML = "Given below is a sample text."
} <
/script> <
center > < img src = "https://media.tenor.com/images/eea8bc66ee7e95f304d233232a943344/tenor.gif" > < /center> <
    h1 class = "YOUR"
ondblclick = "doubleClick()" > YOUR < /h1> <
    h1 class = "Future"
ondblclick = "doubleClick()" > Future < /h1> <
    h2 class = "create"
id = "title" > is created by what you do </h2> <
        h1 class = "today"
    id = "mouse"
onmousedown = "mouseDown()"
onmouseup = "mouseUp()" > { TODAY }. < br >

    <
    center >
    <
    div class = "part" >

    <
    h1 class = "create"
id = "mouse"
onmousedown = "mouseDown()"
onmouseup = "mouseUp()" > Not Tomorrow. < br >

    <
    /center> <
    /h1> <
    center >
    <
    button class = "button"
id = "btn"
onclick = "mouseClick()" > Click to Reveal < /button> <
    p id = "elemnt" > < /p> <
    /body> <
    /div> <
    /center>

<
/html>