export const getDate = (params: Date): string => {
  const currentDate = new Date();
  const dataDate = new Date(params);

  if (
    dataDate.getDate() === currentDate.getDate() &&
    dataDate.getMonth() === currentDate.getMonth() &&
    dataDate.getFullYear() === currentDate.getFullYear()
  ) {
    return "Today";
  } else {
    const date = dataDate.getDate();
    const month = dataDate.getMonth();
    const year = dataDate.getFullYear();

    return `${date}/${month}/${year}`;
  }
};
