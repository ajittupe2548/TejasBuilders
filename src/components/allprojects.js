import React, { Component } from 'react'
import { Container, CardColumns, Button } from 'react-bootstrap';
import axios from 'axios';
import ProjectCard from './ProjectCard';

export default class AllProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
        }

        this.allProjects = null;
    }
    async componentDidMount() {
        await axios.get("http://localhost:8000/projects/")
            .then(response => {
                this.setState({
                    project: response.data
                })
                this.allProjects = response.data;
            })
            .catch(err => {
                console.log('Erros is:', err)
            })
    }

    handleFilterClick = (type) => {
        this.setState({
            project: this.allProjects.filter(item => item.status === type)
        })
    }

    render() {
        return (
            <>
                <h1>Projects</h1>
                <div className='filter-container'>

                    <Button variant="warning" onClick={() => this.setState({ project: this.allProjects })}>All Projects</Button>{' '}
                    <Button variant="primary" onClick={() => this.handleFilterClick('completed')}>Completed Projects</Button>{' '}
                    <Button variant="secondary" onClick={() => this.handleFilterClick('ongoing')}>Ongoing Projects</Button>{' '}
                    <Button variant="success" onClick={() => this.handleFilterClick('future')}>Future Projects</Button>{' '}

                </div>
                <Container>
                    <CardColumns>
                        {
                            this.state.project.map((project, i) => {
                                return <ProjectCard key={i} project={project} />;
                            })
                        }
                    </CardColumns>
                </Container>
            </>
        )
    }
}