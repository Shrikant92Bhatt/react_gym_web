import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, TextField, Stack } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { URL } from '../utils/constant';
import HorizontalScrollBar from './HorizontalScrollBar'
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  // const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(URL.BODY_PARTS_LIST, exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();

  }, [])


  const handelSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(URL.EXERCISES, exerciseOptions);
      const searchedExercise = exerciseData.filter(
        (exercise) => (exercise.name.toLowerCase()).indexOf(search) > -1
          || exercise.bodyPart.toLowerCase().indexOf(search) > -1
          || exercise.equipment.toLowerCase().indexOf(search) > -1
          || exercise.target.toLowerCase().indexOf(search) > -1
      );
      setSearch('');
      setExercises(searchedExercise);
    }
  }
  return (
    <Stack alignItems={'center'} mt='37px' justifyContent={'center'} p={'20px'}>
      <Typography textTransform={'capitalize'}
        fontWeight={'700'}
        sx={{ fontSize: { lg: '44px', sx: '30px' } }} mb={'50px'} textAlign={'center'}>
        Awsome Extercises You <br />
        should know
      </Typography>
      <Box mb={'72px'} position={'relative'}>
        <TextField sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
          },
          width: {
            sm: '350px',
            lg: '800px'
          },
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder='Search Exercises' type='text' />
        <Button className='search-btn' variant="contained"
          color="error"
          sx={{
            backgroundColor: "#ff2526",
            color: "#fff",
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '12px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handelSearch}
        >Search</Button>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        padding: '20px'
      }}>
        {bodyParts.length > 0 && <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={true} />}
      </Box>
    </Stack>
  )
}

export default SearchExercises;