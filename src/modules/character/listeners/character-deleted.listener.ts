import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CharacterDeletedEvent } from '../events/character-deleted.event';

@Injectable()
export class CharacterDeletedListener {
  private readonly logger = new Logger(CharacterDeletedListener.name);

  @OnEvent('character.deleted', { async: true })
  async handleEvent(event: CharacterDeletedEvent) {
    this.logger.log(`The character of id #${event.id} was deleted.`);
  }
}
