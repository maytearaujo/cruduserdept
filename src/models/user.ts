import department from "./department";

export default interface User {
    id: number;
    name: string;
    email: string;
    department: department;
}