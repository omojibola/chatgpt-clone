export const truncate = (str: string) => {
  return str?.length > 20 ? `${str?.substring(0, 20)}...` : str;
};

function generateRandomNumber() {
  return Math.floor(Math.random() * 9000000000) + 1000000000;
}

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

export function generateRandomNumberWithDate() {
  const randomNumber = generateRandomNumber();
  const currentDate = getCurrentDate();
  const randomWithDate = `${randomNumber}${currentDate}`;
  return randomWithDate;
}
