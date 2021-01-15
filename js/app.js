// const quoteText = document.getElementByTagName('main');

const quotes = [
    {
        quote: '"Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another."' ,
        source: 'Carl Sagan',
        tags: 'astronomy, philosophy'
    },
    {
        quote: '"This is the way"',
        source: 'Din Djarin',
        citation: 'The Mandalorian',
        year: 2020,
        tags: 'entertainment, philosophy'
    },
    {
        quote: '"Happiness is not something ready made. It comes from your own actions."',
        source: 'Dalai Lama XIV',
        tags: 'philosophy'
    },
    {
        quote: '"True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not."',
        source: 'Seneca',
        tags: 'philosophy, stoicism'
    },
    {
        quote: '"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."',
        source: 'C.S. Lewis',
        citation: 'The Four Loves',
        year: 1960,
        tags: 'philosophy, literature'
    },
    {
        quote: '\"I wish it need not have happened in my time," said Frodo. \"So do I,\" said Gandalf, \"and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.\" ',
        source: 'J.R.R. Tolkien',
        citation: 'The Fellowship of the Ring',
        year: 1954,
        tags: 'wisdom, fantasy, literature'
    },
    {
        quote: '"Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present." ',
        source: 'Marcus Aurelius',
        citation: 'Meditations',
        year: 180, 
        tags: 'literature, philosophy, stoicism'
    },
    {
        quote: '"If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, \'He was ignorant of my other faults, else he would not have mentioned these alone.\'"  ',
        source: 'Epictetus',
        tags: 'stoicism, philosophy'
        
    },
    {
        quote: '"We are all more intelligent than we are capable, and awareness of the insanity of love has never saved anyone from the disease."',
        source: 'Alan de Botton',
        citation: 'On Love',
        tags: 'philosophy, love, contemporary philosophers'
    },
    {
        quote: '"Whatever happens around you, don\'t take it personally... Nothing other people do is because of you. It is because of themselves."  ',
        source: 'Miguel Ruiz',
        citation: 'The Four Agreements',
        year: 2001,
        tags: 'philosophy, love, contemporary philosophers'
    },
    {
        quote: '"the easiest way for us to gain happiness is to learn how to want the things we already have."',
        source: 'William Irvine',
        citation: 'A Guide to the Good Life',
        year: 2008,
        tags: 'philosophy, stoicism, contemporary non-fiction'
    },

]

//quoteNumber returns the number of items in the quotes array.  Used as parameter passed into getRandomQuote.
let quoteNumber = quotes.length; 

//quoteObject represents the the object selected by getRandomQuote and is passed into printQuote to populate 
//the attached HTML.
let quoteObject = getRandomQuote(quoteNumber); 

//getRandomQuote randomly generates a number based on maximum number of 
//objects in the quotes array by passing in the variable quoteNumber.
function getRandomQuote(quoteNumber) {
    let random = Math.abs(Math.floor( Math.random() * quoteNumber ) - 1);
    let randomObject = quotes[random];
    return randomObject;
}

//printQuote populates the HTML with the values from the quotes object.  It is called with the eventHandler built
//into the button on the page is clicked. 
function printQuote() {
    //local variables for printQuote to display values from each key:value pair in the object. 
    let quote = quoteObject.quote;
    let source = quoteObject.source;
    let citation = quoteObject.citation;
    let year = quoteObject.year;
    let tags = quoteObject.tags
    document.getElementById('quote').innerHTML = `${quote}`;
    document.getElementById('source').innerHTML = `<p>-${source}</p>`;
   //These conditional statements ensure that a value is only displayed if a key:value pair exists for the object
   //selected by getRandomQuote.  If the key:value pair is non-existent, nothing is displayed.  
    if ( citation === undefined) {
        document.getElementById('citation').innerHTML = " ";
    } else {
        document.getElementById('citation').innerHTML =`<p><em>${citation}</em></p>`;
    };
    if ( year === undefined) {
        document.getElementById('year').innerHTML = " ";
    } else {
        document.getElementById('year').innerHTML =`<p><em>${year}</em></p>`;
    };
    if ( tags === undefined) {
        document.getElementById('tags').innerHTML = " ";
    } else {
        document.getElementById('tags').innerHTML =`<p><em>${tags}</em></p>`;
    };
}

// function returnQuote() {
//     return printQuote;
// }

let mainBackgroundColor = '';

function randomColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb(${red}, ${green}, ${blue}, 0.75)`;
    return document.querySelector('main').style.background =randomRGB;
}

// document.querySelector('main').style.background =  randomColor(); 

function onClick() {
    randomColor();
    getRandomQuote();
    printQuote();
} 

setInterval(onClick, 5000)  