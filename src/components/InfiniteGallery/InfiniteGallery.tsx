import React, {FC} from 'react';
import s from './InfiniteGallery.module.scss'

const InfiniteGallery: FC = (props) => {

    // Статичные изображения для вывода картинок *
    const images = [
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e9d8d6688edb84e60bf981e_5e9d91bf3baf6874e893c7b6/scale_1200"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e9d8d6688edb84e60bf981e_5e9d91bf3baf6874e893c7b6/scale_1200"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e9d8d6688edb84e60bf981e_5e9d91bf3baf6874e893c7b6/scale_1200"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1360848/pub_5fc77d3cf29188080e711d78_5fc77dfea093e949028f6bb0/scale_1200"],
        ["https://i.ytimg.com/vi/oQcCHYkhefg/maxresdefault.jpg",
            "https://all4desktop.com/data_images/1280%20x%20960/4202950-avatar-imax-poster-normal5.4.jpg"],
        ["https://trueposters.ru/pictures/product/big/8196_big.jpg",
            "https://i.ytimg.com/vi/qNzrJ9suMes/maxresdefault.jpg"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e9d8d6688edb84e60bf981e_5e9d91bf3baf6874e893c7b6/scale_1200"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1360848/pub_5fc77d3cf29188080e711d78_5fc77dfea093e949028f6bb0/scale_1200"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e9d8d6688edb84e60bf981e_5e9d91bf3baf6874e893c7b6/scale_1200"],
        ["https://million-wallpapers.ru/wallpapers/1/37/512841423961643/troe-na-kartinke-odin-v-maske.jpg",
            "https://avatars.mds.yandex.net/get-zen_doc/1360848/pub_5fc77d3cf29188080e711d78_5fc77dfea093e949028f6bb0/scale_1200"],
        ["https://i.ytimg.com/vi/oQcCHYkhefg/maxresdefault.jpg",
            "https://all4desktop.com/data_images/1280%20x%20960/4202950-avatar-imax-poster-normal5.4.jpg"]

    ]
    return (
        <div className={s["infinite-gallery"]}>
            {/* ВЫВОД ОБЬЕДЕНЕННАЯ ГРУППА ЭЛЕМЕНТОВ СВЕРХУ И СНИЗУ ( 2шт )*/ }
            {
                images.map( ( [topImage,bottomImage] ) =>(
                    <div className={s["infinite-gallery__poster-group"]}>
                        <div className={s["poster-group__top-image"]}>
                            <img src={topImage} alt=""/>
                        </div>
                        <div className={s["poster-group__bottom-image"]}>
                            <img src={bottomImage} alt=""/>
                        </div>
                    </div>
                ))
            }
            {/*   ОБЬЕДЕНЕННАЯ ГРУППА ЭЛЕМЕНТОВ СВЕРХУ И СНИЗУ ( 2шт )*/ }
        </div>
    );
}

export default InfiniteGallery;