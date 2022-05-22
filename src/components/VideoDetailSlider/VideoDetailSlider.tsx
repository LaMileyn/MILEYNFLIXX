import React, {FC, useState} from 'react';
import s from './VideoDetailSlider.module.scss'
import CloseIcon from "../../UI/Icons/CloseIcon";
import TextContentVideoAbout from "../TextContentVideoAbout/TextContentVideoAbout";
import cx from 'classnames'
import TextContentVideoDetail from "../TextContentVideoDetail/TextContentVideoDetail";

const VideoDetailSlider: FC = (props) => {

    const [currentSection,setCurrentSection] = useState<string>('О фильме')

    return (
        <div className={s['detail-slider']}>
            <div className={s['detail-slider__black-part']}></div>
            <div className={s['detail-slider__video-part']}>
                <video
                    muted
                    loop
                    autoPlay
                    >
                    <source src="https://html5css.ru/howto/rain.mp4" type="video/mp4"/>
                </video>
                <div className={s['video-part__left-linear-gradient']}></div>
                { currentSection === "Детали" && <div className={s['video-part__left-blur']}></div> }

            </div>

            {/* content in the center*/}

            <div className={s['detail-slider__content']}>
                {
                    currentSection === "О фильме"
                        ? <TextContentVideoAbout />
                        : <TextContentVideoDetail />
                }

            </div>
            {/* content in the center*/}

            {/* content in the center at the top*/}
            <div className={s['detail-slider__switch-details']}>
                <button
                    onClick={ () => setCurrentSection("О фильме")}
                    className={
                        cx(s['switch-btn'],{ [s['switch-btn-active']] : currentSection === "О фильме" })
                    }>О фильме</button>
                <button
                    onClick={ () => setCurrentSection("Детали")}
                    className={
                    cx(s['switch-btn'],{ [s['switch-btn-active']] : currentSection === "Детали" })
                }>Детали</button>
            </div>
            {/* content in the center at the top*/}

            {/* icon exit at the top left*/}
            <div className={s['detail-slider__exit']}>
                <CloseIcon/>
            </div>
            {/* icon exit at the top left*/}
        </div>
    );
}

export default VideoDetailSlider;