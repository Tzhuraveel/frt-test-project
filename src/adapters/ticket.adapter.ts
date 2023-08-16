import { ticketRequest } from "../api/requests";
import { IEvent, IPrice, ISeat, ISeatStatus, ISection } from "../interfaces";
import { TicketPort } from "../ports";

export class TicketAdapter implements TicketPort {
  public async getEventInfo(eventId: number): Promise<IEvent> {
    const event = (await ticketRequest.getEventInfo(eventId)).data;

    if (event.length === 0) throw new Error("Event not found");

    return event;
  }

  public async getAllSeats(eventId: number): Promise<ISeat[]> {
    return (await ticketRequest.getAllSeats(eventId)).data;
  }
  public async getAllSections(seatMapId: number): Promise<ISection[]> {
    return (await ticketRequest.getAllSections(seatMapId)).data;
  }
  public async getAllPrices(eventId: number): Promise<IPrice[]> {
    return (await ticketRequest.getAllPrices(eventId)).data;
  }
  public async getAllSeatStatuses(): Promise<ISeatStatus[]> {
    return (await ticketRequest.getAllSeatStatuses()).data;
  }
}
