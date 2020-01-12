import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesExampleComponent } from './movies-example.component';

describe('MoviesExampleComponent', () => {
  let component: MoviesExampleComponent;
  let fixture: ComponentFixture<MoviesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
