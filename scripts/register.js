function User(email,password,firstname,lastname,age,street,city,state,zip,phone,payment,color){
    this.email=email;
    this.password=password;
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.street=street;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phone=phone;
    this.payment=payment;
    this.color=color;

}

function validation(user){
    let valid = true

    if (user.email==""){
        valid = false;
        $("#txtEmail").addClass("alert-error");
    }

    return valid;

}

let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFname = $("#txtFirstName");
let inputLname = $("#txtLastName");
let inputAge = $("#txtAge");
let inputStreet = $("#txtStreet");
let inputCity = $("#txtCity");
let inputState = $("#txtState");
let inputZip = $("#txtZip");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");

function register(){
    let newUser=new User(inputEmail.val(),inputPassword.val(),inputFname.val(),inputLname.val(),inputAge.val(),inputStreet.val(),inputCity.val(),inputState.val(),inputZip.val(),inputPhone.val(),inputPayment.val(),inputColor.val());
    if(validation(newUser)==true){
        saveUser(newUser);
        $("input").val("");
    }
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init; 