//Functional solution.
const higherPalindrome = (str) => str === str.split('').reverse().join('');

//Front and End technique.
//Assumption: string which is null or other than string or single character string, is not a palindrome.
//Limitation: Cant handle special characters or space  or numbers between a-z characters and case sensitive. Example: A man, a plan, a canal. Panama   
const isPalindrome = (str) => {
    const len = str.length;

    if(!str || len < 2) return false;

    for(let i=0; i< len/2; i++){
        if(str[i] !== str[len-1-i]) return false;
    }

    return true;
}

// console.log(isPalindrome('x')); //false
// console.log(isPalindrome('neveroddoreven'));//true
// console.log(isPalindrome('never odd or even'));//false
// console.log(isPalindrome('not a plaindrome'));//false
// console.log(isPalindrome('Example: A man, a plan, a canal. Panama  '));//false



//Front and End technique with Regex and toLowercase().
//Limitation: Memory. 
const isPalindromeRegEx = (str) => {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    //RegEx simplified - /[^A-Za-z0-9]/g

    const len = str.length;

    if(!str || len < 2) return false;

    for(let i=0; i< len/2; i++){
        if(str[i] !== str[len-1-i]) return false;
    }

    return true;
}

console.log(isPalindromeRegEx('A man, a plan, a canal. Panama  ')); // true
console.log(isPalindromeRegEx('never odd or even')); //true


//Two pointer technique 
const isPalindromeTP = (str) => {
    //assign a front and a back pointer
    let front = 0;
    let back = str.length - 1;
    //back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
      //increments front pointer if current character doesn't meet criteria
      if (str[front].match(/[\W_]/)) {
        front++;
        continue;
      }
      //decrements back pointer if current character doesn't meet criteria
      if (str[back].match(/[\W_]/)) {
        back--;
        continue;
      }
      //finally does the comparison on the current character
      if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
      front++;
      back--;
    }
    //if the whole string has been compared without returning false, it's a palindrome!
    return true;
  }

console.log(isPalindromeTP('A man, a plan, a canal. Panama  ')); // true
console.log(isPalindromeTP('never odd or even')); //true
