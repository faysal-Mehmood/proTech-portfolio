"use client";
import * as React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ServiceDetail from "./serviceDetail";
import ProjectDetail from "./projectDetail";
export default function DialogueModel(props) {
  const { handleClose, openPopup } = props;
  const isOpen = openPopup === "service" || openPopup === "project";
  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Set backup account</DialogTitle>
      {openPopup === "service" && <ServiceDetail />}
      {openPopup === "project" && <ProjectDetail />}
    </Dialog>
  );
}
