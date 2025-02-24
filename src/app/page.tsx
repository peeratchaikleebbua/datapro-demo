import BlinkingIcon from "@/components/animation/blinking-icon";
import CrossSquare from "@/components/icons/cross-squre";
import { heroIconSetOne } from "@/components/icons/hero-icon";
import ImageContainer from "@/components/images/image-container";
import FullBackground from "@/components/template/full-background";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <FullBackground>
      <div className="text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-8xl font-semibold mb-8">
          THE MOST ACCURATE
          <br />
          AND RELIABLE API FOR
          <br />
          BLOCKCHAIN DATA
        </h1>

        {/* Description */}
        <p className="text-lg md:text-3xl mb-8">
          Real-time, enriched blockchain data for 6
          <br />
          million+ tokens & 1 billion NFTs on 57 networks
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-lime-400 text-black hover:bg-lime-500 "
          >
            <CrossSquare />
            GET STARTED
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-zinc-700 text-white bg-zinc-800"
          >
            SCROLL TO DISCOVER
          </Button>
        </div>
      </div>
      {/* Blinking Icon */}
      <BlinkingIcon
        className="absolute top-[8%] left-[35%]"
        icons={heroIconSetOne}
      />
      <BlinkingIcon
        className="absolute bottom-[50%] left-[17%]"
        icons={heroIconSetOne}
      />
      <BlinkingIcon
        className="absolute bottom-[35%] left-[24%]"
        icons={heroIconSetOne}
      />
      <BlinkingIcon
        className="absolute bottom-[50%] right-[19%]"
        icons={heroIconSetOne}
      />
      <BlinkingIcon
        className="absolute top-[15%] right-[24%]"
        icons={heroIconSetOne}
      />

      {/* Image */}
      <ImageContainer
        path="/images/ethereum_3d.webp"
        alt="ethereum"
        position="top-[1%] left-[45%]"
        size={200}
      />
    </FullBackground>
  );
}
