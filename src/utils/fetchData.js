export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    cache: "force-cache",

    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_EXERCISE_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'Cache-Control': 'private'
    }
};

export const youtubeSearchOption = {
    method: 'GET',
    // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options)
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error)
    }
}