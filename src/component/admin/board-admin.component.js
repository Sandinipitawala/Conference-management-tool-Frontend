import React, { Component } from "react";

import UserService from "../../service/user.service";
import RPFileStats from "../files/admin-rp-files-count.component";
import WPFileStats from "../files/admin-wp-files-count.component";
import ResearchDetailsApproval from "../files/admin-research-details-approval.component";
import ConferenceDetailsApproval from "../files/admin-conference-details-approval.component"
import WorkshopDetailsApproval from "../files/admin-workshop-details-approval.component";

export default class BoardAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getAdminBoard().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <RPFileStats/>
                </header>
                <header className="jumbotron">
                    <WPFileStats/>
                </header>
                <header className="jumbotron">
                    <ConferenceDetailsApproval/>
                </header>
                <header className="jumbotron">
                    <ResearchDetailsApproval/>
                </header>
                <header className="jumbotron">
                    <WorkshopDetailsApproval/>
                </header>
            </div>
        );
    }
}