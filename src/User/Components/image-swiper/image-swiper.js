import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../Assets/Styles/ImageSwiper/ImageSwiper.scss'

function ImageSwiper(props){
    const {images} = props

    return(
        <>
        <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block" style={{margin: "0 auto"}}>
            <Swiper  spaceBetween={0} slidesPerView={3} modules={[Pagination]} pagination={{ clickable: true }}>
                {
                    images.map((image)=>(
                        <SwiperSlide><img src={image} alt="" className="image-slide"/></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none">
            <Swiper spaceBetween={0} slidesPerView={2} modules={[Pagination]} pagination={{ clickable: true }}>
                {
                    images.map((image)=>(
                        <SwiperSlide><img src={image} alt="" className="image-slide"/></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="d-none d-xs-none d-sm-block d-md-none d-lg-none">
            <Swiper spaceBetween={0} slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }}>
                {
                    images.map((image)=>(
                        <SwiperSlide><img src={image} alt="" className="image-slide"/></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="d-xs-block d-sm-none d-md-none d-lg-none">
            <Swiper spaceBetween={0} slidesPerView={1}  modules={[Pagination]} pagination={{ clickable: true }}>
                {
                    images.map((image)=>(
                        <SwiperSlide><img src={image} alt="" className="image-slide"/></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        </>
    );
}

export default ImageSwiper