import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagequatrComponent } from './pagequatr.component';

describe('PagequatrComponent', () => {
  let component: PagequatrComponent;
  let fixture: ComponentFixture<PagequatrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagequatrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagequatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
