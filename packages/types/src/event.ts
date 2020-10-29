import { BaseEvent } from './base-event';
import { IdentifyEvent } from './identify';

export type Event = BaseEvent | IdentifyEvent;
