import React from 'react';
import {PhoneModels} from "../phoneModels/PhoneModels";


export function MainPage() {
    const itemsArray = [
        {
            title: 'Выберите свой iPhone',
            subtitle: 'Сравните все модели iPhone',
            content: 'больше моделей',
            link: 'https://www.istore.kg/catalog/iphone'
        },
        {
            title: 'Гаджеты',
            subtitle: 'Всегда рядом',
            content: 'все гаджеты',
            link: '\'https://www.istore.kg/catalog/gadgets\''
        }
    ];

    const itemsList = itemsArray.map((item, index) => (
        <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.subtitle} </p>
            <p>
                <a href={item.link}>{item.content} </a>
                <PhoneModels/>

            </p>
            <div>
                <a href={item.link}>{item.content} </a>
            </div>
        </div>
    ));

    return (
        <div>

                   {itemsList}


        </div>
    );
}
