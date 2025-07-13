import Link from "next/link";
import  ListUser  from "./user/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <nav className="flex justify-between w-[100%]">
          <Link href={"/#"} className="font-bold text-2xl">CRUD</Link>
          <div className="w-3x flex gap-4.5">
            <Link href={"/#"}>Usuário</Link>
            <Link href={"/#"}>Departamento</Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ListUser />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
