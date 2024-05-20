import { useMemo } from 'react';

export const useTaskProgress = (tasks) => {

  let today = new Date().toISOString().split('T')[0];
  console.log(today);
  const tasksForToday = tasks.filter(task => task.start.split('T')[0] === today);
  const { barWidth, loadText, loadColor } = useMemo(() => {
    let finalPercentage = 0;
    if (tasksForToday.length >= 8) {
      finalPercentage = 135;
    } else {
      let percentage = tasksForToday.length / 8;
      let difference = 135 - (-45);
      let diffPercentage = difference * percentage;
      finalPercentage = -45 + diffPercentage;
    }

    const barWidth = `${finalPercentage}deg`;
    let loadText = "";
    let loadColor = "";

    if (finalPercentage <= 15) {
      loadText = "Bajo 😂";
      loadColor = "bg-green-500";
    } else if (finalPercentage > 15 && finalPercentage <= 75) {
      loadText = "Medio 😐";
      loadColor = "bg-yellow-500";
    } else if (finalPercentage > 75) {
      loadText = "Alto 💀";
      loadColor = "bg-red-500";
    }

    return { barWidth, loadText, loadColor };
  }, [tasksForToday]);

  return { barWidth, loadText, loadColor };
};

