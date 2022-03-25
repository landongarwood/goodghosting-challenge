import { BadRequestException, Controller, Get, Param, Req } from '@nestjs/common';
import { GameStatsService } from './game-stats.service';

@Controller('stats')
export class GameStatsController {
  constructor(private readonly gameStatsService: GameStatsService) {}

  @Get('current-segment')
  public async currentSegment(
  ): Promise<Number> {
    try {
      return await this.gameStatsService.getCurrentSegment()
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
