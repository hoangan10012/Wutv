import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFromComponent } from './upload-from.component';

describe('UploadFromComponent', () => {
  let component: UploadFromComponent;
  let fixture: ComponentFixture<UploadFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
