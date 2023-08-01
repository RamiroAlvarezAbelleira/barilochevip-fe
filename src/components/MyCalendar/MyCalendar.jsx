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
          const isOutOfStock = booking.quantity === stock_total;
          return {
            title: isOutOfStock ? 'Sin Stock!' :`${stock_total - booking.quantity} Disponibles`, 
            start: booking.start_date, 
            end: booking.end_date,
            isOutOfStock: isOutOfStock
          }
        })
        setEvents(newEvents)
      }
      handleBookings()
    },[bookings, stock_total])

    const dayPropGetter = (date) => {
      const dayEvents = events.filter((event) =>
        moment(date).isBetween(event.start, event.end, null, '[]')
      );
  
      const hasOutOfStockEvent = dayEvents.some((event) => event.isOutOfStock);
      const className = hasOutOfStockEvent ? 'has-out-of-stock-event' : moment() < moment(date) ? 'has-available-stock-event' : '';
  
      return { className: className };
    };

    const eventStyleGetter = (event) => {
      const className = event.isOutOfStock ? "red" : "green";

      return {
        className: className
      }
    }

  return (
    <Calendar
      localizer={localizer}
      events={events}
      views={['month']}
      startAccessor="start"
      endAccessor="end"
      style={{height: 500}}
      eventPropGetter={eventStyleGetter}
      dayPropGetter={dayPropGetter}
    />
  )
}
export default MyCalendar