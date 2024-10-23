import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Etudiant en ingenierie logiciel</span>
            <h1 className="h1 nb-6">
              Salut je suis <br />{" "}
              <span className="text-accent">José Monkam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionné par le développement logiciel et motivé par le défi de
              résoudre des problèmes concrets à travers la technologie, je
              souhaite mettre à profit mes compétences et mon enthousiasme au
              sein de votre entreprise.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Télecharger CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
