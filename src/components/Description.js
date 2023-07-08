import { Box, Card, Grid, Typography } from '@mui/material';
import { Business, People, EventNote, Public } from '@mui/icons-material';
import React from 'react';

const Description = () => {
  return (
    <Box margin={6}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Grid textAlign="center">
            <Typography variant="h2">
              <span style={{ color: 'orange' }}>India's Leading Industrial and</span> <br />
              <span style={{ color: 'skyblue' }}>Household Gloves Manufacturer</span>
            </Typography>
          </Grid>

          <Grid textAlign="center">
            <Typography variant="h4">
              Working with sharp objects, heavy machinery, or chemicals exposes workers' hands to serious dangers
            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12} marginTop={5} display="flex" justifyContent="space-around" gap={10}>
          <Grid item xs={12} md={5} >
            <Card sx={{ "&:hover": { backgroundColor: 'orange' } }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Business fontSize="large" />
                <Typography variant="h5" align="center">
                  Nature of Business
                </Typography>
              </Box>
              <Typography variant="body1" align="center">
                Manufacturer & Supplier
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} >
            <Card sx={{ "&:hover": { backgroundColor: 'orange' } }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <People fontSize="large" />
                <Typography variant="h5" align="center">
                  Number of Employees
                </Typography>
              </Box>
              <Typography variant="body1" align="center">
                Upto 10 People
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} >
            <Card sx={{ "&:hover": { backgroundColor: 'orange' } }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <EventNote fontSize="large" />
                <Typography variant="h5" align="center">
                  Year of Establishment
                </Typography>
              </Box>
              <Typography variant="body1" align="center">
                2017
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} >
            <Card sx={{ "&:hover": { backgroundColor: 'orange' } }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Public fontSize="large" />
                <Typography variant="h5" align="center">
                  Market Covered
                </Typography>
              </Box>
              <Typography variant="body1" align="center">
                All India
              </Typography>
            </Card>
          </Grid>
        </Grid>


        {/* Additional content */}

        <Grid item xs={12} marginTop={5}>
          <Typography variant="h4" align="center">
            Our Expertise
          </Typography>
          <Typography variant="body1" align="center">
            With years of experience and dedicated craftsmanship, we specialize in producing a wide range of gloves that cater to various industries, including construction, manufacturing, healthcare, laboratories, and more. Our gloves are designed to offer superior protection, comfort, and dexterity, ensuring the safety and well-being of workers in diverse working environments.
          </Typography>
        </Grid>

        <Grid item xs={12} marginTop={5}>
          <Typography variant="h4" align="center">
            Quality Assurance
          </Typography>
          <Typography variant="body1" align="center">
            At our manufacturing facility, we follow strict quality control procedures to ensure that every glove meets the highest standards of quality, durability, and performance. We conduct thorough testing and inspection throughout the production process, from sourcing premium materials to the final stages of manufacturing. Our commitment to quality assurance enables us to deliver reliable and trustworthy hand protection solutions to our customers.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Description;
