function ispalindrome(str){
    let reversed=str.split('').reverse('').join('');
    return str === reversed;
}

console.log(ispalindrome("madam"));
console.log(ispalindrome("hello"));