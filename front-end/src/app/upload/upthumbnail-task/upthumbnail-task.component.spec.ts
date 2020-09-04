import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpthumbnailTaskComponent } from './upthumbnail-task.component';

describe('UpthumbnailTaskComponent', () => {
  let component: UpthumbnailTaskComponent;
  let fixture: ComponentFixture<UpthumbnailTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpthumbnailTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpthumbnailTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
