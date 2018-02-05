import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRedbarComponent } from './header-redbar.component';

describe('HeaderRedbarComponent', () => {
  let component: HeaderRedbarComponent;
  let fixture: ComponentFixture<HeaderRedbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRedbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
