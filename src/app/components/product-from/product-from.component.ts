import { Component, OnInit } from '@angular/core';
import { FormControl ,Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.scss']
})
export class ProductFromComponent implements OnInit {
   
  emailCtrl = new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(4)]);
  constructor() { 
    this.emailCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
   .subscribe(value => {
  console.log(value);
});
  }

  ngOnInit(): void {
  }
  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }
}
