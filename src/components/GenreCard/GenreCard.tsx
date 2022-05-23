import React, {FC} from 'react';
import s from './GenreCard.module.scss';
import cx from 'classnames';

const GenreCard : FC = (props) => {
    return (
        <div className={s['genre-card']}>
            <div className={s['genre-card__image']}>
                <img src="https://avatars.mds.yandex.net/get-ott/2419418/2a00000174e8d0f589ab0acc51549c5c9a89/720x360" alt=""/>
            </div>
        </div>
    );
}

export default GenreCard;