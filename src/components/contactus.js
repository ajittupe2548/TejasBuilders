import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            contact: '',
            email: '',
            address: '',
            comment: '',
            contacts: [],
            nameholder: 'Your Name',
            contactholder: 'Contact Number',
            emailholder: 'Your Email-Id',
            addressholder: 'Address',
            commentholder: 'Any Comment'
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    onSubmit(e) {
        // e.preventDefault();
        const contact = {
            name: this.state.name,
            contact: this.state.contact,
            email: this.state.email,
            address: this.state.address,
            comment: this.state.comment
        }

        console.log(contact)
        axios.post('http://localhost:8000/contactus/add', contact)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            name: '',
            contact: '',
            email: '',
            address: '',
            comment: '',
            nameholder: '',
            contactholder: '',
            emailholder: '',
            addressholder: '',
            commentholder: ''
        })
    }

    render() {
        return (
            <div className='container col-sm-6 p-2'>
                <h1> Enquiry Form</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder={this.state.nameholder} onChange={this.onChangeName} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder={this.state.contactholder} onChange={this.onChangeContact} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder={this.state.emailholder} onChange={this.onChangeEmail} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={2} placeholder={this.state.addressholder} onChange={this.onChangeAddress} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea2">
                        <Form.Control as="textarea" rows={2} placeholder={this.state.commentholder} onChange={this.onChangeComment} />
                    </Form.Group>
                    <Button type="submit" variant='secondary'>Submit form</Button>
                </Form >
            </div >
        )
    }
}