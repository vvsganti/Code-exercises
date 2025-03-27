export default function UserCard({ name, age }) {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}

