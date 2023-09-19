import React from 'react';
import { Card, Button } from 'react-bootstrap';
import sample from '../images/sample.jpg'

function ProjectCard({ project }) {
    const { name, address, } = project;
    return (
        <Card style={{ width: '' }}>
            <Card.Img variant="top" src={sample} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {address}
                </Card.Text>
                <Button variant="primary">Read more...</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard