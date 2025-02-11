import { FirstHello } from "@/components/molecules/first-hello/first-hello";
import GridBackground from "../grid-background";

function FirstHelloPage() {
    return (
        <div className="sm:mx-[110px] flex justify-between items-center mt-20">
            <GridBackground />
            <FirstHello />
        </div>
    )
}

export { FirstHelloPage }