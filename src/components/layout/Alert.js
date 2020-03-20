import React, { useContext } from 'react';
// 
import GithubContext from '../context/github/githubContext';

const Alert = () => {
    const { alert, resetAlertHandler } = useContext(GithubContext);
    return alert !== null && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <i className="fa fa-info-circle"></i> <strong>{alert.msg}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={resetAlertHandler}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}


export default Alert;
