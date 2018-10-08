import React, { Component } from 'react';
import './ListCommits.css';

class CommitsInfos extends Component {
    render() {
        const commitsData = this.props.commitsData.map((commits) => {
        const authorDetails = commits.commit.author;    
            return (
                <div className="commit-detail">
                    <p>{authorDetails.name}: </p>
                    <p>"{commits.commit.message}"</p>
                </div>
            );
        });
        return (
            <div>
                <h3>Last Commits: </h3>
                {commitsData}
            </div>
        );
    }
}

export default CommitsInfos;