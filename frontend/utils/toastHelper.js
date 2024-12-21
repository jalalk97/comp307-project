import { toast } from "react-toastify";

/**
 * @param {string} message
 * @param {string} variant - "info | success | warning | error | default"
 */
export function toastHelper(message, variant = "success") {
  const options = {
    position: "top-center",
    autoClose: 5000,
  };

  switch (variant) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    default:
      break;
  }
}
