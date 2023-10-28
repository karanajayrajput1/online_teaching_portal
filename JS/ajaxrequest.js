window.addEventListener('load', function() {
    const container = document.querySelector('.container1');
    container.style.opacity = '1'; 
});

function addstu(){
    var username=$("#username").val();
    var email=$("#email").val();
    var password=$("#password").val();

    $.ajax({
      url:'Student/addstudent.php',
      method:'POST',
      dataType:"json",
      data:{
        signup:"signup",
        username: username,
        email: email,
        password: password,
      },
      success:function(data)
      {
        console.log("data")
        if(data=="OK")
        {
          $('#message').html("<span class='text-success'>Registration Successfull</span>");
          clearRegField();
        }
        else{
          $('#message').html("<span class='text-danger'>Invalid Email or Password</span>");
        }
      }
    });
}

    //empty all fields
function clearRegField(){
    $("#registerform").trigger("reset");
}


function checklogin(){
    var loginemail=$('#loginemail').val();
    var loginpassword=$('#loginpassword').val();

    $.ajax({
        url:'Student/addstudent.php',
        method:'POST',
        dataType:"json",
        data:{
          checkloginemail:"checkloginemail",
          loginemail: loginemail,
          loginpassword: loginpassword,
        },
        success:function(data)
        {
          console.log(data);
          if(data==0)
        {
          $('#loginmessage').html("<span class='text-danger'>Invalid Email Or Password</span>");
          clearloginField();
        }
        else{
            setTimeout(() => {
                window.location.href = "index.php";
            }, 100);
        }
        }
      });

}

function clearloginField(){
    $("#loginform").trigger("reset");
}

