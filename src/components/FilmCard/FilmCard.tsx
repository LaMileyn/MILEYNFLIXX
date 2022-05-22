import React, {FC} from 'react';
import s from './FilmCard.module.scss';
import {Link} from "react-router-dom";

interface IFilmsCard {
    activeCard : boolean
}
const FilmCard : FC<IFilmsCard> = ({ activeCard}) => {
    return (
        <div className={[s['film-card'], activeCard && s['active-card']].join(" ")}>
            <Link to={'/shop'}>
                <div className={s['film-card__meta']}>
                    <div className={s['meta__grade']}>5.5</div>
                    <div className={s['meta__price']}>299₽</div>
                </div>
                <div className={s['film-card__image']}>
                    <img src="https://www.film.ru/sites/default/files/filefield_paths/i3m72ildbiomygoke6od.jpg" alt=""/>
                </div>
            </Link>
        </div>
    );
}

export default FilmCard;