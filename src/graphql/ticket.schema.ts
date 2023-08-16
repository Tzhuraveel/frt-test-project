import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Ticket {
    section: String!
    row: String!
    seatNumber: String!
    price: Float!
  }

  type Query {
    getAllAvailableTickets(eventId: Int!): [Ticket]
  }
`);
