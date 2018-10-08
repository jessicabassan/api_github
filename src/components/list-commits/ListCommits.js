import React, { Component } from 'react';
import { connect } from "react-redux";
import { request_commits } from "../../actions/fetchAction";
import CommitsInfos from "./CommitsInfos";
import './ListCommits.css';

class GithubInfos extends Component {
    handleViewCommits = ({ repository, user }) => {
        const repositorieName = repository.name;
        const userLogin = user.login;
        this.props.dispatch(request_commits(userLogin, repositorieName));
    }
   
    render() {
        const { data, user } = this.props;

        const listRepositories = this.props.repositories.map((repository) => {
            return (
                <div className="view-repository">
                    <p>{repository.name}</p>
                    <button onClick={() => this.handleViewCommits({ repository, user })}>View last commits</button>
                </div>
            );
        });
        return (
            <div className="user-info" >
                <div className="content-profile">
                    <div className="avatar">
                        <img className="avatar-img" src={user.avatar_url} alt="avatar" width="250px" />
                    </div>
                    <div className="content">
                        <h1>Username: {user.login}</h1>
                        <h2>Name: {user.name}</h2>
                        <p>Bio: {user.bio}</p>
                        <p>Location: {user.location}</p>
                    </div>
                </div>
                <div className="content-infos">
                    <div className="content-repositories">
                        {listRepositories}
                    </div>
                    <div className="content-commits">
                        {data.commitisFetching ? <h3>Loading...</h3> : null}
                        {data.commitIsError ? (
                            <h3 className="error">No such Commits exists.</h3>
                        ) : null}
                        {Object.keys(data.commitsData).length > 0 ? (
                           <CommitsInfos commitsData={data.commitsData} />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(GithubInfos);