import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, CardColumns } from 'react-bootstrap';
import sample from '../images/sample.jpg';


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

export default class pro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
        }
    }
    async componentDidMount() {
        await axios.get("http://localhost:5000/ajit/")
            .then(response => {
                this.setState({
                    project: response.data
                })
            })
            .catch(err => {
                console.log('Erros is:', err)
            })
    }
    projectList() {
        return this.state.project.map(currentproject => {
            return <Project projects={currentproject} />;
        })
    }
    render() {
        return (
            <div>
                {this.projectList()}
            </div>
        )
    }
}
