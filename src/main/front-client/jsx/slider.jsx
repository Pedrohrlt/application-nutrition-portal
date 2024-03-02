import imagem1 from '../image/imagem1.jpg'
import imagem2 from '../image/imagem2.jpg'
import imagem3 from '../image/imagem3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../scss/home.css'
import {Button} from "react-bootstrap";
import {EffectFade} from "swiper/modules";

const data= [
    {id: '1', image: imagem1},
    {id: '2', image: imagem2},
    {id: '3', image: imagem3},
]


function Slider(){
    return(
            <Swiper
                modules={[EffectFade]}
                effect="fade"
                slidesPerView={1}
                pagination={{ clickable: true}}
                navigation
                style={{marginTop:"10px"}}
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            width={"100%"}
                            src={item.image}
                            alt="Slider"
                            className='slider-item'>
                        </img>
                        <Button className='position-relative'>aa</Button>
                    </SwiperSlide>))}
            </Swiper>
    )
}

export default Slider;