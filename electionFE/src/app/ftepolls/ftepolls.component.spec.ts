import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtepollsComponent } from './ftepolls.component';

describe('FtepollsComponent', () => {
  let component: FtepollsComponent;
  let fixture: ComponentFixture<FtepollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtepollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtepollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
