import { BadRequestException, Controller, Get, Param, Req } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':address')
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
