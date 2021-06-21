import Refresh from'./options/refresh';
import Insights from "./options/insights";
import SortBy from "./options/sortby";
import Search from "./options/search";

import { useState } from "react";

export default function TableOptions({
  width,
  handleRefresh,
  items,
  tableRef,
  handleCreated,
  handleLastname,
  handleBalance,
}) {
  const [clicked, setClicked] = useState(false);
  const [people, setPeople] = useState(0);
  const [peopleAfter, setPeopleAfter] = useState(0);
  const [average, setAverage] = useState(0);
  const [monthsAfterJune, setMonthsAfterJune] = useState([
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ]);

  function handleClick() {
    let scopeAverage = 0;
    let scopePeopleAfter = 0;

    if (clicked === false) {
      setClicked(true);
      // people total
      setPeople(items.length);
      items.forEach((x, i) => {
        // people after June
        if (
          monthsAfterJune.some((str) => x.created.toLowerCase().includes(str))
        ) {
          scopePeopleAfter++;
        }
        // average balance
        scopeAverage += x.balance.replaceAll(/[$,]/g, "") * 1;
      });
      setAverage((scopeAverage / items.length).toFixed(2));
      setPeopleAfter(scopePeopleAfter);
    } else {
      setClicked(false);
    }
  }

  return (
    <>
      <div className="grid items-center grid-cols-2 md:grid-flow-col md:grid-cols-4 gap-3 -mb-5 mt-5 mx-5 md:ml-10">
        <SortBy
          width={width}
          items={items}
          tableRef={tableRef}
          handleCreated={handleCreated}
          handleLastname={handleLastname}
          handleBalance={handleBalance}
        />
        <Search width={width} items={items} tableRef={tableRef} />
        <Refresh width={width} handleRefresh={handleRefresh}/>
        <Insights width={width} handleClick={handleClick} tableRef={tableRef} />
      </div>
      {clicked ? (
        <div className="mt-8 -mb-6 flex mx-5 justify-between md:justify-center">
          <div>
            <div className="font-bold"># Of People</div>
            <div className="flex justify-center">{people}</div>
          </div>
          <div className="md:ml-10">
            <div className="font-bold">Created after June</div>
            <div className="flex justify-center">{peopleAfter}</div>
          </div>
          <div className="md:ml-10">
            <div className="font-bold">Average Balance</div>
            <div className="flex justify-center">{average}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
