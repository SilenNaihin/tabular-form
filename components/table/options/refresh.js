import refresh from "../../../public/refresh.png";
import Image from "next/image";

export default function Refresh({ width, handleRefresh }) {
  
  return (
    <button
      className="flex items-center mr-auto md:mx-auto"
      style={width > 768 ? { gridColumn: "4" } : {}}
      onClick={handleRefresh}
    >
      <Image
        src={refresh}
        alt="refresh"
        width={28}
        height={28}
        display="fixed"
      />
      <div className="px-2 text-sm">Refresh</div>
    </button>
  );
}
