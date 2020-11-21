var isVowel = function(letter) {

  var vowels = ["a", "e", "i", "o", "u" , "y"];

  for(var i = 0; i < vowels.length; i++){
      if(letter === vowels[i]){
          return ("This IS a vowel");
       }
  }

  return ("This isn't a vowel");

};
console.log(isVowel("i"));
console.log(isVowel("p"));
console.log(isVowel("y"));
