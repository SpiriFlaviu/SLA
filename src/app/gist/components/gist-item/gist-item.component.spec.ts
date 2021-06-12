import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistItemComponent } from './gist-item.component';

describe('GistItemComponent', () => {
  let component: GistItemComponent;
  let fixture: ComponentFixture<GistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
