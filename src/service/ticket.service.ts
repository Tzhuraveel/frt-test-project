import { IPrice, ISeat, ISeatStatus, ISection, ITicket } from "../interfaces";
import { TicketPort } from "../ports";

export class TicketService {
  constructor(private readonly ticketPort: TicketPort) {}

  public async getAllAvailableTickets(eventId: number) {
    try {
      const { BestSeatMap } = await this.ticketPort.getEventInfo(eventId);

      const [seats, seatStatuses, prices, sections] = await Promise.all([
        this.ticketPort.getAllSeats(eventId),
        this.ticketPort.getAllSeatStatuses(),
        this.ticketPort.getAllPrices(eventId),
        this.ticketPort.getAllSections(BestSeatMap.Id),
      ]);

      const statusIdAvailable = this.getStatusIdAvailable(seatStatuses);

      const filteredSeats = this.filterAvailableSeats(seats, statusIdAvailable);

      const filteredPrices = this.filterNeededPrices(prices);

      return filteredSeats.map((seat): ITicket => {
        const price = this.findItemByIds<IPrice>(
          filteredPrices,
          "ZoneId",
          seat.ZoneId,
        );

        const section = this.findItemByIds<ISection>(
          sections,
          "Id",
          seat.SectionId,
        );

        return {
          section: section.Description,
          row: seat.SeatRow,
          seatNumber: seat.SeatNumber,
          price: price.Price,
        };
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
  private getStatusIdAvailable(seatStatus: ISeatStatus[]): number {
    return seatStatus.find((value) => value.Description === "Available").Id;
  }

  private filterAvailableSeats(
    seats: ISeat[],
    statusIdAvailable: number,
  ): ISeat[] {
    return seats.filter((seat) => {
      return seat.SeatStatusId === statusIdAvailable;
    });
  }

  private filterNeededPrices(prices: IPrice[]): IPrice[] {
    return prices.filter((price) => price.PerformanceId === 0);
  }

  private findItemByIds<T>(
    items: T[],
    nameIdFieldItem: string,
    targetId: number,
  ): T {
    return items.find((item) => item[nameIdFieldItem] === targetId);
  }
}
