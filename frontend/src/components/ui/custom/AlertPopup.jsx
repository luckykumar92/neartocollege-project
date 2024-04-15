import React from "react";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";

const AlertPopup = ({ open, onOpenChange, className, children }) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogPortal>
        <AlertDialogContent className={className}>
          <div>{children}</div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

export default AlertPopup;
