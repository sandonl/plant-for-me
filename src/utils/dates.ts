/***
 *  Utility function that calculates the difference between the current date
 *  and when the plant was last watered. If the amount of days is greater than
 *  the water frequency of the plant. We need to water the plant.
 */
export function calculateNextWater(lastWatered: Date): number {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const currentDate = new Date();
  // const testLast = new Date("2023-06-06");
  // console.log(currentDate);
  // console.log(lastWatered);

  // console.log(
  //   " Difference in days ",
  //   Math.floor((currentDate.getTime() - lastWatered.getTime()) / _MS_PER_DAY)
  // );

  return Math.floor(
    (currentDate.getTime() - lastWatered.getTime()) / _MS_PER_DAY
  );
}
