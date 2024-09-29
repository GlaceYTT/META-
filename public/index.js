// public/index.js

// Fetch and display bot data from the server
async function fetchBotData() {
    try {
        const response = await fetch('/api/bot-data'); // GET request to the new endpoint

        if (!response.ok) {
            const error = await response.json();
            document.getElementById('bot-data').innerHTML = `<p>Error: ${error.message}</p>`;
            return;
        }

        const data = await response.json();
        const botDataDiv = document.getElementById('bot-data');

        botDataDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Status:</strong> ${data.status}</p>
        `;
    } catch (error) {
        document.getElementById('bot-data').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Call the function to fetch data
fetchBotData();
