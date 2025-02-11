import AboutMe from "@/components/organisms/about-me-page/about-me";
import { FirstHelloPage } from "@/components/organisms/first-hello-page/first-hello-page";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-bebas-neue)]">
      <FirstHelloPage />
      <AboutMe />
    </div>
  );
}
