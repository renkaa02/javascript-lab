<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>External Javascript Demo</h2>
    <p id="demo">Welcome!</p>
    <button onclick ="changeText()">Click Me!</button>
    <script src = "script.js"></script>
</body>
</html>


function changeText(){
    document.getElementById("demo").innerText = "Hello! This text is changing.";
}
