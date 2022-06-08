import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickItemListaComponent } from './click-item-lista.component';

describe('ClickItemListaComponent', () => {
  let component: ClickItemListaComponent;
  let fixture: ComponentFixture<ClickItemListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickItemListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickItemListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
