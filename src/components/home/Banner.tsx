import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NowPlaying } from '../../requests'

export default function Banner() {

  const [nowPlaying, setNowPlaying] = useState<NowPlayingProps[]>();

  useEffect(() => {
    dadosPage()
  }, [])

  async function dadosPage() {
    const dataNowPlaying = await NowPlaying()
    setNowPlaying(dataNowPlaying.results)
  }
  return (
    <section className=''>
      <Swiper
        autoplay={{
          delay: 2500,
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {nowPlaying?.map((data) => (
          <SwiperSlide key={data.id} >
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

              <div className='absolute bottom-0 bg-gradient-to-b from-transparent to-grayPrimary h-2/3'>
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