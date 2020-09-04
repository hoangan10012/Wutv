import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpthumbnailComponent } from './upthumbnail.component';

describe('UpthumbnailComponent', () => {
  let component: UpthumbnailComponent;
  let fixture: ComponentFixture<UpthumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpthumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpthumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
