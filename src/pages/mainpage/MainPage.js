import React from 'react';
import {PhoneModels} from "../phoneModels/PhoneModels";
import {GadgetModels} from "../gadgetModels/GadgetModels"

export function MainPage() {
    const itemsArray = [
        {
            title: 'Выберите свой iPhone',
            subtitle: 'Сравните все модели iPhone',
            content: 'больше моделей',
            link: 'https://www.istore.kg/catalog/iphone'
        },

    ];

    const itemsArray1 = [
        {
            title: 'Гаджеты',
            subtitle: 'Всегда рядом',
            content: 'все гаджеты',
            link: '\'https://www.istore.kg/catalog/gadgets\''
        }
        ,
        ];


        const itemsList = itemsArray.map((item, index) => (
            <div key={index}>
                <h1>{item.title}</h1>
                <p>{item.subtitle} </p>
                <p>
                    <a href={item.link}>{item.content} </a>


                </p>

            </div>
        ));
        const itemsList1 = itemsArray1.map((item, index) => (
            <div key={index}>
                <h1>{item.title}</h1>
                <p>{item.subtitle} </p>
                <p>
                    <a href={item.link}>{item.content} </a>


                </p>

            </div>
        ));

        return (
            <div>
                {itemsList}
                <PhoneModels/>
                {itemsList1}
                <GadgetModels/>



            </div>
        )
    }
