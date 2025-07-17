const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');
const button = document.getElementById('button');



// API call process flow
// 1. run fetch to advice slip api url and add "no-cache" parameter
//    const response = await fetch('https://api.adviceslip.com/advice', {
//      cache: "no-cache" // Prevents showing old cached advice
//    });
// 2. declare the json data on variable data
//    const data = await response.json();
// 3. output advice using class advice-text
//    adviceText.textContent = `"${data.slip.advice}"`;
// 4. output advice id
//    adviceId.textContent = data.slip.id;

async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: "no-cache"
        });
        const data = await response.json();
        adviceText.textContent = `"${data.slip.advice}"`;
        adviceId.textContent = data.slip.id;
    } catch (error) {
        adviceText.textContent = "Ooops, Can't fetch advice.";
        console.error(error);
    }
}

button.addEventListener('click', getAdvice);


// Load first advice on page load
window.onload = getAdvice;
