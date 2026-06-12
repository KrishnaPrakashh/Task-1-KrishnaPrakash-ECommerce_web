import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];

  ngOnInit(): void {
    this.loadCart();
  }

  // Load cart from localStorage
  loadCart() {
    const data = localStorage.getItem('cart');
    this.cartProducts = data ? JSON.parse(data) : [];
  }

  // Clear cart safely
  clearCart() {
    localStorage.removeItem('cart'); // frees space
    this.cartProducts = [];           // update UI
  }

  // Optional: remove single product
  removeProduct(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
