import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { PlayerInfoDto } from './dto/player-info.dto';
import { PlayersService } from './players.service';

@Controller('players')
@ApiTags('Players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':address')
  @ApiOperation({ description: 'Get information of player'})
  @ApiOkResponse({description: 'Fetched player info successfully.'})
  @ApiBadRequestResponse({description: 'Bad request'})
  public async show(
    @Param('address') address: string
  ): Promise<PlayerInfoDto> {
    try {
      return await this.playersService.getInfo(address)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
