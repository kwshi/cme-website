import React from 'react';

class ErrorPage extends React.Component {
  static getInitialProps({ err, res }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <div>
        <h1>
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
        </h1>
      </div>
    );
  }
}

export default ErrorPage;
