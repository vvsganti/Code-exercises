import React from "react";

export default function EventPropagation() {
    const handleParentClick = () => {
        alert("Parent Clicked!");
    };

    const handleChildClick = (event) => {
        event.stopPropagation(); // Prevent parent from receiving the event
        alert("Button Clicked!");
    };

    const handleRightClick = (event) => {
        event.preventDefault(); // Prevents the default context menu
        alert("Right-click disabled!");
    };

    return (
        <div onClick={handleParentClick} style={{ padding: "20px", background: "lightgray" }}>
            <button onClick={handleChildClick} onContextMenu={handleRightClick}>
                Click Me
            </button>
        </div>
    );
}
