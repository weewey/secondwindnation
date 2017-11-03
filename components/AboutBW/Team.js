import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';


const styleSheet = theme => ({
  root: {
    width: '100%',
    height: '60vh',
    textAlign: 'center',
    // backgroundColor: 'green',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  para: {
    maxWidth: 1200,
    padding: 20,
    margin: 'auto',
  },
  button: {
    border: '1px solid black',
    backgroundColor: 'white',
    borderRadius: '2em',
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    // fontWeight: 500,
    color: 'black',
  },
  profile: {
    margin: 'auto',
  },
});

const members = [
  {
    name: 'Alan',
    title: 'Editor',
    initials: 'A',
  },
  {
    name: 'Chris',
    title: 'Development Coach',
    initials: 'C'
  },
  {
    name: 'Eugene',
    title: 'Performance Coach',
    initials: 'E',
  },
  {
    name: 'Melissa',
    title: 'Marcoms Strategist',
    initials: 'M',
  },
  {
    name: 'Romaine',
    title: 'Editor',
    initials: 'R',
  },
  {
    name: 'Shen',
    title: 'Development Coach',
    initials: 'S',
  },
  {
    name: 'Yew Wee',
    title: 'Chief Technology Officer',
    initials: 'YW',
  },
  {
    name: 'Z',
    title: 'Volunteer Photographer',
    initials: 'Z',
  },
  {
    name: 'Jian Hao',
    title: 'Web Developer',
    initials: 'JH',
  },
];

const teamList = members.map((member, index) => {
  return (
    <Grid item xs={4} sm={4} md={4} key={index}>
      <Avatar style={{ margin: 'auto' }}>{member.initials}</Avatar>
      <Typography type="title" style={{ marginTop: 10}}>{member.name}</Typography>
      <Typography type="subheading">{member.title}</Typography>
    </Grid>
  );
});

function Team(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <div className={classes.para}>
        <Grid container spacing={40} align="center" justify="center">
          <Grid item xs={12}>
            <Typography type="display3" className={classes.title}>TEAM</Typography>
          </Grid>
          {teamList}
          {/* <Button raised className={classes.button}>Join Us!</Button> */}
        </Grid>
      </div>
    </div>
  );
}


Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

teamList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Team);
