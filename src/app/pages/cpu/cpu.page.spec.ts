import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpuPage } from './cpu.page';

describe('CpuPage', () => {
  let component: CpuPage;
  let fixture: ComponentFixture<CpuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
