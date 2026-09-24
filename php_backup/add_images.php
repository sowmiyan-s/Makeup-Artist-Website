<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || !$_SESSION['admin_logged_in']) {
    header("Location: login.php");
    exit();
}

// Define upload directory
$upload_dir = "images/gallery/";
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true); // Create the uploads directory if it doesn't exist
}

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['upload_image'])) {
        // Handle Image Upload
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $original_name = basename($_FILES['image']['name']);
            $extension = pathinfo($original_name, PATHINFO_EXTENSION);
            $new_name = $_POST['new_name'] ? $_POST['new_name'] . '.' . $extension : $original_name;
            $upload_path = $upload_dir . $new_name;

            if (move_uploaded_file($_FILES['image']['tmp_name'], $upload_path)) {
                $success_message = "";
            } else {
                $error_message = "Failed to upload image.";
            }
        } else {
            $error_message = "Please select a valid image to upload.";
        }
    }

    if (isset($_POST['delete_image'])) {
        // Handle Image Deletion
        $image_to_delete = $_POST['image_to_delete'];
        if (file_exists($upload_dir . $image_to_delete)) {
            unlink($upload_dir . $image_to_delete);
            $success_message = "Image deleted successfully!";
        } else {
            $error_message = "Image not found.";
        }
    }
}

$images = array_diff(scandir($upload_dir), ['.', '..']); // Get the list of images
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery Manager</title>
    
  <!-- Basic Meta Tags for SEO -->
  <meta name="description" content="Thilothana Makeup Artist - Professional and affordable makeup services for all occasions, ensuring satisfaction and customized beauty.">
  <meta name="keywords" content="makeup artist, bridal makeup, professional makeup, HD makeup, affordable makeup, celebrity makeup, party makeup, Thilothana">
  <meta name="author" content="Thilothana">
  <meta property="og:title" content="Thilothana Makeup Artist">
  <meta property="og:description" content="Professional and affordable makeup services for brides, celebrities, and everyday individuals looking to enhance their natural beauty.">
  <meta property="og:image" content="images/ads.jpg">
  <meta property="og:url" content="https://http://thilothanamakeupartist.in">
  <meta property="og:type" content="website">
     <link rel="icon" href="images/fav.png" type="images/fav.png">
    <style>
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f9fafb;
        color: #333;
    }

    h1, h2 {
        text-align: center;
        color: white;
        padding: 10px;
        background-color: #ff5722;
        margin-top: 0px;
    }

    form {
        margin: 15px auto;
        padding: 15px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        width: 90%;
    }

    form label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
    }

    form input[type="text"],
    form input[type="file"],
    form button {
        width: 100%;
        margin-bottom: 15px;
        padding: 12px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-sizing: border-box;
    }

    form button {
        background-color: #3498db;
        color: white;
        border: none;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    form button:hover {
        background-color: #2980b9;
    }

    .images {
        margin: 20px auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        width: 90%;
    }

    .images img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .image-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        flex-wrap: wrap;
    }

    .image-row img {
        margin-right: 15px;
    }

    .image-row form {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .image-row form button {
        padding: 8px 10px;
        background-color: #e74c3c;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.3s;
    }

    .image-row form button:hover {
        background-color: #c0392b;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        form, .images {
            width: 95%;
        }

        .image-row {
            flex-direction: column;
            align-items: flex-start;
        }

        .image-row img {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 480px) {
        h1, h2 {
            font-size: 1.5rem;
        }

        form input[type="text"],
        form input[type="file"],
        form button {
            font-size: 0.9rem;
            padding: 10px;
        }

        .image-row form button {
            font-size: 0.8rem;
        }
    }
</style>

</head>
<body>
    <h1>Admin Gallery Manager</h1>
    <?php if (!empty($success_message)) echo "<p style='color: green;'>$success_message</p>"; ?>
    <?php if (!empty($error_message)) echo "<p style='color: red;'>$error_message</p>"; ?>

    <!-- Image Upload Form -->
    <form method="POST" enctype="multipart/form-data">
        <label for="image">Select Image to Upload:</label>
        <input type="file" name="image" id="image" accept="image/*" required>

        <label for="new_name">Rename Image (optional):</label>
        <input type="text" name="new_name" id="new_name" placeholder="New name without extension">

        <button type="submit" name="upload_image">Upload Image</button>
    </form>

    <!-- Display Uploaded Images -->
    <div class="images">
        <h2>Uploaded Images</h2>
        <?php if (count($images) > 0): ?>
            <?php foreach ($images as $image): ?>
                <div class="image-row">
                    <img src="<?= $upload_dir . $image ?>" alt="<?= $image ?>">
                    <form method="POST" style="display: inline;">
                        <input type="hidden" name="image_to_delete" value="<?= $image ?>">
                        <button type="submit" name="delete_image" style="background-color: red; color: white;">Delete</button>
                    </form>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <p>No images uploaded yet.</p>
        <?php endif; ?>
    </div>
</body>
</html>
