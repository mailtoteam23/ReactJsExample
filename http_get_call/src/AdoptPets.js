import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetPets } from './AdoptPetService';

const AdoptPets = () => {
  const [pet, setPet] = useState([]);

  useEffect(() => {
    
      var resp = GetPets().then(d => {
        setPet(d.data.entries);
      })   

  }, [pet])


  return (

    <div><h2>Pet List</h2><hr/>
      <table><thead><tr>
        <th>API</th><th>Description</th>
        <th>Category</th><th>Link</th>
        </tr></thead>
        {pet.map((data, i) => {
          return (<>
            <tr>
              <td>{data.API}</td>
              <td>{data.Description}</td>
              <td>{data.Category}</td>
              <td>{data.Link}</td>              
            </tr></>
            );

        })}
        </table> </div>
  );
}
export default AdoptPets;