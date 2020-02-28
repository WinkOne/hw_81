import React, {Component} from 'react';
import './App.css';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {postLinks} from "./store/action";


class App extends Component {
    state={
        url: ''
    };


    inputChangeHandler = e => {
      this.setState({[e.target.name]: e.target.value})
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.postLinks({originalUrl: this.state.url})
    };
    render() {
        return (
            <div className="App">
                <Container>
                    <Form onSubmit={this.onSubmitHandler}>
                        <FormGroup>
                            <Label for="url">Links</Label>
                            <Input required onChange={this.inputChangeHandler} type="text" name="url" id="url" placeholder="Enter your links" />
                            <Button>Create</Button>
                        </FormGroup>
                    </Form>

                    <hr/>
                    <div>
                        <h5>Your link now looks like this:</h5>
                        {this.props.linkThis && <a href={this.props.linkThis.originalUrl}>https://{this.props.linkThis.shortUrl}</a>}
                    </div>
                </Container>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        linkThis: state.link
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postLinks: (link) => dispatch(postLinks(link)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);