import React, { useEffect, useState } from "react";
import { 
    greet, 
    calculateArea, 
    doubleNumbers, 
    filterEvenNumbers, 
    sumArray, 
    processUsers, 
    fetchData 
} from "./utils";
import EventPropagation from "./EventPropagation";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

const Main = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    const { names, olderUsers, totalAge } = processUsers(users);

    // State for API fetching
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
                setPosts(data.slice(0, 5)); // Get first 5 posts
            } catch (err) {
                setError(err.message);
            }
        }
        fetchPosts();
    }, []);

    // Event handling (Exercise 3)
    const [message, setMessage] = useState("Click the button!");

    const handleButtonClick = () => {
        setMessage("Button clicked! Text updated.");
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Function Demonstrations</h1>

            {/* 1. Try-Catch & Promises */}
            <h2>Greeting Function</h2>
            <h3>{greet("John")}</h3>
            <h3>{greet("Alice", "Good morning")}</h3>

            {/* 2. Async/Await & Fetch API */}
            <h2>Fetched Posts</h2>
            {error ? <p>Error: {error}</p> : posts.map(post => <p key={post.id}><strong>{post.title}</strong></p>)}

            {/* 3. DOM Manipulation & Events */}
            <h2>DOM Manipulation Example</h2>
            <p>{message}</p>
            <button onClick={handleButtonClick}>Click Me</button>

            {/* 4. Array & Object Manipulation */}
            <h2>User Data Processing</h2>
            <p><strong>Names:</strong> {names.join(", ")}</p>
            <p><strong>Older Users:</strong> {olderUsers.map(user => user.name).join(", ")}</p>
            <p><strong>Total Age:</strong> {totalAge}</p>

            {/* 5. React Components: User Card & User Form */}
            <h2>User Cards</h2>
            {users.map(user => <UserCard key={user.name} {...user} />)}

            <h2>User Form</h2>
            <UserForm />

            {/* 6. Event Handling, Propagation, and JavaScript Events */}
            <h2>Event Propagation Example</h2>
            <EventPropagation />
        </div>
    );
};

export default Main;

//Previous Functions:
            {/* <h2>{greet("John")}</h2>
            <h2>{greet("Alice", "Good morning")}</h2>

            <p>Area of 5x5: {calculateArea(5)}</p>
            <p>Area of 4x6: {calculateArea(4, 6)}</p>

            <p>Numbers Doubled: {doubleNumbers(numbers).join(", ")}</p>
            <p>Even Numbers: {filterEvenNumbers(numbers).join(", ")}</p>
            <p>Sum of Numbers: {sumArray(numbers)}</p>

            <h2>User Data Processing</h2>
            <p><strong>Names:</strong> {names.join(", ")}</p>
            <p><strong>Older Users:</strong> {olderUsers.map(user => user.name).join(", ")}</p>
            <p><strong>Total Age:</strong> {totalAge}</p> */}
