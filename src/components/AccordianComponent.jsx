import React from "react";
import data from "./Data";
import styles from "./AccordianComponent.module.css";
import { useState } from "react";
// import styles from "./AccordianComponent.modules.css";
const AccordianComponent = () => {
  const [selected, setSelected] = useState(null);
  const [multiselection, setMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function singleSelection(currentIndex) {
    setSelected(selected == currentIndex ? null : currentIndex);
  }
  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId == -1) cpyMultiple.push(currentId);
    else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }
  function toggleSelection() {
    setMultiselection((prev) => !prev);
    setMultiple([]);
    selected(null);
    console.log(multiselection);
  }
  return (
    <div className={styles.accordian}>
      <div className={styles.multiselection} onClick={toggleSelection}>
        Enable MultiSelection
      </div>
      {data && data.length
        ? data.map((value, key) => (
            <div
              className={styles.center_div}
              onClick={
                multiselection
                  ? () => handleMultiSelection(value.id)
                  : () => singleSelection(value.id)
              }
              key={key}
            >
              <div className={styles.question}>
                {value.question}
                <span>
                  {multiselection
                    ? multiple.indexOf(value.id) != -1
                      ? "-"
                      : "+"
                    : selected == value.id
                    ? "-"
                    : "+"}{" "}
                </span>
              </div>

              {multiselection
                ? multiple.indexOf(value.id) !== -1 && (
                    <div className={styles.answer}>{value.answer}</div>
                  )
                : selected == value.id && (
                    <div className={styles.answer}>{value.answer}</div>
                  )}
            </div>
          ))
        : null}
    </div>
  );
};

export default AccordianComponent;
