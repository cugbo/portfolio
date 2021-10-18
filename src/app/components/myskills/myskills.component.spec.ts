/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyskillsComponent } from './myskills.component';

describe('MyskillsComponent', () => {
  let component: MyskillsComponent;
  let fixture: ComponentFixture<MyskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
