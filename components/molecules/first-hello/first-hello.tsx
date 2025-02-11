'use client'

import Typewriter from "typewriter-effect";
import { MenuFirstPage } from "../menu-first-page";


export function FirstHello() {
    return (
        <div>
            <div>
                <span className="text-4xl text-myWhite">
                    OPA, TUDO BEM? ME CHAMO
                </span>
                <h1 className="text-9xl text-myWhite">
                    NIELITON SOUSA!
                </h1>
                <div className="text-xl text-gray w-[100%]">
                    {<Typewriter
                        options={{
                            strings: ["Desenvolvedor empenhado na sua carreira e focado nos seus objetivos."],
                            autoStart: true,
                            loop: true,
                            cursor: '_'
                        }}
                    />}
                </div>
            </div>
            <div className="flex gap-3 mt-4">
                <MenuFirstPage />
            </div>
        </div>

    )
}