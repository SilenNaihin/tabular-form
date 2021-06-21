import Image from "next/image";
import stringgif from "../public/string_theory.gif"
import { useWindowSize } from "../utils/utils";

export default function Hero({ tableRef }) {
  const [width] = useWindowSize();

  return (
    <div className="w-4/5 mx-auto xl:w-1/2 mt-32 md:mt-20">
      <div className="flex justify-center md:justify-start">
        <div className="relative z-20 md:w-3/4">
          <div className="font-bold text-white text-center text-3xl md:text-left md:text-4xl lg:text-5xl">
            Where Silen proves himself
          </div>
          <div className="text-white font-thin text-gray-300 mt-3 text-center text-2xl md:text-left md:mt-10">
            Unhappy with his performance, Silen put forth an effort to reclaim
            what was lost. Built over a Sunday.
          </div>
          <button
            className="p-2 bg-white w-2/5 mx-auto flex justify-center mt-5 md:w-32 md:mx-0 md:mt-10"
            onClick={() => tableRef.current.scrollIntoView({
          behavior: "smooth"})}
          >
            Check It Out
          </button>
        </div>
        {width < 768 ? (
          <div className="absolute z-0 -mt-8 sm:-mt-12 opacity-30">
            <Image
              src={stringgif}
              height={100}
              width={100}
              layout="fixed"
              alt="string gif"
            />
          </div>
        ) : (
          <div className="opacity-50">
            <Image
              src={stringgif}
              height={350}
              width={350}
              layout="fixed"
              alt="string gif"
            />
          </div>
        )}
      </div>
    </div>
  );
}