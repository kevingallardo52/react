import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: "Kevin1",
      role: "Intern1", 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
    {
      name: "Kevin2",
      role: "Intern2", 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
    {
      name: "Kevin3",
      role: role, 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
    {
      name: "Kevin4",
      role: "Intern4", 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
  ]);
  return (
    <div className="App">
      
      { showEmployees ? (
        <>
          <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
          ></input>
          <div className="flex flex-wrap justify-center">
            
              {employees.map((employee) => {
                return (
                <Employee 
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}/>
                );
              })}
          </div>    
        </> ) : (
          <p>You cannot see the employees</p>
        ) }

    </div>
  );

}

export default App;
