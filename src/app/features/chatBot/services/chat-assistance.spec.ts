import { TestBed } from '@angular/core/testing';
import { ChatAssistance } from './chat-assistance';

describe('ChatAssistance', () => {
  let service: ChatAssistance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAssistance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
