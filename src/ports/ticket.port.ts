import { IEvent, IPrice, ISeat, ISeatStatus, ISection } from "../interfaces";

export interface TicketPort {
  getEventInfo(eventId: number): Promise<IEvent>;
  getAllSeats(eventId: number): Promise<ISeat[]>;
  getAllSeatStatuses(): Promise<ISeatStatus[]>;
  getAllPrices(eventId: number): Promise<IPrice[]>;
  getAllSections(seatMapId: number): Promise<ISection[]>;
}
