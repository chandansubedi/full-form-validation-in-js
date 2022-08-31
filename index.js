
function formCheck(){
var uname = document.getElementById("name").value
var lastame = document.getElementById("lname").value
var uname = document.getElementById("name").value
var uemail = document.getElementById("email").value
var upassword = document.getElementById("pass").value
var uconpass = document.getElementById("conpass").value

//character and symbol validation

//all field must be filled
if(uname == "" && uemail=="" && upassword=="" && uconpass ==""   ){
    document.getElementById("msg").innerText=" all fields must be filled "
    document.getElementById("msg").style.cssText = "color :red"
    return false
}

//fname and last name can't be same 
 else if(uname == lastame){
    document.getElementById("msg").innerText=" first and last name cant be same "
    document.getElementById("name").style.border = "1px solid red";
    document.getElementById("msg").style.cssText = "color :red";
return false
}
//checking the password match the validation or not
if( !(upassword.match(validation))){
    document.getElementById("msg").innerText=" password validation doesnot match "
    document.getElementById("pass").style.border = "1px solid red";
    document.getElementById("msg").style.cssText = "color :red";
    return false
}
// password and confirm oassword same or not check
else if(upassword != uconpass){
    document.getElementById("msg").innerText=" password doesnt match "
    document.getElementById("conpass").style.border = "1px solid red";
    return false
}

// if all condition match then this message wil be shown
else{
    document.getElementById("msg").innerText=" form submitted successfully  "
    document.getElementById("msg").style.cssText = "color :blue";
    return true
}
}

//to change the value in select oof mr and MRS and change male in female in radio button
function show(){
    var gen = document.getElementById("genderCheck").value;
    if(gen == "mr"){
        document.getElementById("male").checked= true;
        document.getElementById("female").checked= false;
    }
    if(gen == "mrs"){
        document.getElementById("female").checked= true;
        document.getElementById("male").checked= false;
    }
}

// adding nepal must include in Address functionality 
function checkAddress(){
   let add= document.getElementById("address").value
   if(!(add.includes("nepal"))){
       document.getElementById("addMsg").innerHTML=" nepal must include in address "
   } 
}


   
 
