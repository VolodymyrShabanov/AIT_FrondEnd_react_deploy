import { FC } from "react";
import styles from "./Error.module.css"

const Error: FC = () => {
  return (
    <div>
      <h1 className={styles.h1}>Извините, такой страницы не существует!</h1>
    </div>
  );
};

export default Error;


