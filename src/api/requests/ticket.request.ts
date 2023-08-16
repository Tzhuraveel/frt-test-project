import axios from "axios";

import { urls } from "../endpoints";

export const ticketRequest = {
  getAllSeatStatuses: () => axios.get(urls.seatStatuses),
  getAllSeats: (eventId: number) => axios.get(urls.seats(eventId)),
  getAllPrices: (eventId: number) => axios.get(urls.prices(eventId)),
  getAllSections: (seatMapId: number) => axios.get(urls.sections(seatMapId)),
  getEventInfo: (eventId: number) => axios.get(urls.eventInfo(eventId)),
};
