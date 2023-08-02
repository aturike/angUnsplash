import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UnsplashAPIService } from 'src/app/service/unsplash-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  search = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  searchForm = new FormBuilder().nonNullable.group({ seach: this.search });

  constructor(private searchImg: UnsplashAPIService) {}

  searchSubmit() {
    this.searchImg.searchImage(this.search.value);
  }
}
