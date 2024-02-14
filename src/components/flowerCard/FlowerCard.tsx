// В компоненте Parent создайте объект цветок с полями:

import { FC } from "react";

// цвет
// название
// семейство
// цена

// Создайте компонент FlowerCard - карточка цветка.

// Передайте объект-цветок в компонент пропсом.

// Пусть этот компонент отображает информацию о объекте-цветке, который передали в него пропсом.

// Пусть шрифт информации о цвете будет сделан с background-color соответствующего цвета.

interface IProps {
  flower: {
    color: string;
    name: string;
    family: string;
    price: number;
  };
}

const FlowerCard: FC <IProps> = ({flower}) => {
    return(
        <div style={{backgroundColor:flower.color}}>
        <h1>{flower.name}</h1>
        <p>{flower.name}</p>
        <p>{flower.family}</p>
        </div>
    ) 
};

export default FlowerCard;
