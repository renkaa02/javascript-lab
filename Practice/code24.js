<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Mouse Down and Mouse Up Event.</h2>
    <div id="box" style="width : 200px;height : 100px;background : skyblue;text-align : center;line-height : 100px;">Press Mouse</div>
    <script>
        const box = document.getElementById("box");
        box.addEventListener("mousedown", function() {
            box.innerHTML = "mouse button pressed";
        });
        box.addEventListener("mouseup", function() {
            box.innerHTML = "mouse button released";
        });
    </script>
</body>
</html>
