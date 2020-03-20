import React from 'react';
import { Link } from 'react-router-dom';

const About = () => <div className="row my-3">
    <div className="col-lg-12">
        <h1 className="text-center text-danger display-4 mt-3 mb-5"><i className="fab fa-github mx-2" />About Github Finder</h1>
        <div style={{fontSize: '1.2rem'}}>
            <p className='text-justify'>This is a practice project developed with the help of ReactJs. In this project you 
                can search for the user and check his/her profile and latest repositories. This project uses Github API for 
                fetching user and repositories data. This project is completely developed using React JS and Bootstrap.</p>
            <p>
                <strong>Developed by: </strong> Vaibhav Kumar <br/>
                <strong>Github profile: </strong> <Link to='/user/vbk-dev'>vbk-dev</Link><br/>
                <strong>Version: </strong> 1.0.0<br/>
            </p>
        </div>
    </div>
</div>

export default About;