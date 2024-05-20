export const useDateWeekRange = () => {
    const today = new Date(); // Obtener la fecha actual
    const firstDay = new Date(today); // Crear una copia de la fecha actual

    // Restar días para llegar al primer día de la semana (domingo)
    firstDay.setDate(today.getDate() - today.getDay());

    const lastDay = new Date(firstDay); // Crear una copia del primer día de la semana

    // Agregar 6 días para obtener el último día de la semana (sábado)
    lastDay.setDate(firstDay.getDate() + 6);

    return { firstDay, lastDay };
}