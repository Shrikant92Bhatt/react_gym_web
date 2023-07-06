import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position={'relative'} p={'20px'}>

      <Typography
        color={'#FF2526'}
        fontWeight={'600'}
        fontSize={'26px'}>
        Fitness club
      </Typography>

      <Typography fontWeight={'700'}
        sx={{ fontSize: { lg: '44px', sm: '24px' } }}
        mb='23px' mt='30px'>
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize={'24px'} lineHeight={'35px'} mb={4}>
        Checkout most effective exercises.
      </Typography>

      <Typography fontWeight={600}
        color={'#ff2526'}
        sx={{ opacity: '0.1', display: { lg: 'block', sm: 'none', xs: 'none' }, fontSize: '200px' }}>Exercise</Typography>

      <Button variant="contained"
        color="error"
        href='#exercises'
        sx={{ backgroundColor: '#ff2526', padding: '10px' }}>Explore Exercises</Button>
      <img src={HeroBannerImage} alt='Hero-Banner-Img' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
