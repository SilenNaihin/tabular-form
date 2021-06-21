import {useState} from "react";
import search from "../../../public/search.png";
import Image from "next/image";

export default function Search({ width, items, tableRef }) {
  const [input, setInput] = useState("");

  function checkMatching() {
    items.some((x, i) => {
      if (x.first.toLowerCase().includes(input.toLowerCase())) {
        tableRef.current.childNodes[i].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        tableRef.current.childNodes[i + 1].style.cssText += "font-weight: bold";
        const timer = setTimeout(() => {
            tableRef.current.childNodes[i + 1].style.cssText +=
                "font-weight: normal";
        }, 4000);
        return (
          () => clearTimeout(timer)
        );;
        }
      
    });
  }

  function submitEnter(event) {
    if (event.key === "Enter") {
      checkMatching();
    }
  }

  return (
    <div
      className="flex items-center border border-gray-300 rounded px-1"
      style={width > 768 ? { gridColumn: "1" } : {}}
    >
      <button onClick={checkMatching} className="mt-0.5">
        <Image
          src={search}
          alt="search"
          width={32}
          height={32}
          display="fixed"
        />
      </button>
      <input
        placeholder=" first name"
        className=" h-9 ml-1 w-full"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={submitEnter}
      ></input>
    </div>
  );
}
