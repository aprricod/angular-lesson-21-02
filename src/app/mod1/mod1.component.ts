import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  //поведение в объекте
  form1 = { name: '', description: '' }; //form1 своего рода мапа
  //поведение в форме
  name: string = '';
  description: string = '';

  //reactivForm1 = { name: '', description: '' };

  reactivForm1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(''),
  });

  formBuilder1: FormGroup;

  //в конструктр передается описание классов которые по принципу депенденси инжектионс

  constructor(fb: FormBuilder) {
    //использовали FormBuilder для создания объекта и передаем в него значения
    //другой способ записи new FormGroup
    this.formBuilder1 = fb.group({
      name: [null, Validators.required],
      description: fb.control(null, Validators.required),
      //две строки сверху то же самое. можно и так, и так
      title: [{ value: null, disabled: true }, Validators.required],
      phones: fb.array([['+79897201120'], ['+79897201220'], ['+79897201320']]),
      age: fb.control(null, [Validators.min(10), Validators.max(100)]),
    });
    this.formBuilder1.get('name').valueChanges.subscribe((value) => {
      if (value === 'Привет') {
        this.formBuilder1.get('description').setValue('Приветствие');
      }
    });
  }

  ngOnInit(): void {}

  get getPhones(): FormArray {
    return this.formBuilder1.get('phones') as FormArray;
  }

  get getAge(): FormControl {
    return this.formBuilder1.get('age') as FormControl;
  }

  toggle() {
    if (this.formBuilder1.get('title').enabled) {
      this.formBuilder1.get('title').disable();
    } else {
      this.formBuilder1.get('title').enable();
    }
  }
  refresh() {
    this.formBuilder1.reset();
  }
}
