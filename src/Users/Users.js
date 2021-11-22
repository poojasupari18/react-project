import React, {useContext, useEffect, useState} from "react";
import { Context } from '../Context/UserContext';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Users = () => {
    const { state, fetchUsers } = useContext(Context);
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        loadUsers()
    },[])

    async function loadUsers() {
        await fetchUsers()
        // state && state.users && setUsersData()
    }

    console.log("state", state)

    return state && state.users ?
    <div style={{ marginLeft: '9em' }}>
        <div className="ag-theme-alpine" style={{height: 500, width: 1000 }}>
        <AgGridReact
            rowData={state.users.map(x => ({ 'id': x.id, 'name': x.name, 'email': x.email, 'company': x.company.name }))}>
               <AgGridColumn field="id"></AgGridColumn>
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn>
               <AgGridColumn field="company"></AgGridColumn>
        </AgGridReact>
    </div> </div> : <></>
}

export default Users;