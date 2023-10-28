function adminlogin(){
    var adminloginemail=$('#adminloginemail').val();
    var adminloginpassword=$('#adminloginpassword').val();

    $.ajax({
        url:'Admin/admin.php',
        method:'POST',
        dataType:"json",
        data:{
          checkadminloginemail:"checkadminloginemail",
          adminloginemail: adminloginemail,
          adminloginpassword: adminloginpassword,
        },
        success:function(data)
        {
          console.log(data);
          if(data==0)
        {
          $('#adminloginmessage').html("<span class='text-danger'>Invalid Email Or Password</span>");
        }
        else if(data==1){
            setTimeout(() => {
                window.location.href = "Admin/admindashboard.php";
            }, 100);
        }
        }
      });

}
      function teacherlogin(){
  var teacherloginemail=$('#teacherloginemail').val();
  var teacherloginpassword=$('#teacherloginpassword').val();
  console.log(teacherloginemail);

  $.ajax({
      url:'Teacher/teacher.php',
      method:'POST',
      dataType:"json",
      data:{
        checkteacherloginemail:"checkteacherloginemail",
        teacherloginemail: teacherloginemail,
        teacherloginpassword: teacherloginpassword,
      },
      success:function(data)
      {
        console.log(data);
        if(data==0)
      {
        $('#teacherloginmessage').html("<span class='text-danger'>Invalid Email Or Password</span>");
      }
      else if(data==1){
          setTimeout(() => {
              window.location.href = "Teacher/admindashboard.php";
          }, 1000);
      }
      }
    });

}







