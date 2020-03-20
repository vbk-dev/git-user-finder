import React from 'react';

const Alert = ({ alert, resetAlert }) => alert !== null && (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <i className="fa fa-info-circle"></i> <strong>{alert.msg}</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={resetAlert}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)


export default Alert;
