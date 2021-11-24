import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NatsJetStreamContext } from '@nestjs-plugins/nestjs-nats-jetstream-transport';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to webshop"', () => {
      expect(appController.home()).toBe('Welcome to webshop');
    });
  });
});
