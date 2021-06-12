import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistFileItemComponent } from './gist-file-item.component';

describe('GistFileItemComponent', () => {
  let component: GistFileItemComponent;
  let fixture: ComponentFixture<GistFileItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GistFileItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GistFileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
