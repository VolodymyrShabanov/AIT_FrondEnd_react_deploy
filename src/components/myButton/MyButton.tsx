import { FC } from "react";
// 4k (gzipped: 1.8k)
import style from "./MyButton.module.css";

interface IBtnProps {
  text: string;
  onClick?: () => void;

}

const MyButton: FC<IBtnProps> = ({text, onClick}) => {
  return (
    <>
      <button onClick = {onClick} className={`${style.active} ${style.button}`}>{text}</button>
    </>
  );
};

export default MyButton;
