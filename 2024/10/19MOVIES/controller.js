const hotMovieImgEl = document.querySelector(".hot-movie-img");
const getPopularImgs = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = response.data.results;
    // const imgsPath = movies.ma((movie) => movie.backdrop_path);
    // return imgsPath;
    return movies;
  } catch (err) {
    console.log(err);
  }
};
const movies = await getPopularImgs();
const exemple = movies[0].backdrop_path;
console.log(exemple);
async function randerBeegImgAndTytle(img) {
  img.src = `https://image.tmdb.org/t/p/original${exemple}`;
}
randerBeegImg(hotMovieImgEl);
console.log(movies);
