export default class Haiku {
    constructor(line1,line2,line3){
       this.line1 = line1; 
       this.line2 = line2;
       this.line3 = line3;
    }

countSyllables() {

  }
}


function syllables(word) {
    word = word.toLowerCase();
    if(word.length <= 3) { return 1; }
      return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
                 .replace(/^y/, '')
                 .match(/[aeiouy]{1,2}/g).length;
  }

  function new_count(word) {
    word = word.toLowerCase();                                     //word.downcase!
    if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
      word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
      return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
  }