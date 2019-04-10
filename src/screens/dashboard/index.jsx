import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {login} from '../../redux/actions';
import './index.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>PhoneNo</th>
            </tr>
            {
                this.props.employeeList && this.props.employeeList.map((employee) => {
                    return (
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phoneNo}</td>
                        </tr>
                    )
                })
            }
        </table>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        employeeList: state.employeeList
    }
  }
  
  const mapDispatchToProps = { 
   }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));