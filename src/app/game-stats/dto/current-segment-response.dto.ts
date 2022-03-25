import { ApiProperty } from '@nestjs/swagger'

export class CurrentSegmentResponseDto {
  @ApiProperty({
    name: 'currentSegment',
    description: 'Current segment of the game',
  })
  public readonly currentSegment: Number
}
