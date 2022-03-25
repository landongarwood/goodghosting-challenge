import { BadRequestException, Controller, Get, Param, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PlayersService } from './players.service';

@Controller('players')
@ApiTags('Players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':address')
  @ApiOperation({ description: 'Get information of player'})
  public async show(
    @Param('address') address: string
  ): Promise<any> {
    try {
      return await this.playersService.getInfo(address)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
