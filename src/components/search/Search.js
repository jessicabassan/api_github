import React, { Component } from 'react';
import { connect } from "react-redux";
import ListCommits from '../list-commits/ListCommits';
import { request_profile } from "../../actions/fetchAction";
import '../commum/css-reset.css'
import './search.css'

class Search extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const username = this.getUsername.value;
        this.props.dispatch(request_profile(username));
        this.getUsername.value = "";
    };
    render() {
        console.log(this.props.data);
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
                {this.props.data.isFetching ? <h3>Loading...</h3> : null}
                {this.props.data.isError ? (
                    <h3 className="error">No such User exists.</h3>
                ) : null}
                {Object.keys(this.props.data.userData).length > 0 ? (
                    <ListCommits user={this.props.data.userData} />
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