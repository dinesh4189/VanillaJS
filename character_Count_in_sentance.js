{
    let tt = 'asd wer uio asd kjas oiuqwe';
    let uniqueChar2 = new Set(tt.split(''));
    let CharCountObj2 = new Map();
    uniqueChar2.forEach((item) => CharCountObj2.set(item, tt.split(item).length-1));
    console.log(CharCountObj2);
    CharCountObj2.forEach((value, key) => console.log(`${key} => ${value}`) );
}
