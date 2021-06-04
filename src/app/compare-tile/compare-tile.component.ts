import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Constants} from "../constants";
import {Language} from "../language/language";
import {LanguageInterface} from "../language/language-interface";

@Component({
  selector: 'app-compare-tile',
  templateUrl: './compare-tile.component.html',
  styleUrls: ['./compare-tile.component.scss']
})
export class CompareTileComponent implements OnInit {
  @Input()
  formGroup: FormGroup;
  @Input()
  description: string;
  @Input()
  imageSrc: string;
  imagePlaceholder = Constants.IMAGE_URL+'empty.png';
  language: LanguageInterface
  constructor() {
    Language.reload.subscribe(() => {
      console.log("reload data");
      this.ngOnInit()
    });
  }

  ngOnInit(): void {
    this.language = Language.get();
  }

}
