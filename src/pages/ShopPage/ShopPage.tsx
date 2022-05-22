import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import s from "./ShopPage.module.scss"
import VideoScreenButtons from "../../components/VideoScreenButtons/VideoScreenButtons";
import SelectionList from "../../components/SelectionList/SelectionsList";

const ShopPage: FC = (props) => {
    return (
        <>
            <Header/>
            <div className={s["large-video-section"]}>
                {/*    VIDEO ABSOLUTE BACKGROUND*/}
                <video
                    muted
                    loop
                    autoPlay
                    className={s["large-video-section__video"]}>
                    <source src="https://html5css.ru/howto/rain.mp4" type="video/mp4"/>
                </video>
                {/*    BUTTONS AND CONTROLS */}
                <div className={s['large-video-section__content']}>
                    <div className={s['sections__content-wrapper']}>
                        {/* кнопки снизу */}
                        <VideoScreenButtons/>
                    </div>
                </div>
            </div>
            <div className={s['video-sliders-section']}>
                <SelectionList detailVideo={true}/>
                <SelectionList detailVideo={true}/>
                <SelectionList detailVideo={false}/>
                <SelectionList detailVideo={true}/>
                <SelectionList detailVideo={true}/>
            </div>
        </>
    );
}

export default ShopPage;