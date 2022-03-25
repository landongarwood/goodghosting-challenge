import { ApiProperty } from '@nestjs/swagger'

export class PlayerInfoDto {
  @ApiProperty({
    name: 'addr',
    description: 'Address of the player',
  })
  public readonly addr: string

  @ApiProperty({
    name: 'withdrawn',
    description: 'If player withdrawn',
  })
  public readonly withdrawn: boolean

  @ApiProperty({
    name: 'canRejoin',
    description: 'If player can rejoin',
  })
  public readonly canRejoin: boolean

  @ApiProperty({
    name: 'mostRecentSegmentPaid',
    description: 'Most recent segment paid',
  })
  public readonly mostRecentSegmentPaid: string

  @ApiProperty({
    name: 'amountPaid',
    description: 'Amount paid',
  })
  public readonly amountPaid: string
}
