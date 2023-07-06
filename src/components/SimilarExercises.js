import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar';
import Loder from './Loder';
const SimilarExercises = ({ targetMuscle, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant='h3' mb={'60px'}>
                Exercise that target the same muscle group

            </Typography>
            <Stack
                direction={'row'}
                sx={{ p: '2', position: 'relative' }}
            >
                {targetMuscle.length > 0 ? <HorizontalScrollBar data={targetMuscle} isBodyParts={false} /> : <Loder />}

            </Stack>
            <Typography variant='h3' mb={'60px'}>
                Exercise with similar Equipment

            </Typography>
            <Stack
                direction={'row'}
                sx={{ p: '2', position: 'relative' }}
            >
                {targetMuscle.length > 0 ? <HorizontalScrollBar data={equipmentExercises} isBodyParts={false} /> : <Loder />}

            </Stack>
        </Box>
    )
}

export default SimilarExercises