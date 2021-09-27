import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  let [solutionFlag, setSolutionFlag] = useState(false);
  let getSolutionClass = () => {
    return solutionFlag ? styles.show : "";
  };
  let loadNextQn = () => {
    //TODO: Do work here
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.qn + " " + styles.bar}>
          <div className={styles.qn_no}>Qn 1</div>
          Two identical cube shaped dice each with faces numbered 1 to 6 are
          rolled simultaneously. The probability that an even number is rolled
          out on each dice is
        </div>
        <div className={styles.options}>
          <ol>
            <li>
              <input type="radio" name="qn1" id="option1" />
              <label htmlFor="option1">1/36</label>
            </li>
            <li>
              <input type="radio" name="qn1" id="option2" />
              <label htmlFor="option2">1/12</label>
            </li>
            <li>
              <input type="radio" name="qn1" id="option3" />
              <label htmlFor="option3">1/8</label>
            </li>
            <li>
              <input type="radio" name="qn1" id="option4" />
              <label htmlFor="option4">1/4</label>
            </li>
          </ol>
        </div>
        <div className={styles.solution}>
          <div className={styles.btn_bar}>
            <div
              className={
                styles.show_solution + " " + styles.bar + " " + styles.btn
              }
              onClick={() => setSolutionFlag(!solutionFlag)}
            >
              {solutionFlag ? "Hide" : "Show"} Solution
            </div>
            <div
              className={
                styles.show_solution + " " + styles.bar + " " + styles.btn
              }
              onClick={() => loadNextQn()}
            >
              Next
            </div>
          </div>
          <div className={styles.solution_value + " " + getSolutionClass()}>
            Probability of getting even number on dice = 3/6 = 1/2. Therefore
            two dice are rolled simultaneously. Hence required probability =
            1/2*1/2 = 1/4
          </div>
        </div>
      </main>
    </div>
  );
}
