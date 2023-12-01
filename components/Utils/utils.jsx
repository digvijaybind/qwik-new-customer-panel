import styles from "./Utils.module.css"

export const Shadow = ({classname,children}) => {
  return <div className={`${styles.Shadow} ${classname}`}>{children}</div>;
};

