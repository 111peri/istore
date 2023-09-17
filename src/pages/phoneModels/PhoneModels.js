import React from 'react';
import styles from './PhoneModels.module.css';

export function PhoneModels(props) {
    const phoneArray = [
        {
            name: 'iPhone 15 Pro Max',
            text: 'Выбрать',
            link: 'https://www.istore.kg/catalog/product/iphone-15-pro-max?&capacity=6&color_hex=346&pattern=92&limit=0',
            info: '0 сом',
            price: 'от $0',
            image: 'https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_Pkg9yKl.webp'
        },
        {
            name: 'iPhone 15 Pro',
            text: 'Выбрать',
            link: 'https://www.istore.kg/catalog/product/iphone-15-pro-max?&capacity=6&color_hex=346&pattern=92&limit=0',
            info: '0 сом',
            price: 'от $0',
            image: 'https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.webp'
        },
        {
            name: 'iPhone 14 Pro Max',
            text: 'Выбрать',
            link: 'https://www.istore.kg/catalog/product/iphone-15-pro-max?&capacity=6&color_hex=346&pattern=92&limit=0',
            info: '102 120 сом',
            price: 'от $1150,0',
            image: 'https://www.istore.kg/media/products/iphone-14-pro-finish-select-202209-6-7inch-spaceblack_KVl27v8.webp'
        },
        {
            name: 'iPhone 14 Pro',
            text: 'Выбрать',
            link: 'https://www.istore.kg/catalog/product/iphone-15-pro-max?&capacity=6&color_hex=346&pattern=92&limit=0',
            info: '92 352 сом',
            price: 'от $1040,0',
            image: 'https://www.istore.kg/media/products/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_HXToe1H.webp'
        }
    ];


    const phoneList = phoneArray.map((item, index) => (
        <div key={index} className={styles.phoneModel}>
            <img src={item.image} alt={item.name} className={styles.phoneImage} />
            <h5>{item.name}</h5>
            <p>
                <a href={item.link}>{item.text}</a>
            </p>
            <ul className={styles.phonePrice}>
                <li>{item.info}</li>
                <li>{item.price}</li>
            </ul>
        </div>
    ));



    return (
            <div className={styles.phoneModelContainer}>
                {phoneList}
            </div>


    );
}

