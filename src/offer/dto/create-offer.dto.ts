import { ApiProperty } from "@nestjs/swagger";

export class CreateOfferDto {
  @ApiProperty({ type: String, description: 'description' })
  public description: string;
  @ApiProperty({ type: Array, description: 'keyWord' })
  public keyWord: Array<string>;
  @ApiProperty({ type: Number, description: 'Salary' })
  public salary: number;
  @ApiProperty({ type: String, description: 'Type' })
  public type: string;
  @ApiProperty({ type: String, description: 'Status' })
  public status: string;
  @ApiProperty({ type: Boolean, description: 'IsForRecruter' })
  public isForRecruter: boolean;
}
