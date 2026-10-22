<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Enetr Name:
    <input type="text" id="name">
    <p id="output"></p>
    <script>
        const textbox = document.getElementById("name");
        textbox.addEventListener("keyup", Function() {
            document.getElementById("output").innerHTML = "You Entered: " + textbox.value;
        });
        
    </script>
</body>
</html>
