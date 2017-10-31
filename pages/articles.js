import React from 'react';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';

function Index() {
  return (
    <Typography type="headline" component="h1">
      This page will show all the articles
    </Typography>
  );
}

export default withRoot(Index);
