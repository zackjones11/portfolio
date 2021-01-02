const yearsDifference = ({ start, end }) => {
  const date1 = new Date(start);
  const date2 = end ? new Date(end) : new Date();

  if (date1.getMonth() > date2.getMonth()) {
    return date2.getFullYear() - date1.getFullYear() - 1;
  }

  return date2.getFullYear() - date1.getFullYear();
};

export default yearsDifference;
