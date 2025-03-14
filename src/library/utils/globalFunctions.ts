import moment from "moment";
import { PixelRatio } from "react-native";
export function validateEmail(email: any) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email)) {
    return true;
  }
  return false;
}

export function validatePassword(password: string): boolean {
  const minLength = 6;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const numericRegex = /[0-9]/;

  return (
    password.length >= minLength &&
    specialCharRegex.test(password) &&
    numericRegex.test(password)
  );
}

export function getScaledFontSize(size: any) {
  return (size / PixelRatio.getFontScale()) * 1.5;
}

export function timeAgo(dateTime: any): string {
  const now = new Date().getTime();
  const diffInMs = now - new Date(dateTime).getTime();

  const minutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return "Just now";
  }
}

export function formatDateLabel(date: any) {
  const now = moment();
  const givenDate = moment(date);

  if (now.isSame(givenDate, "day")) {
    return "Today";
  } else if (now.subtract(1, "day").isSame(givenDate, "day")) {
    return "Yesterday";
  } else {
    return givenDate.format("DD MMMM");
  }
}
export function formatMonthLabel(date: any) {
  return moment(date).format("DD MMMM YY");
}

export const useSendBirdLogin = () => {

  const logintoSendBird = async (accessToken: string, userId: string) => {
    try {
      if (userId) {
        // await connect(String(userId), { accessToken });
        console.log("user connected to sendBird");
      }
    } catch (e) {
      console.log("Error user connection with SendBirdServer", e);
    }
  };

  return { logintoSendBird };
};
