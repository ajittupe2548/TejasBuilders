import React, { Component } from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import ProjectFilter from './ProjectFilter.js'
import ProjectCard from './ProjectCard'

export default class ProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
        }
    }
    async componentDidMount() {
        await axios.get(`http://localhost:8000/${this.props.type}projects/`)
            .then(response => {
                this.setState({
                    project: response.data
                })
            })
            .catch(err => {
                console.log('Erros is', err)
            })
    }

    projectLists() {
        return this.state.project.map((project, i) => {
            if (project.status === this.props.type) {
                return <ProjectCard key={i} project={project} />;
            };
        })
    }

    render() {
        return (
            <>
                <ProjectFilter />
                <Container>
                    <CardColumns>
                        {this.projectLists()}
                    </CardColumns>
                </Container>
            </>
        )
    }
}
