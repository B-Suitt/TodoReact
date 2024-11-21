import React from "react";
import './TodoLoading.css';
// import CircularProgress from "@mui/material/CircularProgress";

function TodosLoading({children}) {
  return (

    <div className="skeleton-todo">
      <div className="skeleton-icon"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-action"></div>
    </div>



    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "250px"
    //   }}
    // >
    //   <CircularProgress size="6rem" />
    //   <p
    //     style={{
    //       marginTop: "16px",
    //       fontSize: "18px",
    //       fontWeight:'bold'
    //     }}
    //   >
    //     Cargando...
    //   </p>
    // </div>
  );
}

export { TodosLoading };
