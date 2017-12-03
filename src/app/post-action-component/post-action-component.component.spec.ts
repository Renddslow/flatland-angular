import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActionComponentComponent } from './post-action-component.component';

describe('PostActionComponentComponent', () => {
  let component: PostActionComponentComponent;
  let fixture: ComponentFixture<PostActionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostActionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
