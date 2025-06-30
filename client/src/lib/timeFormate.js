const timeFormate = (minutes) => {
  const hourse = Math.floor(minutes/60);
  const minutesRemainder = minutes % 60;
  return `${hourse}h ${minutesRemainder}m`;
}

export default timeFormate;