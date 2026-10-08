<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <div class=""container">
        <h2>Student Registration Form</h2>

        <form action="#" method="get">
            <table>
                <tr>
                    <td>Full /name</td>
                    <td><input type="text" name="fullname" required></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name="email" required></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" required></td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td><input type="Mobile Number" name="Mobile Number" required></td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td><input type="Age" name="Age" required></td>
                </tr>
                <tr>
                    <td>DOB</td>
                    <td><input type="DOB" name="DOB" required></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                    <input type="radio" name="gender" value="Male">Male
                    <input type="radio" name="gender" value="Female">Female
                    <input type="radio" name="gender" value="Other">Other
                    </td>
                </tr>
                <tr>
                    <td>Hobbies</td>
                    <td>
                        <input type="checkbox" name="hobby" value="Reading">Reading
                        <input type="checkbox" name="hobby" value="Sports">Sports
                        <input type="checkbox" name="hobby" value="Music">Music
                    </td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>
                        <select name="country">
                            <option>Select Country</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>Australia</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <textarea name="address" rows="4"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Upload Photo</td>
                    <td><input type="file" name="photo"></td>
                </tr>
                <tr>
                    <td>Favorite colour</td>
                    <td><input type="color" name="color"></td>
                </tr>
                <tr>
                    <td>Skill Level</td>
                    <td><input type="range" name="skill" min="0" max="100"></td>
                </tr>
                <tr>
                    <td>Website</td>
                    <td><input type="url" name="website"></td>
                </tr>
                <tr>
                    <td>Preffered Time</td>
                    <td><input type="time" name="time"></td>
                </tr>
                <tr>
                    <td colspan="2" class="buttons">
                    <input type="submit" value="Register">
                    <input type="reset" value="clear">
                </tr>
            </table>
        </form>

</body>
</html>
