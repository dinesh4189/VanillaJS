{
    let sentance = 'Hi how are you. how about you. did you find the book.';
    let words = sentance.split('.').reduce((sen, val)=> {return sen + val}, '').split(' ');
    console.log(words);
    let uniqueWords = new Set(words);
    let WordCount = new Map();
    uniqueWords.forEach((word) => WordCount.set(word, sentance.split(word).length-1));
    WordCount.forEach((val, key) => console.log(`${key} => ${val}`) );
    
}
