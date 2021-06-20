// * INSTRUCTIONS *
// Given a Component that will render _after_ page load, have that component
//   * fetch data from an API endpoint "/api/parents", used a random API found online from randomapi.com
//   * render results in tabular form with columns 
// uses Next.JS, TailwindCSS, https://www.npmjs.com/package/fireworks, and https://randomuser.me/

import Row from "../components/row";
import { useState, useEffect } from "react";
import { Fireworks } from "fireworks/lib/react";

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fireworks,setFireworks] = useState(true);

  let fxProps = {
    count: 8,
    interval: 500,
    colors: ["red", "yellow", "orange", "green", "blue"],
    bubbleSizeMinimum: 3,
    bubbleSizeMaximum: 20,
    particleTimeout: 500,
    calc: (props, i) => ({
      ...props,
      x: window.innerWidth*0.8 * Math.random(),
      y: 100 + Math.random() * i * 200,
    }),
  };

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
        await setTimeout(() => setFireworks(false), 3000);
      }
      fetchData()
      
  }, []);

  return (
    <div className="flex justify-center my-10 table-auto">
      {fireworks ?  (<Fireworks {...fxProps} />) : (<></>)}
      <table className="w-3/4">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Created</th>
          <th>Balance</th>
        </tr>
        {items.map((x) => (
          <Row
            first={x.first}
            last={x.last}
            email={x.email}
            address={x.address}
            created={x.created}
            balance={x.balance}
          />
        ))}
      </table>
    </div>
  );
}
