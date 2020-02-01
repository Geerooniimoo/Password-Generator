
var numChar='0123456789';
var lowerChar='abcdefghijklmnopqrstuvwxyz';
var upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar='@%+!#$%^&*()_-,<.>/?[{]}|:;';
var pwBtn=document.querySelector("#generate");
var pwDisplay=document.querySelector("#password");

pwBtn.addEventListener('click',pwGen);

function pwGen() {
    chPwLen();
    var pwHasNum=confirm('Should password have numbers?');
    var pwHasLower=confirm('Should password have lower case letters?');
    var pwHasUpper=confirm('Should password have upper case letters?');
    var pwHasSpec=confirm('Should password have special characters?');
    
    
};

function chPwLen() {
    var pwLen=prompt('From 8 - 128, how long should password be?');
    if (!(pwLen>=8&pwLen<=128)) {
        alert('Wrong range.  Please try again.');
        chPwLen();
    }
    return pwLen;
};

function specFunc() {
    var specs='';
    if (pwHasNum) {specs+=numChar;};
    if (pwHasUpper) {specs+=upperChar;};
    if (pwHasSec) {specs+=specialChar;};
    if (pwHasLower) {specs+=lowerChar;};
    return specs;
}