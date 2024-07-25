function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', { dateStyle: 'full' });
    const timeString = now.toLocaleTimeString('en-US', { timeStyle: 'short' });
    
    document.getElementById('date-date').textContent = dateString;
    document.getElementById('date-time').textContent = timeString;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
});


async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = `— ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Pomodoro Timer
let timer;
let timeLeft = 1500;

document.getElementById('start-button').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                document.getElementById('timer').textContent = `${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`;
            } else {
                clearInterval(timer);
                timer = null;
                document.getElementById('alarm-sound').play();
            }
        }, 1000);
    }
});

document.getElementById('pause-button').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset-button').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    document.getElementById('timer').textContent = '25:00';
});

document.getElementById('timer-input').addEventListener('change', (e) => {
    timeLeft = e.target.value * 60;
    document.getElementById('timer').textContent = `${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`;
});


document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 60000);

    fetchQuote();

    // If you want to update the announcement text dynamically
    document.getElementById('announcement-text').textContent = "This is the latest announcement text!";
});
