import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <Button variant="primary" id='pri' href="completedprojects">Completed Projects</Button>{' '}
                <Button variant="secondary" href='ongoingprojects'>Ongoing Projects</Button>{' '}
                <Button variant="success" href='futureprojects'>Future Projects</Button>{' '}
            </div>
        )
    }
}