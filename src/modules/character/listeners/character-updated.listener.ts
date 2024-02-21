import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CharacterUpdatedEvent } from '../events/character-updated.event';

@Injectable()
export class CharacterUpdatedListener {
  private readonly logger = new Logger(CharacterUpdatedListener.name);

  @OnEvent('character.updated', { async: true })
  async handleEvent(event: CharacterUpdatedEvent) {
    this.logger.log(`The character of id #${event.id}, having the name ${event.name}, was updated.`);
  }
}
