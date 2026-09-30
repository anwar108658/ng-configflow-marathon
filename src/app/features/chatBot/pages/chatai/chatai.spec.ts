import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chatai } from './chatai';

describe('Chatai', () => {
  let component: Chatai;
  let fixture: ComponentFixture<Chatai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chatai],
    }).compileComponents();

    fixture = TestBed.createComponent(Chatai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
