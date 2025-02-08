import Link from "next/link";

export function Header() {
    return(
        <header className="flex justify-between h-[110px] w-full items-center px-[110px]">
            <h1 className="text-gray text-[36px] font-bold">NIELITON SOUSA!</h1>
            <nav>
                <ul className="flex text-[24px] gap-[36px] font-semibold text-white">
                    <Link href={"#"}>SOBRE MIM</Link>
                    <Link href={"#"}>SOBRE MIM</Link>
                </ul>
            </nav>
        </header>
    )
}