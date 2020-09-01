import { TestBed } from '@angular/core/testing';

import { BoxChatService } from './box-chat.service';

describe('BoxChatService', () => {
  let service: BoxChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
