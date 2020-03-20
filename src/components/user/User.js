import React, { Component } from 'react';

import Spinner from '../layout/Spinner';
import RepoItem from './RepoItem';

class User extends Component {
    
    componentDidMount(){
        this.props.getUserDetails(this.props.match.params.username);
        this.props.getUserRepos(this.props.match.params.username);
    }
    
    render() {
        const { loading } = this.props;
        const { login, avatar_url, html_url, followers, following, public_repos, 
            name, location, bio } = this.props.user;

        return (
            <div className="container">
                {loading && (
                    <div className="row text-center">
                        <div className="col-lg-12 my-5">
                            <Spinner />
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-lg-12 my-4 text-center">
                        <h1>
                            {login} Profile
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Personal Details:-</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 my-3">
                        <div className="card p-3 bg-light">
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <img src={avatar_url} className='img-fluid mb-3 rounded' alt="profile pic" style={{width: '240px'}} />
                                    <h3>{login}</h3>
                                </div>
                                <div className="col-lg-6">
                                    <p><strong>Name: </strong>{name}</p>
                                    <p><strong>GitHub Profile: </strong><a href={html_url}>{html_url}</a></p>
                                    <p><strong>Bio: </strong>{bio}</p>
                                    <p><strong>location: </strong>{location}</p>
                                    <p><strong>public Repos: </strong>{public_repos}</p>
                                    <p><strong>Followers: </strong>{followers}</p>
                                    <p><strong>Following: </strong>{following}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 my-3">
                        <h3>Latest public repos:-</h3>
                    </div>
                </div>
                <div className="row">
                    {this.props.repos.map((repo => <RepoItem repo={repo} key={repo.id} />))}
                </div>
            </div>
        )
    }
}

export default User;
