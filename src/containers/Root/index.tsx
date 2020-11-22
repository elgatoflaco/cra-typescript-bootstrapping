import React from 'react';
import Guest from 'containers/Guest';
import Main from 'containers/Main';

const Root = () => {
  const me = true;

  if (!me) {
    return <Guest />;
  }

  return <Main />;
};

export default Root;
