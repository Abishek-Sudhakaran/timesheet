import React, { Component } from 'react';
import { ReactComponent as YourSvg } from './magnify.svg';


import './Table.css';

class Employees extends Component{

    
    render(){
        return(
         <div style={{marginTop:"0px"}}>
             {/* <div className="empText">Employee Table</div> */}
             <div>
          <label>
              <YourSvg style={{position:"fixed",left:"88%",top:"22px",zIndex:"99",fill:"grey"}}/>
              <input type="text" placeholder="Search" ></input>
          </label>
          </div>
        
            <table>
            <thead>
                <tr>
                   <th>Name</th><th>Id</th><th>CompanyId</th>
                   <th>Role</th><th>EmailID</th><th>Phone</th>
                   <th>Address</th><th>Password</th>
                </tr>
            </thead>
            <tbody>  
                <tr>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                </tr>
            {/* </tbody>
            <tbody>   */}
                <tr>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                </tr>
            {/* </tbody>
            <tbody> */}
                  
                <tr>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                </tr>
            {/* </tbody>
            <tbody>   */}
                <tr>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                </tr>
            {/* </tbody>
            <tbody>   */}
                <tr>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                    <td>hi</td>
                    <td>helo</td>
                </tr>
            </tbody>
           
        </table>
    </div>
            
);
}
}
export default Employees;