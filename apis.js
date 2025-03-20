// APIS PRACTICE

// Fetching JSON Placeholder Data (Fake API):
// Fetches a sample post from a free fake API.

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

// Fetching Data & Using Async / Await:
// Same as the first, but with async / await.

async function fetchPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchPost();

// Using Query Parameters:
// Fetches posts only from userId = 1.

fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

// Making a POST Request:
// Sends new data to the API.

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "New Post",
        body: "This is a test post",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log("Created:", data))
    .catch(error => console.error("Error:", error));

// Error Handling & Status Check:
// Checks if a request fails(like a 404).

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1000");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
fetchData();
