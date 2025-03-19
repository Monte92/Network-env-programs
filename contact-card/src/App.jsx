import React, { useState } from "react";
import ContactCard from "./components/ContactCard";
import employees from "./assets/employees"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.company} ${employee.jobTitle}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Directory</h1>
      
      
      <input 
        type="text" 
        placeholder="Search by name, company, or job title..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      
      {filteredEmployees.length > 0 ? (
        filteredEmployees.map((employee, index) => (
          <ContactCard 
            key={index} 
            name={employee.name} 
            education={employee.education} 
            jobTitle={employee.jobTitle} 
            company={employee.company} 
            email={employee.email} 
            phoneNumber={employee.phoneNumber} 
          />
        ))
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
};

export default App;
