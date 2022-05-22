import React, {FC} from 'react';
import s from './TextContentVideoAbout.module.scss'
import LogoBig from "../../UI/Logos/LogoBig";
import SoundIcon from "../../UI/Icons/SoundIcon";
import VideoScreenButtons from "../VideoScreenButtons/VideoScreenButtons";

const TextContentVideoAbout: FC = (props) => {
    return (
        <div className={s['text-content-wrapper']}>
            <div className={s['text-content__logotype']}>
                <div className={s['logotype__wrapper']}>
                    <LogoBig/>
                </div>
            </div>
            {/*    ----------------------------    */}
            <div className={s['text-content__meta']}>
                <div className={s['meta__base']}>
                    <div className={s['meta__rating']}>
                        <div className={s['rating__rate-value']}>6.5</div>
                        <div className={s['rating__vote-count']}>15K</div>
                    </div>
                    <div className={s['meta__description']}>
                        <span className={s['description__item']}>2022, комедия</span>
                        <span className={s['description__item']}>Франция</span>
                        <span className={s['description__item']}>1ч 30мин</span>
                        <span className={s['description__item']}>16 +</span>
                    </div>
                </div>
                <div className={s['meta__features']}>
                    <div className={s['features__badges']}>
                        <div className={s['badges__quality']}>Full HD</div>
                        <div className={s['badges__volume']}>5.1</div>
                    </div>
                    <div className={s['features__audio']}>
                        <div className={s['audio__icon-wrapper']}>
                            <SoundIcon/>
                        </div>
                        Rus
                    </div>
                </div>
            </div>
            <div className={s['text-content__description']}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam atque, aut culpa dolore
                    dolorem eveniet ipsum natus non perspiciatis quo quod quos sed. Corporis dolores esse explicabo
                    facilis impedit odio quisquam, quo repellat tempore. Cupiditate doloremque ipsam ipsum laboriosam
                    obcaecati, quod ratione sapiente sint unde velit. A accusantium animi, architecto aspernatur autem
                    beatae consequatur consequuntur corporis debitis dicta dolore ducimus ea, eaque eligendi ex
                    exercitationem facere fuga id iure labore maxime molestias nemo numquam optio pariatur placeat
                    quaerat quis quo ratione repellat reprehenderit rerum sint temporibus velit voluptas, voluptatem
                    voluptatibus. Alias ducimus ex necessitatibus nulla numquam quaerat quam rem?</p>
            </div>
            <div className={s['text-content__buttons']}>
                <VideoScreenButtons/>
            </div>
        </div>
    );
}

export default TextContentVideoAbout;