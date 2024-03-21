import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      <button>Placeholder Button</button>
      <button>All Orbits</button>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>


        );
      })}
      <button onClick={()=>setSat(satData)}>All Orbit</button>
    </div>
  );
};

export default Buttons;