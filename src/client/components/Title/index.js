import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Title = () => {
  return (
    <Fragment>
      <h2>The page is missing</h2>
      <Helmet>
        <title>404 Page</title>
        <meta name="description" content="Opps, the page is missing!"></meta>
      </Helmet>
    </Fragment>
  )
};

export default Title;