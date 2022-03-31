export class CreateOfferDto {
  public description: string;
  public keyWord: Array<string>;
  public salary: number;
  public type: string;
  public status: string;
  public isForRecruter: boolean;
}
