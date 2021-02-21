import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      name: [''],
      description: fb.control(''),
      //две строки сверху то же самое. можно и так, и так
      phones: fb.array([['+79897201120'], ['+79897201220'], ['+79897201320']]),
    });
  }

  ngOnInit(): void {}

  get getPhones(): FormArray {
    return this.formBuilder1.get('phones') as FormArray;
  }
}
