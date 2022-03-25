import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseService } from 'src/common/base.service';

@Injectable()
export class GameStatsService extends BaseService {
  constructor(
    config: ConfigService,
  ) {
    super(config);
  }

  async getCurrentSegment(): Promise<Number> {
    const [firstSegmentStart, segmentLength] = await Promise.all([
      this.ggContract.methods.firstSegmentStart().call(),
      this.ggContract.methods.segmentLength().call()
    ]);

    return Math.floor(((new Date).getTime() - firstSegmentStart) / segmentLength)
  }
}
