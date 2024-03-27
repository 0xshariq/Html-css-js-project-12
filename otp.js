let OTP = document.getElementById("otp");
let btn = document.querySelector(".btn");
function otp(){
  let otp = "";
  for(let i = 0; i<6; i++){
    otp += Math.floor(Math.random()*10);
    
  }
  OTP.innerHTML = otp;
  
}