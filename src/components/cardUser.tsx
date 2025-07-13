import User from "@/models/user"

interface CardUserProps {
    user: User;
}

export default function CardUser({ user }: CardUserProps) {
    return (
        <div className="border-amber-950 border-2 border-opacity-50 rounded-lg shadow-md p-4">
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
            <p>Deparamento: {user.department.name}</p>
        </div>
    )
}