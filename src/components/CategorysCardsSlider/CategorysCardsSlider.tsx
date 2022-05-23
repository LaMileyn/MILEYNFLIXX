import React, {FC, useState} from 'react';
import s from './CategorysCardsSlider.module.scss';
import FilmCard from "../FilmCard/FilmCard";
import GenreCard from "../GenreCard/GenreCard";

interface ICategorysCardsSlider {
    genreCard : boolean
}

const CategorysCardsSlider : FC<ICategorysCardsSlider> = ({genreCard}) => {

    // translateX of current slider
    const [offSetSlider,setOffSetSlider] = useState<number>(0)
    // count of elements which we cant see in the screen
    const [ratio,setRatio] = useState<number>(0)
    // count of clicks ( elements translated )
    const [clickCounter,setClicks] = useState<number>(0)
    // count of items in the slider ( now - only static )
    const itemsCount = 7
    const widthCard =  genreCard ? 350 : 450
    // realization of slider translateX forward
    const handleForwardClick = () => {
        setRatio(Math.ceil( window.innerWidth / widthCard ));
        setClicks( prev => prev + 1);
        if ( itemsCount - ( 4 + clickCounter ) + ( 4 - ratio ) >= 0){
            setOffSetSlider( prev => prev - ( 30 + widthCard ) )
        } else{
            setOffSetSlider(0);
            setClicks(0)
        }
    }
    // realization of slider translateX back
    const handleBackClick = () =>{
        setRatio(Math.ceil( window.innerWidth / widthCard ));
        setClicks( prev => prev - 1);
        if ( clickCounter > 0 ) {
            setOffSetSlider( prev => prev + widthCard + 30)
        }
    }

    return (
        <div className={s.slider}>
            <span
                style={ { display : `${clickCounter > 0 ? "block" : "none"}` }}
                className={["material-symbols-rounded",s.left].join(' ')} onClick={handleBackClick}>arrow_back_ios</span>
            <span className={["material-symbols-rounded",s.right].join(' ')} onClick={handleForwardClick}>arrow_forward_ios</span>
            <div className={s.slider__list} style={{ transform : `translateX(${offSetSlider}px)`}}>
                {/*<div className={s['list__item-card-genres']}>*/}
                {/*    <FilmCard activeCard={false}/>*/}
                {/*</div>*/}
                { !genreCard
                    ? [1,2,3,4,5,6,7].map( (element,index) =>(
                        <div key={index} className={s['list__item-card-films']}>
                            <FilmCard activeCard={false}/>
                        </div>
                    ) )
                    : [1,2,3,4,5,6,7].map( (element,index) =>(
                        <div key={index} className={s['list__item-card-genres']}>
                            <GenreCard/>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
}

export default CategorysCardsSlider;