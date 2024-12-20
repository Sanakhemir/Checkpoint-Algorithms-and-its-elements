function analyzeSentence(phrase) {
    let length = 0;     
    let wordCount = 1; 
    let vowelCount = 0;
    
    for (let i = 0; i < phrase.length; i++) {
      
      length++;
      
      if ("aeiouyAEIOUY".includes(phrase[i])) {
        vowelCount++;
      }
      
      if (phrase[i] === ' ') {
        wordCount++;
      }
    }
    
    console.log("Longueur de la phrase : " + length);
    console.log("Nombre de mots : " + wordCount);
    console.log("Nombre de voyelles : " + vowelCount);
  }
  
  let sentence = "Bonjour tout le monde.";
  analyzeSentence(sentence);
  