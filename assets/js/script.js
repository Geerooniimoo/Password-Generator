var numChar='0123456789';
var lowerChar='abcdefghijklmnopqrstuvwxyz';
var upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar='@%+!#$%^&*()_-,<.>/?[{]}|:;';
var pwBtn=document.querySelector("#generate");
var pwDisplay=document.querySelector("#password");

pwBtn.addEventListener('click',passwordGenerator);

// ========================MAIN=========================================
function passwordGenerator() {
    var len=chPwLen();
    var spec=specFunc();
    passGen(len,spec);
};
// ========================LENGTH=======================================
function chPwLen() {
    var pwLen=prompt('From 8 - 128, how long should password be?');
    if (!(pwLen>=8&pwLen<=128)) {
        alert('Wrong range.  Please try again.');
        chPwLen();
    }
    return pwLen;
};
// ========================SPECIFICATIONS==============================
function specFunc() {
    var specs='';
    var pwHasNum=confirm('Should password have numbers?');
    var pwHasLower=confirm('Should password have lower case letters?');
    var pwHasUpper=confirm('Should password have upper case letters?');
    var pwHasSpec=confirm('Should password have special characters?');
    
    if (pwHasNum) {specs+=numChar};
    if (pwHasLower) {specs+=lowerChar};
    if (pwHasUpper) {specs+=upperChar};
    if (pwHasSpec) {specs+=specialChar};
    
    return specs;
};
// ========================GENERATOR===================================
function passGen(len, spec) {
    var password='';
    for (let i = 0; i < len; i++) {
        password+=spec[Math.floor(Math.random()*spec.length)]
    };
    pwDisplay.value = spec ? password : "";
}
