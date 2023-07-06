import React, { useEffect, useState } from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { URL } from '../utils/constant'
import ExerciseCard from './ExerciseCard'
const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  console.log('bodypart', bodyPart)
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9

  const indexOfLastExercise = currentPage * exercisePerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scroll({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === 'all') {
        exercisesData = await fetchData(URL.EXERCISES, exerciseOptions)
      } else {
        exercisesData = await fetchData(`${URL.BODY_PARTS}/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt={'50px'} p={'20px'}>
      <Typography variant='h4' mb={'46px'}>
        Showing results
      </Typography>
      <Stack direction={'row'} sx={{ gap: { lg: '110px', sx: '50px' } }} flexWrap={'wrap'} justifyContent={'center'}>
        {currentExercises.length > 0 &&
          currentExercises.map((exercise, index) => {
            return (<ExerciseCard key={index} exercise={exercise} />)
          })
        }

      </Stack>
      <Stack mt={'100px'} alignItems={'center'}>
        {exercises.length > exercisePerPage &&
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={(e, value) => paginate(e, value)}
            size={'large'}
          />
        }
      </Stack>
    </Box>
  )
}

export default Exercises
