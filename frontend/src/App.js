import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev')
  const showEmployees = true;

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
          <Employee name = "Kevin" role = "Intern" 
          img="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>    
          <Employee name = "Abby" role = {role}
          img="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>    
          <Employee name = "Joghn"
          img="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>    
        </> ) : (
          <p>You cannot see the employees</p>
        ) }

    </div>
  );

}

export default App;
