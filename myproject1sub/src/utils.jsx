export const greet = (name, message = "Hello") => {
    return `${message}, ${name}!`;
};

export const calculateArea = (width, height = width) => {
    return width * height;
};

export const doubleNumbers = (numbers) => {
    return numbers.map(num => num * 2);
};

export const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0);
};

export const sumArray = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

export const applyOperation = (array, operation) => {
    return array.map(operation);
};

export const delayedHello = () => {
    setTimeout(() => {
        console.log("Hello, world!");
    }, 3000);
};

export const countdown = (start) => {
    let counter = start;
    const interval = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter < 0) {
            clearInterval(interval);
        }
    }, 1000);
};

export const createButton = (id, text) => {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    document.body.appendChild(button);
    return button;
};

export const setupButtonClick = (id) => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", () => {
            console.log("Button clicked!");
        });
    }
};

let messageInterval;
export const startLogging = () => {
    if (!messageInterval) {
        messageInterval = setInterval(() => {
            console.log("Logging message every second...");
        }, 1000);
    }
};

export const stopLogging = () => {
    if (messageInterval) {
        clearInterval(messageInterval);
        messageInterval = null;
    }
};

export const setupStartStopButtons = () => {
    const startButton = createButton("startButton", "Start");
    const stopButton = createButton("stopButton", "Stop");

    startButton.addEventListener("click", startLogging);
    stopButton.addEventListener("click", stopLogging);
};

export function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Random success/failure
            success ? resolve("Data fetched successfully!") : reject("Error fetching data");
        }, 1000);
    });
}

export async function handleFetch() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts = await response.json();
        console.log(posts.slice(0, 5)); // Log first 5 posts
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}

export function processUsers(users) {
    return {
        names: users.map(user => user.name), // Extracts names
        olderUsers: users.filter(user => user.age > 28), // Filters users older than 28
        totalAge: users.reduce((sum, user) => sum + user.age, 0) // Calculates total age
    };
}
