// This file is to share the state between different pages of the application
import App, { Container } from "next/app";
import {  ApolloProvider } from "react-apollo";
import withData from '../lib/withData';
import Page from "../components/Page";
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        //  this exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }
    render() {
        const { Component, apollo, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp);