import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";



function App() {
  const [sat, setSat] = useState(satData);
  const displaysats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currrenttype) => {
  const displaysats = satData.filter((newSatDisplay) => {
  return newSatDisplay.orbitType === currrenttype;
  });
  setSat(displaysats);
  };
  return (
  <div>
  <Banner/>
  <Buttons 
  filterByType={filterByType}
  setSat={setSat}
  displaySats={displaysats}
  />
  <Table sat={sat}/>
  </div>
  );
}

export default App;