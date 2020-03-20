import React, { useContext } from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
    const { users, isLoading } = useContext(GithubContext);

    if (isLoading){
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