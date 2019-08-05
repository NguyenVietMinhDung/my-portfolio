/* eslint-disable import/prefer-default-export */
export const getDuration = (isCurrentRole, startDate, endDate) => {
  if (isCurrentRole) {
    return `${startDate} - Present`;
  }
  return `${startDate} - ${endDate}`;
};
