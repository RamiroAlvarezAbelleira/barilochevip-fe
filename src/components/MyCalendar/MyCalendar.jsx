import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import "./MyCalendar.css"
import { useEffect } from 'react';

const MyCalendar = ({bookings, stock_total}) => {
    const localizer = momentLocalizer(moment);
    const events = bookings.map((booking) => {
      return {title: `${stock_total - 1} Disponibles`, start: booking.start_date, end: booking.end_date,}
    })

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