import React from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {

    if (loading){
        return <Spinner />
    } else {
        return ( 
            <React.Fragment>
                {users.map( user => <UserItem user={user} key={user.id} /> )}
            </React.Fragment>
        );
    }
    
    
}

export default Users;