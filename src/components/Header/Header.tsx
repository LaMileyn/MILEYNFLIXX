import React, {FC, useEffect, useState} from 'react';
import s from './Header.module.scss'
import LogoBig from "../../UI/Logos/LogoBig";
import {Link, NavLink} from "react-router-dom";


const Header: FC = (props) => {

    // состояния
    // ----- open / close input search field
    const [search, setSearch] = useState<boolean>(false)
    // ----- there is / no background header
    const [isBackgroundHeader, setIsBackgroundHeader] = useState<boolean>(false)
    // ----- opened / closed burger menu
    const [burger, setBurger] = useState<boolean>(false)
    // ----- opened / closed burger menu
    const [previousScrollCoordinate, setPreviousScrollCoordinate] = useState<number>(0)
    // ----- opened / closed burger menu
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)

    // МЕНЯЕМ HEADER при скролле ( его background )
    useEffect(() => {
        const scrollForHeader = (): void => {
            if (window.scrollY > 0) {
                if (previousScrollCoordinate > window.scrollY) {
                    setPreviousScrollCoordinate(window.scrollY)
                    setIsScrollingDown(false);
                    setIsBackgroundHeader(true)
                } else {
                    setPreviousScrollCoordinate(window.scrollY)
                    setIsScrollingDown(true);
                }
            } else {
                setPreviousScrollCoordinate(window.scrollY)
                setIsBackgroundHeader(false)
                setIsScrollingDown(false)
            }
        }
        document.addEventListener('scroll', scrollForHeader)
    }, [previousScrollCoordinate])


    return (
        <header className={s.header} style={{
            background: `${isBackgroundHeader ? "#1F1F1F" : "transparent"}`,
            transform: `translateY(${isScrollingDown ? "-100%" : "0"})`
        }}>
            <div className={s.header__content}>
                {/* ЛЕВАЯ ЧАСТЬ HEADERA С ЛОГОТИПОМ*/}
                <div className={s.header__logo}>
                    <div className={s["header__logo-wrapper"]}>
                        <LogoBig/>
                    </div>
                </div>
                {/* СРЕДНЯЯ ЧАСТЬ HEADERA */}
                <div className={s["header__nav-and-search"]}>
                    {
                        search
                            ? (
                                <div className={s.header__search}>
                                    <input type="text" placeholder={"Фильмы и сериалы"}/>
                                    <div className={s["header__search-results-wrapper"]}>
                                        <p>Здесь пока ничего нет.....</p>
                                    </div>
                                </div>
                            )
                            : (
                                <nav className={s.header__nav}>
                                    <div className={s["header__nav-links"]}>
                                        <NavLink to='/favourites'
                                                 className={({isActive}) => isActive ? [s["header__nav-link"], s["header__nav-link-active"]].join(" ") : s["header__nav-link"]}>Избранное</NavLink>
                                        <NavLink to='/shop'
                                                 className={({isActive}) => isActive ? [s["header__nav-link"], s["header__nav-link-active"]].join(" ") : s["header__nav-link"]}>Магазин</NavLink>
                                        <NavLink to='/favourites'
                                                 className={({isActive}) => isActive ? [s["header__nav-link"], s["header__nav-link-active"]].join(" ") : s["header__nav-link"]}>История</NavLink>
                                    </div>
                                </nav>
                            )
                    }
                    {search && <span className="material-symbols-rounded"
                                     onClick={() => setSearch(prev => !prev)}>close</span>}
                    {!search && <span className="material-symbols-rounded"
                                      onClick={() => setSearch(prev => !prev)}>search</span>}
                </div>
                {/* ПРАВАЯ ЧАСТЬ HEADERA - USER AND BURGER */}
                <div className={s.header__user}>
                    <div className={s["header__user-avatar"]}>
                        <span className="material-symbols-rounded">person</span>
                    </div>
                </div>
                {/* BURGER */}
                <div className={s.header__burger}>
                    <div className={s["header__burger-icon"]}>
                        <span className="material-symbols-rounded" onClick={() => setBurger(true)}>menu</span>
                    </div>
                    {
                        burger && (
                            <div className={s["header__burger-menu"]}>
                                <div className={s["burger-menu__close-icon"]}>
                                    <span className="material-symbols-rounded" onClick={() => setBurger(false)}>close</span>
                                </div>
                                {/* ВЕРХНЯЯ ЧАСТЬ БУРГЕРА - ДАННЫЕ О ПОЛЬЗОВАТЕЛЕ ( ЕМАИЛ и ИМЯ АККАУНТА )  */}
                                <div className={s["burger-menu__user-details"]}>
                                    {/*   text username and email*/}
                                    <div className={s["user-details__left"]}>
                                        <div className={s["user-details__account-name"]}>Larikova1239</div>
                                        <div className={s["user-details__email-address"]}>kozel873@yandex.ru</div>
                                    </div>
                                    {/*   text username and email*/}

                                    {/*  account image */}
                                    <div className={s["user-details__right"]}>
                                        <div className={s["user-details__img-background"]}>
                                            <span className="material-symbols-rounded">person</span>
                                        </div>
                                    </div>
                                    {/*  account image */}

                                </div>
                                {/* СРЕДНЯЯ ЧАСТЬ БУРГЕРА - ССЫЛКИ НА РАЗНЫЕ КАТЕГОРИИ  */}

                                {/* ----------------------------------------------------   */}
                                <div className={s["burger-menu__links"]}>
                                    <div className={s["burger-menu__link"]}><Link to="/">Магазин</Link></div>
                                    <div className={s["burger-menu__link"]}><Link to="/">История просмотров</Link></div>
                                    <div className={s["burger-menu__link"]}><Link to="/">Избранное</Link></div>
                                    <div className={s["burger-menu__link"]}><Link to="/">Буду смотреть</Link></div>

                                </div>
                                {/* ----------------------------------------------------   */}
                                <div className={s["burger-menu__links"]}>
                                    <div className={s["burger-menu__link"]}><Link to="/">Подробнее о приложении</Link></div>
                                    <div className={s["burger-menu__link"]}><Link to="/">Настройки</Link></div>
                                    <div className={s["burger-menu__link"]}><Link to="/">Служба поддержки</Link></div>
                                    <div className={s["burger-menu__link"]}><Link to="/">Выйти</Link></div>
                                </div>
                                {/* ----------------------------------------------------   */}
                                <div className={s["burger-menu__add-new-account"]}>
                                    <div className={s["add-new-account__icon-background"]}>
                                        <span className="material-symbols-rounded">add</span>
                                    </div>
                                    <div className={s["add-new-account__add-btn"]}>
                                        Добавить пользователя
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div>
        </header>
    );
}

export default Header;