import { FC } from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"

interface IImageSliderProps {
    images: string[];
}

export const ImageSlider: FC<IImageSliderProps> = (props) => {
    return (
        <div className={styles["slider"]}>
            <Swiper slidesPerView={1} loop>
                {props.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ backgroundImage: `url("${image}")`}}></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}