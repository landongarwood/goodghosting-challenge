import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseService } from '../../common/base.service';

@Injectable()
export class PlayersService extends BaseService {
  constructor(
    config: ConfigService,
  ) {
    super(config);
  }

  async getInfo(address: string): Promise<any> {

    return await this.ggContract.methods
      .players(address)
      .call();
  }
}
