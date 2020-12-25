import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNAVComponent } from './aside-nav.component';

describe('AsideNAVComponent', () => {
  let component: AsideNAVComponent;
  let fixture: ComponentFixture<AsideNAVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideNAVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideNAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
