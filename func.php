<html>
<body>
<?php
$con=new mysqli("localhost","root","","collegedatabase");
if($con->connect_error)
{
		die("Connection failed: ".$conn->connect_error);
}

if(isset($_POST['login'])){
    $name=$_POST['name'];
    $fname=$_POST['fname'];
    $mname=$_POST['mname'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $pphone=$_POST['pphone'];
    $gender=$_POST['gender'];
    $hdegree=$_POST['hdegree'];
    $applyfor=$_POST['applyfor'];
    $query="insert into admissionrequest(name,fname,mname,email,phone,pphone,gender,hdegree,applyfor)values('$name','$fname','$mname','$email','$phone','$pphone','$gender','$hdegree','$applyfor')";
    //$result=mysqli_query($con,$query);
    if($con->query($query)==True)
    {
        echo "<script>alert('We will contact you shortly.')</script>";
        echo "<script>window.open('admission.html','_self')</script>";
    }
    else{
        echo "<script>alert('form not submitted')</script>";
    }
}
?>
</body>
</html>