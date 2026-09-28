import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menutest } from './menutest';

describe('Menutest', () => {
  let component: Menutest;
  let fixture: ComponentFixture<Menutest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menutest],
    }).compileComponents();

    fixture = TestBed.createComponent(Menutest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
