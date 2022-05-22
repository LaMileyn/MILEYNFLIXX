import React, {FC} from 'react';
import s from './WelcomePage.module.scss';
import InfiniteGallery from "../../components/InfiniteGallery/InfiniteGallery";
import LogoBig from "../../UI/Logos/LogoBig";

const WelcomePage: FC = (props) => {
    return (
        <section className={s['welcome-page']}>

            {/* ЛОГОТИП MILEYNFLIX AT THE TOP LEFT*/}
            <div className={s["welcome-page__logotype"]}>
                <LogoBig />
            </div>
            {/* ЛОГОТИП MILEYNFLIX AT THE TOP LEFT*/}

            {/* ОСНОВНОЙ ТЕКСТ*/}
            <div className={s["welcome-page__header"]}>
                <h1>Всегда есть что посмотреть</h1>
                <p>Новые серии в день выхода и тысячи фильмов на вечер. Без рекламы, в хорошем качестве, с любимой
                    озвучкой или в оригинале.</p>
            </div>
            {/* ОСНОВНОЙ ТЕКСТ*/}

            {/* БЕСКОНЕЧНАЯ ГАЛЛЕРЕЯ */}
            <div className={s["welcome-page__infinite-gallery"]}>
                <InfiniteGallery />
            </div>
            {/* БЕСКОНЕЧНАЯ ГАЛЛЕРЕЯ */}

            {/* ПЕРЕЙТИ К ПРИЛОЖЕНИЮ */}
            <div className={s["welcome-page__button-get-started"]}>
                <button>Перейти к приложению</button>
            </div>

        </section>
    );
}

export default WelcomePage;