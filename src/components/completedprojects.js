import React, { Component } from 'react'
import { Card, Button, Container, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import sample from '../images/sample.jpg'
import Projects from './projects.js'

const Project = props => (
    <Card style={{ width: '' }}>
        <Card.Img variant="top" src={sample} style={{ height: '20rem' }} />
        <Card.Body>
            <Card.Title>{props.projects.name}</Card.Title>
            <Card.Text>
                {props.projects.address}
            </Card.Text>
            <Button variant="primary">Read more...</Button>
        </Card.Body>
    </Card>
)
export default class completedprojects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
        }
    }
    async componentDidMount() {
        await axios.get("http://localhost:8000/completedprojects/")
            .then(response => {
                this.setState({
                    project: response.data
                })
            })
            .catch(err => {
                console.log('Erros is', err)
            })
    }

    projectList() {
        return this.state.project.map(currentproject => {
            if (currentproject.status == 'completed') {
                return <Project projects={currentproject} />;
            };
        })
    }

    render() {
        return (
            <div>
                <Projects />
                <Container>
                    <CardColumns>
                        {this.projectList()}
                    </CardColumns>
                </Container>
            </div>
        )
    }
}
