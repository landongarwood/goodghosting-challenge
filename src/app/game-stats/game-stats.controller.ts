import { BadRequestException, Controller, Get, Param, Req } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentSegmentResponseDto } from './dto/current-segment-response.dto';
import { GameStatsService } from './game-stats.service';

@Controller('stats')
@ApiTags('Game Stats')
export class GameStatsController {
  constructor(private readonly gameStatsService: GameStatsService) {}

  @Get('current-segment')
  @ApiOperation({ description: 'Get current game segment'})
  @ApiOkResponse({description: 'Fetched current segment successfully.'})
  @ApiBadRequestResponse({description: 'Bad request'})
  public async currentSegment(
  ): Promise<CurrentSegmentResponseDto> {
    try {
      return {
        'currentSegment': await this.gameStatsService.getCurrentSegment()
      }
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
