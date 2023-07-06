

const arrangeBookings = (bookings) => {
    const arrangedBookings = [];

    bookings.forEach(booking => {
        const existingBookingIndex = arrangedBookings.findIndex(
        b => b.start_date === booking.start_date
        );

        if (existingBookingIndex !== -1) {
        arrangedBookings[existingBookingIndex].quantity += booking.quantity;
        } else {
        arrangedBookings.push({ ...booking });
        }
    });

    return arrangedBookings;
} 

export default arrangeBookings;