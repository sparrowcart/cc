
let words = ['Digital Marketing', 'Web Design and Development', 'Market Research', 'Content Writing '];

// Set the initial word to the first word in the array
let currentWordIndex = 0;
document.getElementById('changingword').innerHTML = words[currentWordIndex];

// Define a function to cycle through the words
function cycleWords() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
    }
    document.getElementById('changingword').innerHTML = words[currentWordIndex];
}

// Call the cycleWords function every 2 seconds
setInterval(cycleWords, 2000);
