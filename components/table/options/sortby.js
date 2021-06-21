import Select from "react-select";
import {useState,useEffect} from 'react';

export default function SortBy({
  width,
  handleCreated,
  handleLastname,
  handleBalance,
}) {
  const options = [
    { value: "lastname", label: "Last Name" },
    { value: "created", label: "Created" },
    { value: "balance", label: "Balance (Highest First)" },
  ];
  const [obj, setObj] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    if (obj.value === "lastname") {
      handleLastname();
    } else if (obj.value === "created") {
      handleCreated();
    } else if (obj.value === "balance") {
      handleBalance();
    }
  }, [obj]);

  return (
    <Select
      placeholder="Sort By"
      className="relative z-50"
      options={options}
      style={width > 768 ? { gridColumn: "2" } : {}}
      onChange={(object) => setObj(object)}
      value={obj.value}
    />
  );
}