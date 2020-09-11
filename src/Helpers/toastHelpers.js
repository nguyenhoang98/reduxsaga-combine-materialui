import { toast } from "react-toastify";

export const toastError = (err) => {
  let message = null;
  if (typeof err === "object" && err.message) {
    ({ message } = err);
  }
  if (message !== null && typeof message !== "undefined") {
    toast.error(message);
  }
};

export const delSuccess = (text) => {
  let txt = null;
  if (text) {
    txt = text;
  }
  if (txt !== null) {
    toast.success(text);
  }
};
export const updateSuccess = (text) => {
  let txt = null;
  if (text) {
    txt = text;
  }
  if (txt !== null) {
    toast.success(text);
  }
};
