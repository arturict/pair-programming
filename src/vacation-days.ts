export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

export function calculateProRataVacationDays(employment: Employment): number {
  // TODO: calculate pro rata (consider workload and days worked)
  let vacationDays = 0;
  vacationDays = employment.vacationDays * (calculateDaysBetweenTwoDates(employment.startDate, employment.untilDate))/365 * (employment.percentage /100)
    return parseFloat(vacationDays.toFixed(2));
}
//source: https://stackoverflow.com/questions/43735678/typescript-get-difference-between-two-dates-in-days
function calculateDaysBetweenTwoDates(startDate: Date, enddate: Date): number{
  let diff = Math.abs(startDate.getTime() - enddate.getTime());
  let diffDays = Math.ceil(diff / (1000 * 3600 * 24))
  return diffDays;

}