/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


//Here is the array of quote objects that getRandomQuote will pull it's data from. 
const quotes = [
  {
      quote: 'Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.' ,
      source: 'Carl Sagan',
      tags: 'astronomy, philosophy'
  },
  {
      quote: 'This is the way',
      source: 'Din Djarin',
      citation: 'The Mandalorian',
      year: 2020,
      tags: 'entertainment, philosophy'
  },
  {
      quote: 'Happiness is not something ready made. It comes from your own actions.',
      source: 'Dalai Lama XIV',
      tags: 'philosophy'
  },
  {
      quote: 'True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.',
      source: 'Seneca',
      tags: 'philosophy, stoicism'
  },
  {
      quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
      source: 'C.S. Lewis',
      citation: 'The Four Loves',
      year: 1960,
      tags: 'philosophy, literature'
  },
  {
      quote: 'I wish it need not have happened in my time," said Frodo. \"So do I,\" said Gandalf, \"and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us. ',
      source: 'J.R.R. Tolkien',
      citation: 'The Fellowship of the Ring',
      year: 1954,
      tags: 'wisdom, fantasy, literature'
  },
  {
      quote: 'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. ',
      source: 'Marcus Aurelius',
      citation: 'Meditations',
      year: 180, 
      tags: 'literature, philosophy, stoicism'
  },
  {
      quote: 'If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, \'He was ignorant of my other faults, else he would not have mentioned these alone.\'  ',
      source: 'Epictetus',
      tags: 'stoicism, philosophy'
      
  },
  {
      quote: 'We are all more intelligent than we are capable, and awareness of the insanity of love has never saved anyone from the disease.',
      source: 'Alan de Botton',
      citation: 'On Love',
      tags: 'philosophy, love, contemporary philosophers'
  },
  {
      quote: 'Whatever happens around you, don\'t take it personally... Nothing other people do is because of you. It is because of themselves.  ',
      source: 'Miguel Ruiz',
      citation: 'The Four Agreements',
      year: 2001,
      tags: 'philosophy, love, contemporary philosophers'
  },
  {
      quote: 'the easiest way for us to gain happiness is to learn how to want the things we already have.',
      source: 'William Irvine',
      citation: 'A Guide to the Good Life',
      year: 2008,
      tags: 'philosophy, stoicism, contemporary non-fiction'
  },

]


/***
 * `getRandomQuote` function
***/

//The getRandomQuote function generates a random number based on the length of the quotes array.  It then uses the random number generated to index one of the items
//in the quotes array.  It returns a random quote from the quotes array.

function getRandomQuote() {
  let randomNumber = Math.abs(Math.floor( Math.random() * quotes.length ) - 1);
  let randomObject = quotes[randomNumber];
  return randomObject;
}


/***
 * `printQuote` function
***/

//printQuote first calls the randomColor function to generate a random color for the background of the container that holds the quote box. It then sets variables for each of the 
//properties that get pulled from the quote object selected by getRandomQuote.  

function printQuote() {
  //randomColor sets a color for the container that has the quotes within it.
  randomColor();
  //The following variables are set for the template literal that populates the quotes.  Each variable is stated for each property from the selected quote. 
  let randomQuote = getRandomQuote();
  let quote = randomQuote.quote;
  let source = randomQuote.source;
  //The variables below use the ternary operator syntax for the conditional statements that determine whether or not to print a value based on whether it exists for
  //the selected object.  Since some of them don't have all the specified properties, "" (nothing) is returned to keep the page looking neat. 
  let citation = randomQuote.citation === undefined ? "": randomQuote.citation;
  let year = randomQuote.year === undefined ? "" : randomQuote.year;
  let tags = randomQuote.tags === undefined ? "" : randomQuote.tags;
  //htmlString is set to contain the template literal that uses interpolation to pull in the variables set for each object's property.  
  let htmlString = 
  `<p class="quote"> ${quote} </p>
  <p class="source"> ${source}
    <span class="citation"> ${citation} </span>
    <span class="year"> ${year} </span>
    <span class="tags"> ${tags} </span>
  </p>
  ` 
  //Finally, the result of properties pulled in from the quotes object and formatted in htmlString are printed to the page based on the template literal notation. 
  return document.getElementById('quote-box').innerHTML = htmlString;
   
}

//This randomColor function sets random values for red, green and blue, then creates an rgb value based on those random values.  The randomColor function is called
//by the printQuote function above.
function randomColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb(${red}, ${green}, ${blue}, 0.75)`;
    return document.querySelector('.container').style.background = randomRGB;
}


//setInterval method below is a timing event that calls on the printQuote every four seconds.  It returns a new quote from the quotes array and random color generated by 
//randomColor. 
setInterval(printQuote, 4000);

//setTimeout loads the initial quote after a pause of two tenths of a second. 
setTimeout(printQuote, 200);

//The event listener below listens for the load-quote button to be pressed and when it does it calls the printQuote function.  

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

