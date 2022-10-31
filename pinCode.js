// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly
// 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/

const pinCode = (pin) => /^\d{4}$|^\d{6}$/.test(pin);
console.log(pinCode("a234"));
