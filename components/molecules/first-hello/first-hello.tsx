'use client'

import { Button } from "@/components/ui/button";
import {LinkedinIcon} from "../../../public/linkedinIcon"
import {GithubIcon} from "../../../public/githubIcon"
import Link from "next/link";
import Typewriter from "typewriter-effect";


export function FirstHello() {
    return(
        <div className="mt-28">
            <div>
                <span className="text-4xl text-white">
                    OPA, TUDO BEM? ME CHAMO
                </span>
                <h1 className="text-9xl text-white">
                    NIELITON SOUSA!
                </h1>
                <div className="text-xl text-gray w-[35%]">
                    {<Typewriter 
                        options={{
                            strings: ["Desenvolvedor empenhado na sua carreira e focado nos seus objetivos, capaz de somar e agregar muito a equipe."],
                            autoStart: true,
                            loop: true,
                        }}
                    />}
                </div>
            </div>
            <div className="flex gap-[10px] mt-[15px]">
                <Button className="rounded-[20px] px-10 flex justify-center h-[49px] items-center bg-orange text-2xl text-backgroundLight hover:bg-white hover:text-orange">FALE COMIGO</Button>
                <Link href="https://linkedin.com/in/nielitonsousa" target="_blank" className="flex justify-center items-center rounded-full h-auto w-[49px] bg-backgroundLight hover:bg-white">
                    <LinkedinIcon className="w-[20px] h-auto fill-orange" />
                </Link>
                <Link href="https://github.com/nielitton" target="_blank" className="flex justify-center items-center rounded-full h-auto w-[49px] bg-backgroundLight hover:bg-white">
                    <GithubIcon className="w-[20px] h-auto fill-orange" />
                </Link>
            </div>
        </div>
        
    )
}