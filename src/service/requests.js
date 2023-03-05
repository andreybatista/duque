import api from "./api";

export async function getNowPlaying() {
  try {
    const { data } = await api.get("/movie/now_playing");
    return data;
  } catch (error) {}
}

export async function getMovieDetail(movieId) {
  try {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
  } catch (error) {}
}
