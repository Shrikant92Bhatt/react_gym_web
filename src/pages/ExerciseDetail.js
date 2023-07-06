import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { URL } from '../utils/constant';
import { fetchData, exerciseOptions, youtubeSearchOption } from '../utils/fetchData';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailExercisesData = async () => {
      const exerciseDetailData = await fetchData(`${URL.EXERCISES_DB_URL}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${URL.YOUTUBE_SEARCH_URL}/search?query=${exerciseDetailData.name}`, youtubeSearchOption);
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(`${URL.EXERCISES_DB_URL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscle(targetMuscleExercisesData);

      const similarEquipmentData = await fetchData(`${URL.EXERCISES_DB_URL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(similarEquipmentData);
    }
    fetchDetailExercisesData();

  }, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle={targetMuscle} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail