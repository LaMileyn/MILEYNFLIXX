import React, {FC} from 'react';
import s from './TextContentVideoDetail.module.scss';
import cx from 'classnames';
import LogoBig from "../../UI/Logos/LogoBig";

const TextContentVideoDetail: FC = (props) => {
    return (
        <div className={s['details-content-wrapper']}>
            {/*<div className={s['details-content__logotype']}>*/}
            {/*    <div className={s['logotype__wrapper']}>*/}
            {/*        <LogoBig/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*    ------------------------------------------    */}
            <div className={s['details-content-text']}>
                <div className={s['content-text__left-part']}>
                    <div className={s['content__rating']}>
                        <div className={s['rating__rate']}>7.4</div>
                        <div className={s['rating__count-rates']}>466 оценок</div>
                    </div>
                    <div className={s['content__description']}>Более полувека правительство скрывало от всего мира детали
                        убийства 35-го президента США Джона Кеннеди. Мы по-прежнему не знаем, кто организовал это дерзкое
                        убийство и на самом деле спустил курок. Режиссер Оливер Стоун, вооружившись новыми секретными
                        документами, одним из первых пытается докопаться до истины.
                    </div>
                    <div className={s['content__outlink']}>
                        <a href="google.com">Подробнее на кинопоиске</a>
                    </div>
                </div>
                <div className={s['content-text__right-part']}>
                    <div className={s['content__actors']}>
                        <div className={s['actors']}>
                            <div className={s['content__block']}>
                                <div className={s['block__text-headline']}>Актеры</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                                <div className={s['block__text']}>Уолтер Кронкайт</div>
                            </div>
                        </div>
                        <div className={s['directors']}>
                            <div className={s['content__block']}>
                                <div className={s['block__text-headline']}>Режиссеры</div>
                                <div className={s['block__text']}>Оливер стоун</div>
                            </div>
                        </div>
                    </div>
                    <div className={s['content__audio']}>
                        <div className={s['content__block']}>
                            <div className={s['block__text-headline']}>Аудио дорожки</div>
                            <div className={s['block__text']}>Русский</div>
                            <div className={s['block__text']}>Русский 5.1</div>
                            <div className={s['block__text']}>Английский</div>
                            <div className={s['block__text']}>Английский 5.1</div>
                        </div>
                        <div className={s['content__block']}>
                            <div className={s['block__text-headline']}>Субтитры</div>
                            <div className={s['block__text']}>Нет</div>
                        </div>
                        <div className={s['content__block']}>
                            <div className={s['block__text-headline']}>Оригинальное название</div>
                            <div className={s['block__text']}>JFK Revisited: Through the Looking Glass</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TextContentVideoDetail;