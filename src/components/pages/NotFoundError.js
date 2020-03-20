import React from 'react'

const NotFoundError = () =>  <div className="row text-center">
    <div className="col-lg-12 my-5">
        <i className="fab fa-github text-danger" style={{fontSize: '10rem'}} />
        <h1 className="display-4 my-3 text-danger">Github Finder</h1>
        <h2>Oops! 404 - Page Not Found</h2>
        <h5 className="text-muted mt-3">We were not able to find the page you are looking for</h5>
    </div>
</div>

export default NotFoundError;