import { ApiProperty } from '@nestjs/swagger';

export class CreateEnterpriseDto {
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiProperty({ type: Number, description: 'siren' })
  siren: number;
  @ApiProperty({ type: String, description: 'description' })
  description: string;
  @ApiProperty({ type: String, description: 'logo url' })
  logoUrl = 'https://picsum.photos/200/300';
}
