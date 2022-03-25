import { BadRequestException } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { createTestingApp } from '../../../test/utils/create-app';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

const playerAddress = '0xc90DF27Fd516B708C464B831Be255A807eF7B6Bd'

describe('PlayersController', () => {
  let playersController: PlayersController

  beforeEach(async () => {
    const app: TestingModule = await createTestingApp([PlayersController], [PlayersService])
      .compile()

    playersController = app.get<PlayersController>(PlayersController)
  })

  describe('show', () => {
    it('should throw BadRequestException when invalid address is given', async () => {
      await expect(
        playersController.show('111111'),
      ).rejects.toThrow(BadRequestException)
    })

    it('should return valid player info struct', async () => {
      const response = await playersController.show(playerAddress)

      const playerInfoFields = [
        'addr',
        'amountPaid',
        'canRejoin',
        'mostRecentSegmentPaid',
        'withdrawn',
      ]

      playerInfoFields.forEach((field: string) => 
        expect(response).toHaveProperty(field)
      )
    })
  })
})
