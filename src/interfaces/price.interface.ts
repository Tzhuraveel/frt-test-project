export interface IPrice {
  PerformanceId: number;
  PackageId: number;
  ZoneId: number;
  PriceTypeId: number;
  Price: number;
  Enabled: boolean;
  IsEditable: boolean;
  LayerTypeId: number | null;
  IsEditableForWeb: boolean;
  EditableMinPrice: number;
  IsBase: boolean;
  ParentPackageId: number;
  PerformancePriceTypeId: number;
  MinPrice: number;
  IsBest: boolean;
  Offer: boolean;
  ModeOfSaleOfferId: number;
}
