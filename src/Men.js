import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

export default Men => {
  return (
    <Router>
        <div>
     <Link to="/Company">
        Company
      </Link>
      <Link to="/Projects">
      
        Projects 
      
      </Link>
      <Link to="/Employees">
      
        Employees
     
      </Link>
      <Link to="/Task">
    
        Task
    
      </Link>
      <Link to="/ Time-Sheet">
      
        Time-Sheet
   
      </Link>
      <Link to="/Time-Sheet-view">
     
      Time-Sheet-view
     
   
      </Link>
    
     
      <Route path='/Time-Sheet-view' component={Nav} />
      </div>
    </Router>
  );
};