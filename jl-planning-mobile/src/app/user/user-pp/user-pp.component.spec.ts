import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPpComponent } from './user-pp.component';

describe('UserPpComponent', () => {
  let component: UserPpComponent;
  let fixture: ComponentFixture<UserPpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
