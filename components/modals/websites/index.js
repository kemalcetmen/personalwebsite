import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../../../styles/Modal.module.scss";
import Web1 from './inside/Web1';
import Web2 from './inside/Web2';

const Responsive = () => {
    return (
        <div className={ styles.modalframe }>
            <Swiper
                modules={ [Navigation, Pagination] }
                spaceBetween={ 50 }
                slidesPerView={ 1 }
                navigation
                pagination={ { clickable: false } }
            >
                <SwiperSlide >
                    <Web1 />
                </SwiperSlide>
                <SwiperSlide>
                    <Web2 />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Responsive