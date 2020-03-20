import React, { useState, useContext } from 'react'

import GithubContext from '../context/github/githubContext';

const Search = () => {
    const { setAlertHandler, fetchUsersHandler, users, clearUsersHandler } = useContext(GithubContext);
    
    const [name, setName] = useState('');

    const valueChangeHandler = event => setName(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();
        if (name === ''){
            setAlertHandler('Search field can not left blank!', 'danger');
        } else {
            fetchUsersHandler(name);
            setName('');
        }
    }
    
    return (
        <React.Fragment>
            <form onSubmit={formSubmitHandler}>
                <input type="text" name='name' placeholder='Enter name here' 
                    className='my-2 form-control' value={name} onChange={valueChangeHandler} />
                <input type="submit" className='btn btn-dark btn-block' value="Search"/>
            </form>
            {users.length > 0 ? <input type="button" value="Clear" onClick={clearUsersHandler} className='btn btn-danger btn-block my-1' /> : null}
        </React.Fragment>
    );
}

export default Search;