import Table from "../components/table/table";
import Header from "../components/header";
import Hero from "../components/hero";
import TableOptions from '../components/table/tableOptions'


import { useState, useEffect, useRef } from "react";
import {useWindowSize} from "../utils/utils"

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [size,setSize] = useState(0)
  const [width] = useWindowSize();
  const [refreshed,setRefreshed] = useState(0);
  const [refreshTable,setRefreshTable] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    
    const fetchData = async () => {
      await fetch(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      }
      fetchData()
      
  }, [refreshed]);

  useEffect(() => {
    setSize(window.innerHeight * 0.95)
  }, [width])

  function handleRefresh(){
    setRefreshed(refreshed+1)
  }

  function handleCreated() {
    setRefreshTable(refreshTable+1)
    items.sort((a, b) => +new Date(b.created) - +new Date(a.created))
  }

  function handleLastname() {
    setRefreshTable(refreshTable + 1);
    items.sort((a, b) => (a.last > b.last ? 1 : -1));
  }

  function handleBalance() {
    setRefreshTable(refreshTable + 1);
    items.sort((b, a) => (a.balance.replaceAll(/[$,]/g, "") * 1 > b.balance.replaceAll(/[$,]/g, "") * 1 ? 1 : -1));
  }

  return (
    <div className="overflow-hidden">
      <div
        className="w-full bg-black relative z-20"
        style={{ height: `${size}px` }}
      >
        <Header />
        <Hero tableRef={tableRef} />
      </div>
      <div className="diagonal relative z-30"></div>
      <div className="md:w-3/4 mx-auto">
        <div className="text-center text-4xl font-bold -mt-24 relative z-50">
          Sortable Table
        </div>
        <TableOptions
          width={width}
          handleRefresh={handleRefresh}
          items={items}
          tableRef={tableRef}
          handleCreated={handleCreated}
          handleLastname={handleLastname}
          handleBalance={handleBalance}
        />
        <Table items={items} tableRef={tableRef} refreshTable={refreshTable} />
      </div>
    </div>
  );
}
