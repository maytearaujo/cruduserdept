import Department from "@/models/department"

interface CardDepartmentProps {
    department: Department;
}

export default function CardUser({ department }: CardDepartmentProps) {
    return (
        <div className="border-amber-950 border-2 border-opacity-50 rounded-lg shadow-md p-4">
            <p>Departamento: {department.name}</p>
        </div>
    )
}