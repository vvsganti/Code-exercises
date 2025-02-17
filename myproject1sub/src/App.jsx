import React from "react";
import { greet, calculateArea, doubleNumbers, filterEvenNumbers, sumArray } from "./utils";

const Main = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Function Demonstrations</h1>

            <h2>{greet("John")}</h2>
            <h2>{greet("Alice", "Good morning")}</h2>

            <p>Area of 5x5: {calculateArea(5)}</p>
            <p>Area of 4x6: {calculateArea(4, 6)}</p>

            <p>Numbers Doubled: {doubleNumbers(numbers).join(", ")}</p>
            <p>Even Numbers: {filterEvenNumbers(numbers).join(", ")}</p>
            <p>Sum of Numbers: {sumArray(numbers)}</p>
        </div>
    );
};

export default Main;
