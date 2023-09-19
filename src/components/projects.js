import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class projects extends Component {
    render() {
        return (
            <>
                <h1>Projects</h1>
                <Button variant="primary" id='pri' href="completed">Completed Projects</Button>{' '}
                <Button variant="secondary" href='ongoing'>Ongoing Projects</Button>{' '}
                <Button variant="success" href='future'>Future Projects</Button>{' '}
            </>
        )
    }
}