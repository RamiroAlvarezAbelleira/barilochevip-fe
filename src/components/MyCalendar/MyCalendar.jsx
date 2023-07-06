import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import "./MyCalendar.css"
import { useEffect, useState } from 'react';
import arrangeBookings from '../../helpers/arrangeBookings';

const MyCalendar = ({bookings, stock_total}) => {
    const localizer = momentLocalizer(moment);
    const [events, setEvents] = useState([]);

    useEffect(() => {
      moment.locale('es')
      const handleBookings = async () => {
        const arrangedBookings = arrangeBookings(bookings)
        const newEvents = arrangedBookings.map((booking) => {
          return {title: booking.quantity === stock_total ? 'Sin Stock!' :`${stock_total - booking.quantity} Disponibles`, 
                  start: booking.start_date, 
                  end: booking.end_date,}
        })
        setEvents(newEvents)
      }
      handleBookings()
    },[bookings, events, stock_total])

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