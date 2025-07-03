export const dateFormate = (date) => {
  return new Date(date).toLocaleString('en-US' , {
    weekday:'short',//Shows day name in short form (e.g., Mon, Tue)
    month: 'long',//Full month name (e.g., July)
    day : 'numeric',//Day of the month as number (e.g., 3)
    hour : 'numeric',//	Hour with AM/PM
    minute:'numeric'//Minutes (e.g., 30)
  })
}