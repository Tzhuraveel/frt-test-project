import { appConfig } from "../config/app";

const rest_proxy = "rest-proxy/";
const base_url = appConfig.LAPHIL_API_URL;

export const urls = {
  seatStatuses: `${base_url}/${rest_proxy}ReferenceData/SeatStatuses`,
  seats: (eventId: number) =>
    `${base_url}/${rest_proxy}TXN/Packages/${eventId}/Seats?constituentId=0&modeOfSaleId=26&packageId=${eventId}`,
  prices: (eventId: number) =>
    `${base_url}/${rest_proxy}TXN/Packages/${eventId}/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=26&priceTypeId=&`,
  sections: (setMapId: number) =>
    `${base_url}/${rest_proxy}ReferenceData/Sections?seatMapId=${setMapId}`,
  eventInfo: (eventId: number) =>
    `${base_url}/${rest_proxy}TXN/Packages/${eventId}`,
};
