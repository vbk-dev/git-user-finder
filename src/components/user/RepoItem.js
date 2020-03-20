import React from 'react';

const RepoItem = ({repo}) => <div className="col-lg-6 my-2">
    <div className="card p-3 text-left bg-light">
        <h4 class="card-title text-danger">{repo.name}</h4>
        <p>
            <span class="badge badge-pill badge-success mr-3" style={{fontSize: '0.8rem'}}><strong>Forks:</strong> {repo.forks}</span>
            <span class="badge badge-pill badge-info" style={{fontSize: '0.8rem'}}><strong>Watchers:</strong> {repo.watchers}</span>
        </p>
        <a href={repo.html_url}>Check Repository</a>
    </div>
</div>

export default RepoItem;
