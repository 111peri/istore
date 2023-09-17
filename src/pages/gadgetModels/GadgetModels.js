import React from "react";
import styles from './GadgetModels.module.css';



export function GadgetModels(props) {
const gadgetsArray = [
    {
        name: 'MARQ® Aviator (Gen 2)',
        text: 'Выбрать >',
        link: 'https://www.istore.kg/catalog/product/marq-aviator-gen-2?&color_hex=93&edition=14&limit=0',
        img: 'https://www.istore.kg/media/products/marq-golfer-gen-2.webp'
    },
    {
        name: 'MARQ® Captain (Gen 2)',
        text: 'Выбрать >',
        link: 'https://www.istore.kg/catalog/product/marq-captain-gen-2?&color_hex=93&edition=13&limit=0',
        img: 'https://www.istore.kg/media/products/marq-captain-gen-2.webp'
    },
    {
        name: 'MARQ® Golfer (Gen 2)',
        text: 'Выбрать >',
        link: 'https://www.istore.kg/catalog/product/marq-golfer-gen-2?&color_hex=93&edition=12&limit=0',
        img: 'https://www.istore.kg/media/products/marq-aviator-gen-2.webp'
    }
];


const gadgetList = gadgetsArray.map((item, index) => (
    <div key={index} className={styles.gadgetModelContainer}>
        <ul >
            <li className={styles.gadgetImg}>
                <h5>{item.name}</h5>
                <img src={item.img} alt={item.name} className={styles.gadgetImage} />
                <p>
                    <a href={item.link}>{item.text}</a>
                </p>
            </li>
        </ul>
    </div>
));

return (
    <div className={styles.gadgetModelContainer}>
        {gadgetList}
    </div>

)
}



