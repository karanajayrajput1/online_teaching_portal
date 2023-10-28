<?php
if(!isset($_SESSION))
{
    session_start();
}
include_once('../dbConnection.php');
if (isset($_POST['q_id'])) {
    $q_id = $_POST['q_id'];
    $selected_ans = $_POST['selected_ans'];
    $course_id = $_POST['course_id'];
    $lesson_id = $_POST['lesson_id'];
    $email = $_POST['email'];
    $correct_option = $_POST['correct_option'];

    $stmt = $conn->prepare("INSERT INTO answers(email, q_id, lesson_id, course_id, selected_ans, correct_ans) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("siiiss", $email, $q_id, $lesson_id, $course_id, $selected_ans, $correct_option);

    if ($stmt->execute()) {
        $_SESSION['quizrestart'] = true;
        echo json_encode("OK");
    } else {
        echo json_encode("Failed");
    }
}


?>