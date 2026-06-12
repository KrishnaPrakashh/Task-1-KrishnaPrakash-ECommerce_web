// singleview.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.html',
  styleUrls: ['./singleview.css'],
  imports: [CommonModule],
})
export class Singleview implements OnInit {
  singleproduct: any;
  added = false ;

  constructor(private route: ActivatedRoute, private service: Service,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // get id from URL
    if (id) {
      this.service.getsingleproduct(id).subscribe({
        next: (res) => {
          this.singleproduct = res;
          console.log('Single Product:', res);this.cdr.detectChanges()
        },
        error: (err) => console.error('API Error:', err),
      });
    }
  }
  addToCart() {
     let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (!cart.find((p: any) => p.id === this.singleproduct.id)) {
    cart.push(this.singleproduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
  } else {
    alert('Product already in cart');
  }
    
  }

  addToWishlist() {
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  // Prevent duplicate products
  if (!wishlist.find((p: any) => p.id === this.singleproduct.id)) {
    wishlist.push(this.singleproduct);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Product added to wishlist');
  } else {
    alert('Product already in wishlist');
  }
}

}
