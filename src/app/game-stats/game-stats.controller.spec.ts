import { TestingModule } from '@nestjs/testing';
import { createTestingApp } from '../../../test/utils/create-app';
import { GameStatsController } from './game-stats.controller';
import { GameStatsService } from './game-stats.service';

describe('GameStatsController', () => {
  let gameStatsController: GameStatsController

  beforeEach(async () => {
    const app: TestingModule = await createTestingApp([GameStatsController], [GameStatsService])
      .compile()

      gameStatsController = app.get<GameStatsController>(GameStatsController)
  })

  describe('currentSegment', () => {
    it('should return valid segment value', async () => {
      const response = await gameStatsController.currentSegment()

      expect(response).toHaveProperty('currentSegment')
      expect(typeof response.currentSegment).toBe('number')
    })
  })
})
