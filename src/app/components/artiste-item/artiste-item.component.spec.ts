import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteItemComponent } from './artiste-item.component';

describe('ArtisteItemComponent', () => {
  let component: ArtisteItemComponent;
  let fixture: ComponentFixture<ArtisteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisteItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
