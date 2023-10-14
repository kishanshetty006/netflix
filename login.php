<?php
    

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get user input
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to your database (replace with your own credentials)
    $db = new PDO('mysql:host=localhost;dbname=netflix', 'username', 'password');

    // Query the database to check user credentials
    $stmt = $db->prepare('SELECT * FROM netflix1 WHERE username = :username AND password = :password');
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password); // In a production app, you should hash the password
    $stmt->execute();

    // Check if a matching user is found
    if ($stmt->rowCount() > 0) {
        // Redirect to index1.html after successful login
        header('Location: index1.html');
    } else {
        // Display an error message if login fails
        echo 'Invalid username or password.';
    }
}
?>
