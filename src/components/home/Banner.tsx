import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getNowPlaying, getMovieDetail } from '../../service/requests'

export default function Banner() {

  const [nowPlaying, setNowPlaying] = useState<NowPlayingProps[]>();
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps[]>();

  useEffect(() => {
    handleGetNowPlaying()
  }, [])

  async function handleGetNowPlaying() {
    const data = await getNowPlaying()
    setNowPlaying(data.results)
  }

  async function handleGetMovieDetails(movieId: string) {
    const data = await getMovieDetail(movieId)
    console.log(data)
    setMovieDetail(data)
  }
  return (
    <section className=''>
      <Swiper
        autoplay={{
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(e) => (
          handleGetMovieDetails(e.slides[e.realIndex].id)
        )}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {nowPlaying?.map((data) => (
          <SwiperSlide key={data.id} id={`${data.id}`}>
            {data.id}
            <div
              className={`w-full h-screen relative`}
            >
              <Image
                // width={1980}
                // height={1080}
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={data.title}
                fill
                style={{ objectFit: "cover" }}
              />

              <div className='absolute bottom-0 bg-gradient-to-b from-transparent to-grayPrimary h-2/3 w-screen'>
                <div className='grid grid-rows-1  grid-cols-2 gap-4 h-full'>
                  <div className='flex flex-col justify-end'>
                    <h2>
                      {data.original_title}
                    </h2>
                    <div className='block'>
                      <span>
                        {data.vote_average}
                        |
                        {data.vote_count}
                      </span>

                      {movieDetail.genres.map(genre => {

                        <span key={genre.id}>
                          {genre.name}
                        </span>
                      })}

                    </div>
                    <p>
                      {data.overview}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </SwiperSlide>
        )
        )}
      </Swiper>
    </section >
  )
}

interface NowPlayingProps {
  id: number;
  genre_ids: [];
  adult: boolean;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  backdrop_path: string;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieDetailProps {
  id: number;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  },
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ],
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ],
  release_date: Date
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ],
  status: string;
  tagline: string;
  title: string;
  video: boolean,
  vote_average: number;
  vote_count: number;
}