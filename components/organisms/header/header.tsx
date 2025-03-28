'use client'

import { motion } from "motion/react";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex justify-between h-[110px] w-full items-center px-[110px] font-bold">
            <motion.h1
                whileHover={{
                    scale: 1.1,
                    animation: 180,
                    transition: { type: 'tween', stiffness: 300 },
                }}
                className="text-gray text-[36px] font-bold hover:text-orange"
            >
                NS!
            </motion.h1>
            <nav>
                <ul className="flex text-[24px] gap-[36px] font-semibold text-myWhite">
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            animation: 180,
                            transition: { type: 'tween', stiffness: 300 },
                        }}
                    >
                        <Link className="hover:text-blueDark" href={"#"}>SOBRE MIM</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            animation: 180,
                            transition: { type: 'tween', stiffness: 300 },
                        }}
                    >
                        <Link className="hover:text-blueDark" href={"#"}>FALE COMIGO</Link>
                    </motion.div>
                </ul>
            </nav>
        </header>
    )
}