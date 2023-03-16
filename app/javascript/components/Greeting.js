import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

const Greeting = ({ greeting, loading, error, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops, something went wrong.</div>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    greeting: state.greeting,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);