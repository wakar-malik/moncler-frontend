import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import Navbar from '../sections/navbar/Navbar';
import Slides from '../utils/slides';
import Button from '../components/Button/Button';

export default function Hero() {

  const btnText = [
    'SHOP NOW',
    'DISCOVER MORE'
  ]

  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={true}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-screen relative cursor-pointer"
      >
        {Slides.map((item, index) => (
          <SwiperSlide key={index}><img className='h-full w-full object-cover' src={item.heroImg} />
          <div className='bg-black opacity-30 w-full h-screen absolute top-0 left-0'></div>
            <div className='flex flex-col items-center gap-2 absolute bottom-14 text-white text-center px-7 font-josefin w-full lg:gap-7'>
              <h2 className='text-xl lg:text-2xl'>{item.subHeading}</h2>
              <h1 className='text-3xl lg:text-5xl'>{item.heading}</h1>
              <div className='flex items-center justify-center gap-6'>
                {btnText.map((text, idx) => (<Button key={idx} text={text} />))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
