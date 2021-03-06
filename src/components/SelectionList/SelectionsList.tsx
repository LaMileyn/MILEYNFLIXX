import React, {FC } from 'react';
import s from './SelectionsList.module.scss';
import CategorysCardsSlider from "../CategorysCardsSlider/CategorysCardsSlider";
import VideoDetailSlider from "../VideoDetailSlider/VideoDetailSlider";

interface ISelectionList {
    detailVideo : boolean
}

const SelectionList : FC<ISelectionList> = ({ detailVideo }) => {


    return (
        <section className={s["selection-list"]}>
            <div className={s['selection-list__headline']}>
                { detailVideo
                    ? <h2>Выбор редакции</h2>
                    : <h2>Жанры</h2>
                }

            </div>
            <div className={s['selection-list__slider']}>
                {
                    detailVideo
                        ? <CategorysCardsSlider genreCard={false}/>
                        : <CategorysCardsSlider genreCard={true}/>
                }
            </div>
            { detailVideo && (
                <div className={s['selection-list__detail-video']}>
                    <VideoDetailSlider/>
                </div>
            ) }
        </section>

    );
}

export default SelectionList;