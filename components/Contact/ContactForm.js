import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { postContactForm } from '../../model/cosmic';

const styleSheet = theme => ({
  root: {
    width: '100%',
    marginTop: 100,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    width: '50%',
    marginRight: theme.spacing.unit,
    fontSize: '18px',
  },
  textBox: {
    marginLeft: theme.spacing.unit,
    marginTop: '30px',
    fontSize: '18px',
    marginRight: theme.spacing.unit,
  },
  button: {
    border: '1px solid black',
    backgroundColor: 'white',
    borderRadius: '2em',
    marginTop: 50,
    marginBottom: 50,
  },
  header: {
    color: 'black',
  },
});

class ContactForm extends React.Component {
  state = {
    date: new Date(),
    name: '',
    email: '',
    message: '',
  };
  handleChange = name => event =>
    this.setState({
      [name]: event.target.value,
    });
  handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    this.setState({ date: `${currentTime.getDate()}-${currentTime.getTime()}` });
    postContactForm(this.state);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" className={classes.root} align="center">
        <Grid item xl={10} lg={10} sm={10} xs={9} >
          <Typography type="display2" gutterBottom> Contact Us </Typography>
          <Typography type="subheading" gutterBottom> Got a question? We&apos;ll give you straight answers! </Typography>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              required
              id="name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              required
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              type="email"
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              required
              id="message"
              helperText="Enter your message"
              label="Message"
              multiline
              className={classes.textBox}
              value={this.state.message}
              rows="1"
              rowsMax="10"
              onChange={this.handleChange('message')}
              margin="normal"
              fullWidth
            />
            <Button className={classes.button} raised type="submit" value="submit">Submit</Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContactForm);
