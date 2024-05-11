import { TestBed } from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, shopping list');
  });
});
