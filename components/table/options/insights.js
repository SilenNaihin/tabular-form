import chart from "../../../public/pie-chart.png";
import Image from "next/image";


export default function Insights({ width,handleClick,tableRef }) {

  return (
    <button
      className="flex items-center md:mx-auto ml-auto text-sm md:mr-5 md:border md:w-full md:h-9 md:rounded md:border-gray-300 p-1"
      style={width > 768 ? { gridColumn: "3" } : {}}
      onClick={handleClick}
    >
      <Image src={chart} alt="chart" width={28} height={28} display="fixed" />
      <div className="ml-2">Insights</div>
    </button>
  );
}