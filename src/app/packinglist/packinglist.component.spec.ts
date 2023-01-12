import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackinglistComponent } from './packinglist.component';

describe('PackinglistComponent', () => {
  let component: PackinglistComponent;
  let fixture: ComponentFixture<PackinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
