<!DOCTYPE html>
<html>

<head>
    <title>Addition using Function</title>
</head>

<body>

<h2>Addition using JavaScript Function</h2>

First Number :
<input type="text" id="num1">

<br><br>

Second Number :
<input type="text" id="num2">

<br><br>

<button onclick="add()">
    Add
</button>

<script>

function add()
{

var a = parseInt(document.getElementById("num1").value);

var b = parseInt(document.getElementById("num2").value);

var sum = a + b;

alert("The sum is: " + sum);

}

</script>

</body>
</html>
