import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function TodosLoading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "250px"
      }}
    >
      <CircularProgress size="6rem" />
      <p
        style={{
          marginTop: "16px",
          fontSize: "18px",
          fontWeight:'bold'
        }}
      >
        Cargando...
      </p>
    </div>
  );
}

export { TodosLoading };
