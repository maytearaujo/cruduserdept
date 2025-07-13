'use client'

import CardUser from "@/components/cardDepartment";
import Department from "@/models/department";
import { getAll } from "@/services/Service";
import { useEffect, useState } from "react";

export default function ListDepartment() {
    const [departments, setDepartments] = useState<Department[]>([]);

    async function allDepartments() {
        try {
            const data = await getAll("/departments");
            setDepartments(data);
            console.log("Dados recebidos da API:", data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        allDepartments();
    }, [])

    return (
        <div className="justify-items-center">
            <h2 className="text-2xl font-bold mb-4">Lista de Departamentos</h2>
            <div className="flex flex-wrap gap-3">
                {departments.map((department) => (
                    <CardUser key={department.id} department={department} />
                ))}
            </div>
        </div>
    )
}