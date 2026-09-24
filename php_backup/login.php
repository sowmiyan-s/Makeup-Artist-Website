<?php
session_start();

// Hardcoded username and password
$admin_username = "admin";
$admin_password = "adminpass";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the username and password match
    if ($username === $admin_username && $password === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: admin_panel.php");
        exit();
    } else {
        $error = "Invalid username or password.";
    }
}
?>

<?php
   error_reporting(E_ALL);  // Report all PHP errors
   ini_set('display_errors', 1);  // Display errors in the browser
   ?>
   

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="icon" href="images/fav.png" type="images/fav.png">
    <title>Admin Login</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        /* Body */
        body {
            background-color: #fff; /* White background */
            color: #333; /* Dark text */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
        }

        /* Form Container */
        form {
            background-color: #fff; /* White */
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        h2 {
            color: #ff5722; /* Red */
            margin-bottom: 20px;
            font-size: 1.8rem;
        }

        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }

        button {
            width: 100%;
            padding: 12px;
            background-color: #ff5722; /* Red */
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #e64a19; /* Darker red */
        }

        p {
            color: #f44336; /* Error message in red */
            margin-bottom: 15px;
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
            h2 {
                font-size: 1.5rem;
            }

            input[type="text"], input[type="password"] {
                font-size: 0.9rem;
                padding: 10px;
            }

            button {
                font-size: 0.9rem;
                padding: 10px;
            }
        }

        @media (max-width: 768px) {
            form {
                padding: 20px;
            }

            h2 {
                font-size: 1.6rem;
            }
        }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Admin Login</h2>
        <?php if (!empty($error)) echo "<p>$error</p>"; ?>
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>
