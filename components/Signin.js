import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {CURRENT_USER_QUERY} from "./User";

const SIGNIN_MUTATION = gql `
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export default class Signin extends Component {
    state = {
        email: '',
        password: '',
    };
    saveToState = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
  render() {
    return (
        <Mutation mutation={SIGNIN_MUTATION} variables={this.state} refetchQueries={[{ query: CURRENT_USER_QUERY}]}>
        {
            (signin, { error, loading }) => (
                <form method="post" onSubmit={async (e) => {
                    event.preventDefault();
                    const res = await signin();
                    this.setState({ email: '', password: '' })
                }}>
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Sign in</h2>
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState}/>
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        )
        }
        </Mutation>
    )
  }
}
