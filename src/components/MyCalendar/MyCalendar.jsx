import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import "./MyCalendar.css"
import { useEffect } from 'react';

const MyCalendar = () => {
    const localizer = momentLocalizer(moment);
    const events = [
        {
          title: 'Reserva agotada!',
          start: moment().toDate(),
          end: moment().add(1, 'hours').toDate(),
        },
        // Add more events as needed
      ];

      useEffect(() => {
        moment.locale('es')
      },[])

  return (
    <Calendar
      localizer={localizer}
      events={events}
      views={['month']}
      startAccessor="start"
      endAccessor="end"
      style={{height: 500}}
    />
  )
}
export default MyCalendar