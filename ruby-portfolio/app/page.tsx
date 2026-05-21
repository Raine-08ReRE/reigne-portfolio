import { Navbar } from "@/components/layout/Navbar";
import { Cover } from "@/components/sections/Cover";
import { WhoIAm } from "@/components/sections/WhoIAm";
import { HowIWork } from "@/components/sections/HowIWork";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { OtherWork } from "@/components/sections/OtherWork";
import { Collaborate } from "@/components/sections/Collaborate";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <Cover />
        <WhoIAm />
        <HowIWork />
        <TechStack />
        <FeaturedProjects />
        <OtherWork />
        <Collaborate />
      </main>
    </>
  );
}
