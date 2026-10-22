<!DOCTYPE html>
<html>
<head>
    <title>Age Validation</title>
</head>
<body>

    <h2>Age Validation using Try-Catch</h2>

    <input type="text" id="age" placeholder="Enter your age">
    <button onclick="checkAge()">Check</button>

    <p id="result"></p>

    <script>
        function checkAge() {
            try {
                let age = document.getElementById("age").value;

                if (age == "") {
                    throw new Error("Age cannot be empty.");
                }

                age = Number(age);

                if (isNaN(age)) {
                    throw new Error("Please enter a valid number.");
                }

                if (age < 18) {
                    throw new Error("You are not eligible.");
                }

                document.getElementById("result").innerHTML = "You are eligible.";
            }
            catch (error) {
                document.getElementById("result").innerHTML = "Error: " + error.message;
            }
        }
    </script>

</body>
</html>
