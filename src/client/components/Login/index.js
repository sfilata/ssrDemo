import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>Login Page</h2>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="This is the login page!"></meta>
        </Helmet>
      </Fragment>
    )
  }
}

export default Login;