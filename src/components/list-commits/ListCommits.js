import React from 'react';
import './ListCommits.css';

const ListCommits = props => {
    const listRepositories = props.repositories.map((teste) => {
        return (
           <p>{teste.name}</p>
        );
    });
    console.log('props.data.repositoriesData', props.repositories)
    return (
        <div className="user-info">
            <div className="content-profile">
                <div className="avatar">
                    <img className="avatar-img" src={props.user.avatar_url} alt="avatar" width="250px" />
                </div>
                <div className="content">
                    <h1>Username: {props.user.login}</h1>
                    <h2>Name: {props.user.name}</h2>
                    <p>
                        <strong>Bio: </strong>
                        {props.user.bio}
                    </p>
                    <p>
                        <strong>Location:</strong> {props.user.location}
                    </p>
                    <p>
                        <strong>Followers:</strong> {props.user.followers}
                    </p>
                    <p>
                        <strong>Following:</strong> {props.user.following}
                    </p>
                </div>
            </div>
            <div className="content-repositories">
                {listRepositories}
            </div>
        </div>
    );
};

export default ListCommits;