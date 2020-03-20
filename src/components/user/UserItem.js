import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: {login, avatar_url} }) => {
    return (
        <div className='col-lg-3 col-md-4'>
            <div className="card my-3 mx-3">
                <img src={avatar_url} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h4 className="card-title">{login}</h4>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm">more</Link>
                </div>
            </div>
        </div>
    );
}

UserItem.prototype = {
    users: PropTypes.object.isRequired,
}

export default UserItem
