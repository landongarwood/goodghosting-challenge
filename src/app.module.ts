import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { PlayersModule } from './app/players/players.module';
import { GameStatsModule } from './app/game-stats/game-stats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    PlayersModule,
    GameStatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
