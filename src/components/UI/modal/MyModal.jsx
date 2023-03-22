import React from "react";
import c1 from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [c1.myModal];
  if (visible) {
    rootClasses.push(c1.active);
    console.log(rootClasses);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={c1.myModalContent}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
