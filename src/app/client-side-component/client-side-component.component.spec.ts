import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideComponentComponent } from './client-side-component.component';

describe('ClientSideComponentComponent', () => {
  let component: ClientSideComponentComponent;
  let fixture: ComponentFixture<ClientSideComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSideComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
