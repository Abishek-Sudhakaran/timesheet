import React, { Component } from 'react';
import { ReactComponent as YourSvg } from './magnify.svg';

import './Table.css';   

class Projects extends Component{
    render(){
        return(
            <div>
            {/* <div className="empText">Projects</div> */}
                
         <label>
             <YourSvg style={{position:"fixed",left:"88%",top:"22px",zIndex:"99",fill:"grey"}}/>
             <input type="text" placeholder="Search" ></input>
         </label>
            
            <div>
           
        
         
         <button className="projectButton">ADD PROJECT</button>
           <table>
           <thead>
               <tr>
                  <th>Name</th><th>Id</th><th>CompanyId</th>
                  <th>Description</th>
               </tr>
           </thead>
           <tbody>  
               <tr>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
               </tr>
               <tr>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
               </tr>
               <tr>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
               </tr>
               <tr>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
               </tr>
               <tr>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
                   <td>hhhhi</td>
                   <td>hhhhelo</td>
               </tr>
     
         
          
           </tbody>
          
       </table>
   </div>
   </div>
        );
    }
}
export default Projects;