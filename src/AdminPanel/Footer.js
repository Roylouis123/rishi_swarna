import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import logo from "../assets/logo.png";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "16px",
    marginTop: "auto",
  },
  location: {
    marginBottom: "8px",
    display: "flex",
  },
  mapContainer: {
    width: "100%",
    height: "300px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "16px",
  },
  formField: {
    marginBottom: "16px", // Add margin bottom to create space between text fields
  },
});

const Footer = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} sm={6}>
            <img
              style={{ width: "10rem", height: "4rem" }}
              src={logo}
              alt="Logo"
            />
            <br />
            <br />
            <Typography variant="p">
              Address : Suvarnagadde <br />
              Holegadde, Karnataka <br />
              581327, India
            </Typography>
            <br /> <br />
            <Typography variant="p">Email : swarnaLatex@gmail.com</Typography>
            <br />
            <br />
            <Typography variant="p">Phone number : +91 082775 98910</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
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
          </Grid>
        </Grid>

        <Divider />
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          @ All Rights Reserved by SWARANA LATEX
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
