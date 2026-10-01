import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeSoftwareComponent } from './mye-software.component';

describe('MyeSoftwareComponent', () => {
  let component: MyeSoftwareComponent;
  let fixture: ComponentFixture<MyeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
