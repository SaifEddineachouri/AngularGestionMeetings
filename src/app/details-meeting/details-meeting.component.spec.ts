import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMeetingComponent } from './details-meeting.component';

describe('DetailsMeetingComponent', () => {
  let component: DetailsMeetingComponent;
  let fixture: ComponentFixture<DetailsMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
