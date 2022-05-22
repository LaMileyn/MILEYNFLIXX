import React, {FC} from 'react';
import s from './VideoScreenButtons.module.scss';
import PlayIcon from "../../UI/Icons/PlayIcon";
import InfoIcon from "../../UI/Icons/InfoIcon";
import FavouriteIcon from "../../UI/Icons/FavouriteIcon";
import FullScreenIcon from "../../UI/Icons/FullScreenIcon";
import MuteIcon from "../../UI/Icons/MuteIcon";

const VideoScreenButtons: FC = (props) => {
    return (
        <>
            <div className={s.price}>от 199₽</div>
            <div className={s['buttons-actions']}>
                <div className={s['buttons-actions__left-part']}>
                    <button className={[s['btn'], s['btn__buy-and-watch']].join(" ")}>
                        <div className={s['btn__wrapper']}><PlayIcon/></div>
                        Купить и смотреть
                    </button>
                    <button className={[s['btn'], s['btn__about-film']].join(" ")}>
                        <div className={s['btn__wrapper']}><InfoIcon/></div>
                        О фильме
                    </button>
                    <button className={[s['btn'], s['btn__favourite']].join(" ")}>
                        <div className={s['btn__wrapper']}>
                            <FavouriteIcon/>
                        </div>
                    </button>
                </div>
                <div className={s['buttons-actions__right-part']}>
                    <button className={s['btn-big']}>
                        <div className={s['btn-big__wrapper']}>
                            <MuteIcon/>
                        </div>
                    </button>
                    <button className={s['btn-big']}>
                        <div className={s['btn-big__wrapper']}><FullScreenIcon/></div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default VideoScreenButtons;