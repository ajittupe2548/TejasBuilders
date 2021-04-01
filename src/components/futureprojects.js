import React, { Component } from 'react';
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

export default class futureprojects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
        }
    }

    async componentDidMount() {
        await axios.get("http://localhost:8000/futureprojects/")
            .then(response => {
                this.setState({
                    project: response.data
                })
            })
            .catch(err => {
                console.log('err is', err)
            })
    }

    projectLists() {
        return this.state.project.map(currentproject => {
            if(currentproject.status=='future'){
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
                        {this.projectLists()}
                    </CardColumns>
                </Container>
            </div>
        )
    }
}
