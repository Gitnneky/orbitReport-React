const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>

     </tr>

     </thead>
     <tbody>
      {sat.map((data)=>{
        return(
     <tr>
       <td>Row Data TBD</td>
       <td>{data.name}</td>
       <td>{data.Type}</td>
       <td>{data.LaunhDate}</td>
       <td>{data.orbitType}</td>
       </tr>
         )
        })}
        <tr>
          <td>Row Data TBD</td>
          <td>R</td>
          <td>R</td>
          <td>R</td>
          <td>R</td>
        </tr>
     </tbody>
   </table>
  );
};

export default Table;