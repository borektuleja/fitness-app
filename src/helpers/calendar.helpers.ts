export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}
export function getFirstDayInMonth(year: number, month: number) {
  return new Date(year, month - 1, 1);
}

export function getDateSlug(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function makeYearTransition(year: number, month: number) {
  if (month < 1) {
    return { nextYear: year - 1, nextMonth: 12 };
  }

  if (month > 12) {
    return { nextYear: year + 1, nextMonth: 1 };
  }

  return { nextYear: year, nextMonth: month };
}
