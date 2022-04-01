import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Tag } from '../entities/tag.entity';

export class CreateCandidateDto {
  @ApiProperty({ type: String, description: 'url' })
  url: string;
  @ApiProperty({ type: String, description: 'firstName' })
  firstName: string;
  @ApiProperty({ type: String, description: 'lastName' })
  lastName: string;
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'description' })
  @ApiPropertyOptional()
  description: string;
  @ApiProperty({ type: Array, description: 'tags candidate' })
  tags: [Tag];
  @ApiProperty({ type: Number, description: 'salary net requested' })
  netSalaryRequested: number;
  @ApiProperty({
    type: String,
    description: 'wanted offer',
    enum: ['CDI', 'CDD', 'Prestation'],
  })
  wantedOffer: string;
}
