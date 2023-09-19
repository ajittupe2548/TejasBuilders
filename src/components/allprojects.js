import React, { Component } from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'

export default class AllProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
        }
    }
    async componentDidMount() {
        await axios.get("http://localhost:8000/projects/")
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
            return <ProjectCard project={currentproject} />;
        })
    }
    render() {
        return (
            <>
                <ProjectFilter />
                <Container>
                    <CardColumns>
                        {this.projectList()}
                    </CardColumns>
                </Container>
            </>
        )
    }
}