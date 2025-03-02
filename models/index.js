const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const CustomerAddress = require("./customer_address.model")(
  sequelize,
  Sequelize
);
const Customer = require("./customer.model")(sequelize, Sequelize);
const CustomerCard = require("./customerCard.model")(sequelize, Sequelize);
const Delivery = require("./deliver.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Distract = require("./district.model")(sequelize, Sequelize);
const EventType = require("./event_type.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Human = require("./human_category.model")(sequelize, Sequelize);
const Language = require("./language.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const SeatType = require("./seat_type.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const TicketType = require("./ticket_type.model")(sequelize, Sequelize);
const VenuePhoto = require("./venue_photo.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
const VenueType = require("./venueType.model")(sequelize, Sequelize);

Cart.associate(sequelize.models);
Booking.associate(sequelize.models);
Country.associate(sequelize.models);
CustomerAddress.associate(sequelize.models);
Customer.associate(sequelize.models);
CustomerCard.associate(sequelize.models);
Delivery.associate(sequelize.models);
Discount.associate(sequelize.models);
Distract.associate(sequelize.models);
EventType.associate(sequelize.models);
Event.associate(sequelize.models);
Gender.associate(sequelize.models);
Human.associate(sequelize.models);
Language.associate(sequelize.models);
Payment.associate(sequelize.models);
Region.associate(sequelize.models);
SeatType.associate(sequelize.models);
Seat.associate(sequelize.models);
Status.associate(sequelize.models);
TicketType.associate(sequelize.models);
Ticket.associate(sequelize.models);
VenuePhoto.associate(sequelize.models);
Venue.associate(sequelize.models);
Sector.associate(sequelize.models);
VenueType.associate(sequelize.models);

module.exports = {
  Admin,
  Booking,
  Cart,
  Country,
  CustomerAddress,
  sequelize,
  Customer,
  CustomerCard,
  Delivery,
  Discount,
  Distract,
  EventType,
  Event,
  Flat,
  Gender,
  Human,
  Language,
  Payment,
  Region,
  SeatType,
  Seat,
  Sector,
  Status,
  TicketType,
  Ticket,
  VenuePhoto,
  Venue,
  VenueType,
};
