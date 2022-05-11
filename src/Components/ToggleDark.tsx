import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
import styles from "./ToggleDark.module.css";

function ToggleDark(){
  const setDark = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = ()=> setDark(prev => !prev);
  return <>
    <div className={styles.wrap}>
      <input type="checkbox" className={styles.checkbox} id="checkbox" />
      <label htmlFor="checkbox" className={styles.label} onClick={toggleDarkAtom}>
        <i className={`fas fa-moon ${styles.moon}`}></i>
        <i className={`fas fa-sun ${styles.sun}`}></i>
        <div className={styles.ball} />
      </label>
    </div>
  </>;
}

export default ToggleDark;