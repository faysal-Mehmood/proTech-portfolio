"use client";
import * as React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ServiceDetail from "./serviceDetail";
import ProjectDetail from "./projectDetail";
export default function DialogueModel(props) {
  const { handleClose, openPopup, dataObj } = props;
  return (
    <Dialog onClose={handleClose} open={openPopup}>
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      <button className="modal-close" onClick={handleClose}>
        <i className="fa fa-close"></i>
      </button>
      {dataObj?.dataId === "pro_tech_service" && <ServiceDetail />}
      {dataObj?.dataId === "pro_tech_project" && <ProjectDetail />}
    </Dialog>
  );
}
