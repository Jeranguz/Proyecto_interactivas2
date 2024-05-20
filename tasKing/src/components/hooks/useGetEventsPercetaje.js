export const useGetEventsPercetaje = (eventList, firstDay, lastDay) => {
    const eventosSemana  = eventList.filter(evento => {
        const eventoDate = new Date(evento.start); // Convertir la fecha del evento a un objeto Date
        return eventoDate >= firstDay && eventoDate <= lastDay; // Devolver true si el evento está dentro del rango de fechas de la semana
      });
      console.log('hola');
      console.log(eventosSemana);
      console.log(firstDay, lastDay)
      
      // Contar los eventos completados (status: false)
      const eventosCompletados = eventosSemana.filter(evento => !evento.status).length;
      
      // Calcular el porcentaje de eventos completados
      const totalEventosSemana = eventosSemana.length;
      const porcentajeCompletados = totalEventosSemana > 0 ? (eventosCompletados / totalEventosSemana) * 100 : 0;
      console.log(porcentajeCompletados);
      return porcentajeCompletados;
}

    