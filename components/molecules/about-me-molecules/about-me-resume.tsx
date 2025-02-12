import Link from "next/link";


export function AboutMeResume() {
    return (
        <div className="flex justify-between mt-[100px]">
            <div>
                <h2 className="text-background text-8xl font-bold">SOBRE MIM</h2>
                <p className="text-blueDark text-2xl">Aqui você me conhece melhor</p>
            </div>

            <div className="flex flex-col gap-2 w-[50%]">
                <span className="text-balance text-4xl">Opa, tudo bem? me chamo Nieliton Sousa, sou desenvolvedor web.</span>
                <p className="text-blueDark">Eu sou um desenvolvedor web que atualmente mora em Fortaleza-ce, uma cidade linda, busco sempre ser o melhor para mim mesmo em tudo o que faço, seja profissionalmente ou pessoalmente, tenho uma boa familía que me apoia em tudo. Busco sempre agregar da melhor forma com a equipe que estiver trabalhando e com as pessoas ao meu redor, sou um ótimo ouvinte de feedbacks, além te tentar trazer o melhor das pessoas ao meu redor.</p>

                <Link href={""} scroll={false} className="text-orange mt-2 underline underline-offset-8">MAIS SOBRE MIM!</Link>
            </div>
        </div>
    )
}