import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <Box padding={5}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2">
            Company Profile
          </Typography>
          <Typography variant="body1" component="p">
            With the overwhelming support of our highly dedicated team as well as our sophisticated facilities, we, Swarna Latex,
            are offering a wide range of Personal Protective Equipment to our clients. Started in the year 2000, we are reckoned as
            a reputed manufacturer, exporters, and House Hold Hand gloves developed by using latex material. Our range is widely used
            in the chemical industry, pharmaceutical industry, cement industry, construction industry, and fertilizer industry as well
            as for housekeeping services. We have established a sound infrastructure that has played an important role in our company’s
            growth. We are also backed up by a diligent team of experts such as engineers, technicians, quality auditors, and sales &
            marketing executives. Moreover, under the leadership and guidance of our mentor, Mr. Manjunath Bhat, we have achieved a
            remarkable position in the international markets.
          </Typography>
          <Typography variant="h5" component="h2" marginTop={4}>
            Vision & Mission
          </Typography>
          <Typography variant="body1" component="p">
            Our vision is to protect people, products as well as the environment by offering a wide range of occupational, safety,
            health, and environmental protection products in India. Our mission is to provide customers with high-quality products and
            value-added services at acceptable prices.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://m.media-amazon.com/images/I/71Qkmftp+bL._AC_UF894,1000_QL80_.jpg"
            alt="Floating Image"
            style={{
              width: '100%',
              height: 'auto',
              float: 'right',
              maxWidth: '650px',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
