function palindrome(str) {
  let regex;let firstWord;let secondWord;
  //filta todos os caracteres nao alfanumericos
  regex = /[a-zA-Z|\d]/g;
  str = str.match(regex);
  /*separo a palavra ou frase meio a 
  meio em caso par ou impar*/
  if(str.length%2==0){
    firstWord = str.splice(0,str.length/2);
    secondWord = str;
  }else{
    firstWord = str.splice(0,str.length/2);
    secondWord = str.splice(1,str.length);   
  }
  //inverto a segunda palavra para comparar com a primeira
  secondWord.reverse();
  //transformo os dois vetores em string 
  //deixo tudo em minisculo para comparar
  firstWord=firstWord.join("").toLowerCase();
  secondWord=secondWord.join("").toLowerCase();
  /*caso a primeira palavra == a segunda 
  retornar true caso contrario false*/
  let result = firstWord===secondWord?true:false;
  return result;
  
}



palindrome("A man, a plan, a canal. Panama");
