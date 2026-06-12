import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css']
})
export class Wishlist implements OnInit {

  wishlistProducts: any[] = [];

  ngOnInit(): void {
    this.loadWishlist();
  }

  // Load wishlist from localStorage
  loadWishlist() {
    const data = localStorage.getItem('wishlist');
    this.wishlistProducts = data ? JSON.parse(data) : [];
  }

  // Clear entire wishlist
  clearWishlist() {
    localStorage.removeItem('wishlist');
    this.wishlistProducts = [];
  }

  // Remove a single product
  removeProduct(index: number) {
    this.wishlistProducts.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistProducts));
  }
}
