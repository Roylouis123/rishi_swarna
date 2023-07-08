import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "40px",
    marginBottom: "7%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  submitButton: {
    width: "100%",
  },
}));

const ContactUsPage = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField label="Name" variant="outlined" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactUsPage;
