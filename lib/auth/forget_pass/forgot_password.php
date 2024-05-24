
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // اتصال به دیتابیس و بررسی وجود ایمیل
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "jirdo";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // بررسی وجود ایمیل در دیتابیس
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // ارسال ایمیل با لینک بازیابی رمز عبور
        $token = md5(uniqid(rand(), true));
        $reset_link = "http://yourwebsite.com/reset_password.php?token=$token";

        // ارسال ایمیل
        $to = $email;
        $subject = "بازیابی رمز عبور";
        $message = "برای بازیابی رمز عبور خود از لینک زیر استفاده کنید:\n\n$reset_link";
        $headers = "From: webmaster@example.com" . "\r\n" .
                   "CC: somebodyelse@example.com";

        mail($to, $subject, $message, $headers);

        echo "یک ایمیل با لینک بازیابی رمز عبور برای شما ارسال شد.";
    } else {
        echo "ایمیل وارد شده در سیستم ما وجود ندارد.";
    }

    $conn->close();
}

