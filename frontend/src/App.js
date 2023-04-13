import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Kevin1",
      role: "Intern1", 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
    {
      id: 2,
      name: "Kevin2",
      role: "Intern2", 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
    {
      id: 3,
      name: "Kevin3",
      role: role, 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
    {
      id: 4,
      name: "Kevin4",
      role: "Intern4", 
      img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
    },
  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        return{...employee, name:newName, role:newRole}
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      };
    setEmployees([...employees, newEmployee]);
  }

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
                const editEmployee = (
                  <EditEmployee 
                  name={employee.name} 
                  id={employee.id}
                  role={employee.role} 
                  updateEmployee={updateEmployee}/>
                );
                return (
                <Employee 
                  key={uuidv4()}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  editEmployee={editEmployee}/>
                );
              })}
          </div>    
          <AddEmployee newEmployee={newEmployee}/>
        </> ) : (
          <p>You cannot see the employees</p>
        ) }

    </div>
  );

}

export default App;
