import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import { URL } from '../utils/constant';
const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return 'Loding...';
    return (
        <Box sx={{ mt: { lg: '200px', xs: '20px' } }} p={'20px'}>
            <Typography variant='h4' mb="33px">
                Watch <span style={{ color: '#ff2526', textTransform: 'capitalize' }} >{name}</span> exercise video.
            </Typography>
            <Stack
                justifyContent={'flex-start'}
                flexWrap={'wrap'}
                alignItems={'center'}
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '110px', xs: '0' }
                }}
            >
                {exerciseVideos.length > 0 && exerciseVideos.slice(0, 6).map((item, index) => {
                    return (
                        <a
                            key={index}
                            className='exercise-video'
                            href={`${URL.YOUTUBE_WATCH_URL}${item.video.videoId}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Box>
                                {item}
                            </Box>

                        </a>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos