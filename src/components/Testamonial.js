import React from "react";
import { Box, Typography, Avatar, useMediaQuery, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  testimonialContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  testimonialText: {
    marginBottom: 8,
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
}));

const Testimonial = () => {
  const classes = useStyles();

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus erat sed lectus ullamcorper volutpat. Vivamus faucibus sagittis mauris, eu viverra odio tempus ut.",
      avatar: "https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_1765167053.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "Ut molestie ipsum sit amet neque vestibulum venenatis. Vestibulum luctus tellus in bibendum dapibus. Mauris ut leo non nisl bibendum rutrum.",
      avatar: "https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_1765167053.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      feedback:
        "Fusce hendrerit, purus a venenatis malesuada, neque mi tristique enim, ut condimentum mi elit vitae magna. Donec ac rutrum augue.",
      avatar: "https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_1765167053.jpg",
    },
  ];

  const isLargeScreen = useMediaQuery('(min-width:800px)');

  return (
    <Box margin={5}>
      <Grid marginBottom={3}>
        <Typography variant="h4" fontWeight="500" marginLeft={8} >Testamonial</Typography>
      </Grid>
      <Grid display="flex" flexDirection={isLargeScreen ? "row" : "column"}
      >
        {testimonials.map((testimonial) => (
          <Grid alignItems="center" textAlign="center">

            <img src={testimonial.avatar} alt="testimonial" style={{ borderRadius: "50%", height: "30vh" }} />

            <Typography variant="h5">{testimonial.name}</Typography>
            <Typography>{testimonial.feedback}</Typography>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Testimonial;
