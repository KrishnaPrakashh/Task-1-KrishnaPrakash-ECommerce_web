import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Service } from '../../service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  product: any[] = [];
  searchText: string = '';

  constructor(
    private service: Service,
    private cdr: ChangeDetectorRef
  ) {}
loading = true;
  ngOnInit() {
    this.loading = true;
    this.service.getProduct().subscribe((res: any) => {
      this.product = res.products;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  get filteredProducts() {
    return this.product.filter(item =>
      item.title.toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }
}