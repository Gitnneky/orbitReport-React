import <satData as satData
{displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      <button>Placeholder Button</button>
      <button>All Orbits</button>
    </div>
  );
};

export default Buttons;