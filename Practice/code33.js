<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Try-Catch Example</h2>
    <p id="result"></p>
    <script>
        //let name;
        try{
            document.getElementById("result").innerHTML = myname;
        }
        catch(error){
            document.getElementById("result").innerHTML = "Error: " + error.message;
        }
    </script>
</body>
</html>
