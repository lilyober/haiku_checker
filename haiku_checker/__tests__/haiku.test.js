// needs an object, with 3 seperate arrays for each line, when then runs w/e we did back with mr robo's counting project ig?
// for example 
// line 1 "this is not haiku" = haiku.line1[this, is, not, haiku]
// haiku.counter =  [t, h, i, s] for each a, e , i, o, u + this.line1count && if === 5 a haiku? 
import Haiku from './../src/haiku.js';
// import template from './../src/js/template.js';

describe('Haiku', () => {
    let userHaiku;
    let line1 = "coding is the best";
    let line2 = "dont let it make you feel dumb";
    let line3 = "keep calm debug on";

    beforeEach(() => {
      userHaiku = new Haiku(line1, line2, line3);
    });
  
    test('should make sure there is line1', () => {    
        expect(userHaiku.line1).toEqual("coding is the best");
    });
  
    test('should make sure there is line2', () => {    
        expect(userHaiku.line2).toEqual("dont let it make you feel dumb");
    });

    test('should make sure there is line3', () => {    
        expect(userHaiku.line3).toEqual("keep calm debug on");
    });

    test('should be able count syllables ', () => {
        userHaiku.countSyllables();    
        expect(userHaiku.line1count).toEqual(5);
     });
    
  });