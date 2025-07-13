'use client'

import CardUser from "@/components/cardUser";
import User from "@/models/user";
import { getAll } from "@/services/Service";
import { useEffect, useState } from "react";

export default function ListUser() {
    const [users, setUsers] = useState<User[]>([]);

    async function allUsers() {
        try {
            const data = await getAll("/users");
            setUsers(data);
            console.log("Dados recebidos da API:", data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        allUsers();
    }, [])

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">Listar Usuários</h2>
            <div className="flex flex-wrap gap-3">
                {users.map((user) => (
                    <CardUser key={user.id} user={user} />                    
                ))}
            </div>
        </div>
    )
}