import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTileComponent } from './compare-tile.component';

describe('CompareTileComponent', () => {
  let component: CompareTileComponent;
  let fixture: ComponentFixture<CompareTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
