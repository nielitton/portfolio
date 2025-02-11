import Link from "next/link";
import { Button } from "../ui/button";
import { GithubIcon } from "@/public/githubIcon";
import { LinkedinIcon } from "@/public/linkedinIcon";
import { useCurriculumDownloader } from "@/hooks/use-curriculum-downloader";
import {
    motion
} from "motion/react";

export function MenuFirstPage() {
    const { isInProgress, percentage, downloader } = useCurriculumDownloader()

    return (
        <>
            <motion.div
                whileHover={{
                    scale: 1.06,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <Button className="rounded-full px-10 flex justify-center h-[49px] items-center bg-orange text-2xl text-backgroundLight hover:bg-myWhite hover:text-orange">FALE COMIGO</Button>
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.06,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <Button onClick={() => downloader()} className="text-orange w-56 h-12 text-2xl rounded-full bg-backgroundLight hover:bg-myWhite">
                    {
                        isInProgress ? `${percentage}%` : 'BAIXE MEU CURRICULO'
                    }
                </Button>
            </motion.div>
            <motion.div
                className="flex"
                whileHover={{
                    scale: 1.06,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <Link href="https://linkedin.com/in/nielitonsousa" target="_blank" className="flex justify-center items-center rounded-full h-auto w-[49px] bg-backgroundLight hover:bg-myWhite">
                    <LinkedinIcon className="w-[20px] h-auto fill-orange" />
                </Link>
            </motion.div>
            <motion.div
                className="flex"
                whileHover={{
                    scale: 1.06,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <Link href="https://github.com/nielitton" target="_blank" className="flex justify-center items-center rounded-full h-auto w-[49px] bg-backgroundLight hover:bg-myWhite">
                    <GithubIcon className="w-[20px] h-auto fill-orange" />
                </Link>
            </motion.div>
        </>
    )
}