import React, { Fragment } from 'react';

import Alert from '../layout/Alert';
import Search from '../user/Search';
import Users from '../user/Users';

const Home = () => <Fragment>
    <div className="row text-center my-5">
        <div className="col-lg-12">
            <Alert />
            <Search />
        </div>
    </div>
    <div className="row text-center">
        <Users />
    </div>
</Fragment> 

export default Home;
