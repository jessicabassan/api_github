import React, { Component } from 'react';
import { connect } from "react-redux";
import ListCommits from '../list-commits/ListCommits';
import { request_profile, request_repositories } from "../../actions/fetchAction";
import '../commum/css-reset.css'
import './search.css'

class Search extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const username = this.getUsername.value;
        this.props.dispatch(request_profile(username));
        this.props.dispatch(request_repositories(username));
        this.getUsername.value = "";
    };

  
    render() {
        const { data } = this.props;
        return (
            <div>
                <div className="search-container">
                    <h1>Connect Github API</h1>

                    <div className="input-container">
                        <form onSubmit={this.handleSubmit} >
                            <h2>Enter a GitHub username: </h2>
                            <input
                                className="input-username"
                                type="text"
                                placeholder="Enter a GitHub username"
                                required
                                ref={input => (this.getUsername = input)}
                            />
                            <button className="buttom-username">Ok</button>
                        </form>
                    </div>
                </div>
                {data.isFetching ? <h3>Loading...</h3> : null}
                {data.isError ? (
                    <h3 className="error">No such User exists.</h3>
                ) : null}
                {Object.keys(data.userData).length > 0  && Object.keys(data.repositoriesData).length > 0 ? (
                    <ListCommits user={data.userData} repositories={data.repositoriesData} />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(Search);