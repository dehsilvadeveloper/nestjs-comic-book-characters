import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CharacterCreatedEvent } from '../events/character-created.event';

@Injectable()
export class CharacterCreatedListener {
  private readonly logger = new Logger(CharacterCreatedListener.name);

  @OnEvent('character.created', { async: true })
  async handleEvent(event: CharacterCreatedEvent) {
    this.logger.log(`The character of id #${event.id}, having the name ${event.name}, was created.`);
  }
}
