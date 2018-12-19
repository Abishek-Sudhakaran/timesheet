import React, { Component } from 'react';
import {  elastic as Menu } from 'react-burger-menu';
import { BrowserRouter,Route,NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'
// import Employees from './Employees';


class Sidebar extends Component{
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      currentTitleName:"",
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu (value) {
    this.setState({
      menuOpen: false,
      currentTitleName:value,
    })
  }

  render(){ 
    return(
      <div> 
            <div className="navBar">
              
              <div className="menuContainer">
                  <span className="menuText ">{this.state.currentTitleName}</span>  
                <Menu width={ 250 } id={ "sidebar" } isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
                  <NavLink to="/Company" className="menu-item" onClick={() => this.closeMenu("Pending items")}>
                    PendingItems
                  </NavLink>
                  <NavLink to="/Company" className="menu-item" onClick={() => this.closeMenu("Company")}>
                    Company
                  </NavLink>
                  <NavLink to="/Projects" className="menu-item" onClick={() => this.closeMenu("Projects")}>
                    Projects 
                  </NavLink>
                  <NavLink to="/Employees" className="menu-item" onClick={() => this.closeMenu("Employees")}>
                    Employees
                  </NavLink>
                  <NavLink to="/Task" className="menu-item" onClick={() => this.closeMenu("Task")}>
                    Task
                  </NavLink>
                 <NavLink to="/Time-Sheet" className="menu-item" onClick={() => this.closeMenu("Time-Sheet")}>
                    Time-Sheet
                 </NavLink>
                 <NavLink to="/Time-Sheet-view" className="menu-item" onClick={() => this.closeMenu("Time-Sheet-view")}>
                    Time-Sheet-view
                 </NavLink>
                </Menu>
              </div>
            </div>
          </div>
  );
}
}

export default withRouter(Sidebar);