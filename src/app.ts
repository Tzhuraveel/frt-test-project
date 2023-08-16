import express from "express";
import { graphqlHTTP } from "express-graphql";

import { TicketAdapter } from "./adapters";
import { appConfig } from "./config/app";
import { schema } from "./graphql";
import { TicketService } from "./service";

const app = express();

const ticketAdapter = new TicketAdapter();
const ticketService = new TicketService(ticketAdapter);

const root = {
  getAllAvailableTickets: async (data: { eventId: number }) =>
    ticketService.getAllAvailableTickets(data.eventId),
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (err) => {
      return err;
    },
  }),
);

app.listen(appConfig.APP_PORT, () => {
  console.log(`App start on port ${appConfig.APP_PORT}`);
});
