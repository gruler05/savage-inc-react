// This file is to share the state between different pages of the application
import App, { Container } from "next/app";

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Container>
                <p>On every Page</p>
                <Component />
            </Container>
        )
    }
}

export default MyApp;