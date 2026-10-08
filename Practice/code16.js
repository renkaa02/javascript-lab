<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Variable Input</title>
</head>
<body>
    x: <input type="Number" id="num1"> <br> <br>
    y: <input type="Number" id="num2"> <br> <br>
    z: <input type="Number" id="num3"> <br> <br>

    <button onclick="showValues()">Show</button>
    <p id="result"></p>
    <script>
        function showValues(){
            var x = Number(document.getElementById("num1").value);
            let y = Number(document.getElementById("num2").value);
            const z = Number(document.getElementById("num3").value);
        

        x = x + 10;
        y = y * 10;
        //z = z +2;
        document.getElementById("result").innerHTML = 
        "Updated x: "+ x+ "<br>" + 
        "Updated y: "+ y+ "<br>" + 
        "z (const): " +z;
        }
    </script>
</body>
</html>
