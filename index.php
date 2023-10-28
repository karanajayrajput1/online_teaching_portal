<?php
include('./navbar.php');
?>
        <div class="home" id="home">
            <div class="title">
                <h1>Discover Best Courses <br> For Best Learning</h1>
                <p>"Moulding Engineers Who Can Build The Nation"</p>
                <?php
                    if(isset($_SESSION['is_login']))
                    {
                        echo ' <a href="Student/studentcourse.php"><button><button class="button">My Courses</button></a>';
                    } else{
                        echo '<button class="button" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registration">Get Started</button>';
                    }
                    ?>
            </div>
        </div>

<?php
include('./footer.php');
?>