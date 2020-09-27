const yearsDifference = ({ start, end }) => {
  const date1 = new Date(start);
  const date2 = end ? new Date(end) : new Date();

  return date2.getFullYear() - date1.getFullYear();
};

export default yearsDifference;
