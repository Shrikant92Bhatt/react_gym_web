import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
        <React.Fragment>
            <Stack type="button"
                alignItems={'center'}
                justifyContent={'center'}
                direction={'column'}
                className='bodyPart-card'
                sx={{
                  borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: '20px',
                  width: '270px',
                  height: '280px',
                  cursor: 'pointer',
                  gap: '40px'
                }}
                onClick={() => {
                  setBodyPart(item)
                  window.scrollTo({ to: 1800, left: 100, behavior: 'smooth' })
                }
                }>
                <img src={Icon} alt='body part' style={{ height: '40px', width: '40px' }} />
                <Typography fontSize='24px' fontWeight='600' color='#3A1212' textTransform='capitalize'>{item}</Typography>
            </Stack>
        </React.Fragment >
  )
}

export default BodyPart
