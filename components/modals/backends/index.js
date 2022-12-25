import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Bots from './inside/Bots';
import Api from './inside/Apis';
import styles from "../../../styles/Modal.module.scss";

const Backend = () => {
    return (
        <div className={ styles.modalframe }>
            <Swiper
                modules={ [Navigation, Pagination] }
                spaceBetween={ 50 }
                slidesPerView={ 1 }
                navigation
                pagination={ { clickable: false } }
            >
                <SwiperSlide>
                    <Bots />
                </SwiperSlide>
                <SwiperSlide>
                    <Api />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Backend