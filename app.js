const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");

const Admin = require("./routes/adminRoutes");
const Booking = require("./routes/bookingRoute");
const Cart = require("./routes/cartRoutes");
const Country = require("./routes/countryRoutes");
const Address = require("./routes/customerAddressRoutes");
const CustomerCart = require("./routes/customerCardRoutes");
const Customer = require("./routes/customerRoutes");
const Deliver = require("./routes/deliveryRoutes");
const Discount = require("./routes/discountRoutes");
const Distract = require("./routes/districtRoutes");
const EventType = require("./routes/event_typeRoutes");
const Event = require("./routes/eventRoutes");
const Flat = require("./routes/flatRoutes");
const Gender = require("./routes/genderRoutes");
const Human = require("./routes/human_categoryRoutes");
const Language = require("./routes/languageRoutes");
const Payment = require("./routes/paymentRoutes");
const Region = require("./routes/regionRoutes");
const SeatType = require("./routes/seat_typeRoutes");
const Seat = require("./routes/seatRoutes");
const Sector = require("./routes/sectorRoutes");
const Status = require("./routes/statusRoutes");
const TicketType = require("./routes/ticket_typeRoutes");
const Ticket = require("./routes/ticketRoutes");
const VenuePhoto = require("./routes/venue_photoRoutes");
const Venue = require("./routes/venueRoutes");
const VenueType = require("./routes/venueTypeRoutes");

const setupSwagger = require("./swagger/swagger");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", Admin);
app.use("/api", Booking);
app.use("/api", Cart);
app.use("/api", Country);
app.use("/api", Address);
app.use("/api", CustomerCart);
app.use("/api", Customer);
app.use("/api", Deliver);
app.use("/api", Discount);
app.use("/api", Distract);
app.use("/api", EventType);
app.use("/api", Event);
app.use("/api", Flat);
app.use("/api", Gender);
app.use("/api", Human);
app.use("/api", Language);
app.use("/api", Payment);
app.use("/api", Region);
app.use("/api", SeatType);
app.use("/api", Seat);
app.use("/api", Sector);
app.use("/api", Status);
app.use("/api", TicketType);
app.use("/api", Ticket);
app.use("/api", VenuePhoto);
app.use("/api", Venue);
app.use("/api", VenueType);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
