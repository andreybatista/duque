import api from "./api";

export async function NowPlaying() {
  try {
    const { data } = await api.get("/movie/now_playing");
    return data;
  } catch (error) {}
}
