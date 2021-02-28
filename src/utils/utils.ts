import { toast } from "react-toastify";

export const setTokenLocalStorage = () => {
  localStorage.setItem(
    "jwttoken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
};

export const removeTokenLocalStorage = () => {
  localStorage.removeItem("jwttoken");
};

export const notifySuccess = (msg: string) => toast.success(`✔️ ${msg}`);
export const notifyError = (msg: string) => toast.error(`❌ ${msg}`);
export const notifyInfo = (msg: string) => toast.info(`🔥 ${msg}`);
