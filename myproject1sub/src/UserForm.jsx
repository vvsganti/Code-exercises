import { useState } from "react";

export default function UserForm() {
    const [name, setName] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Submitted name: ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter name"
                className="border p-2"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Submit</button>
        </form>
    );
}
