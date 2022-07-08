import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() init!: string;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ville: [this.init, Validators.required]
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }

}
