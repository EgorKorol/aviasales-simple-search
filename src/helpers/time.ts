export const durationConvert = (mins: number): string => {
  const hours = (mins / 60);
  const floorHours = Math.floor(hours);
  const minutes = (hours - floorHours) * 60;
  const roundMinutes = Math.round(minutes);

  return `${floorHours}ч ${roundMinutes}м`;
};

export const timeConvert = (secondsFrom: number, secondsTo: number): string => {
  const dateFrom = new Date(secondsFrom);
  const timeFrom = dateFrom.toTimeString().split(' ')[0].split(':').splice(0, 2).join(':');
  const dateTo = new Date(secondsFrom + secondsTo);
  const timeTo = dateTo.toTimeString().split(' ')[0].split(':').splice(0, 2).join(':');

  return `${timeFrom} – ${timeTo}`;
};
