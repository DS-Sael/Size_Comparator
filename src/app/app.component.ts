import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Calculation} from "./calculation";
import {ImageTable} from "./image-table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'size-comparator';
  characterA: FormGroup;
  characterB: FormGroup;
  descCharacterA: string;
  descCharacterB: string;
  imageSrcA: string;
  imageSrcB: string;

  ngOnInit() {
    this.descCharacterA = "";
    this.descCharacterB = "";
    this.characterA = new FormGroup({});
    this.characterA.addControl('character-name',new FormControl(this.checkNull(localStorage.getItem('character-nameA'))));
    this.characterA.addControl('normal-size',new FormControl(this.checkNull(localStorage.getItem('normal-sizeA'))));
    this.characterA.addControl('normal-measure',new FormControl(this.checkNull(localStorage.getItem('normal-measureA'),"m")));
    this.characterA.addControl('changed-size',new FormControl(this.checkNull(localStorage.getItem('changed-sizeA'))));
    this.characterA.addControl('changed-measure',new FormControl(this.checkNull(localStorage.getItem('changed-measureA'),"m")));
    this.characterB = new FormGroup({});
    this.characterB.addControl('character-name',new FormControl(this.checkNull(localStorage.getItem('character-nameB'))));
    this.characterB.addControl('normal-size',new FormControl(this.checkNull(localStorage.getItem('normal-sizeB'))));
    this.characterB.addControl('normal-measure',new FormControl(this.checkNull(localStorage.getItem('normal-measureB'),"m")));
    this.characterB.addControl('changed-size',new FormControl(this.checkNull(localStorage.getItem('changed-sizeB'))));
    this.characterB.addControl('changed-measure',new FormControl(this.checkNull(localStorage.getItem('changed-measureB'),"m")));

  }

  checkNull(toCheck: string, defaultValue = ""){
    if(!toCheck || toCheck == "null"){
      return defaultValue;
    }
    else{
      return toCheck;
    }
  }

  send() {
    localStorage.setItem('character-nameA', this.characterA.value['character-name']);
    localStorage.setItem('normal-sizeA', this.characterA.value['normal-size']);
    localStorage.setItem('normal-measureA', this.characterA.value['normal-measure']);
    localStorage.setItem('changed-sizeA', this.characterA.value['changed-size']);
    localStorage.setItem('changed-measureA', this.characterA.value['changed-measure']);
    localStorage.setItem('character-nameB', this.characterB.value['character-name']);
    localStorage.setItem('normal-sizeB', this.characterB.value['normal-size']);
    localStorage.setItem('normal-measureB', this.characterB.value['normal-measure']);
    localStorage.setItem('changed-sizeB', this.characterB.value['changed-size']);
    localStorage.setItem('changed-measureB', this.characterB.value['changed-measure']);
    let result = Calculation.compare(this.characterA.value['normal-size'], this.characterA.value['normal-measure'], this.characterA.value['changed-size'], this.characterA.value['changed-measure'], this.characterB.value['normal-size'], this.characterB.value['normal-measure'], this.characterB.value['changed-size'], this.characterB.value['changed-measure'])
    let valueA = result[0].val;
    let valueB = result[1].val;
    if(Math.floor(valueA) != valueA){
      valueA = valueA.toFixed(2);
    }
    if(Math.floor(valueB) != valueB){
      valueB = valueB.toFixed(2);
    }
    let compareImageA = ImageTable.findCloseSize(Calculation.toMillimeter(valueA, result[0].unit));
    let compareImageB = ImageTable.findCloseSize(Calculation.toMillimeter(valueB, result[1].unit));
    this.imageSrcA = compareImageA.src;
    this.imageSrcB = compareImageB.src;
    let sizeImageA = Calculation.toBest(compareImageA.size,"mm");
    let sizeImageB = Calculation.toBest(compareImageB.size,"mm");
    let sizeImageValueA = sizeImageA.val;
    let sizeImageValueB = sizeImageB.val;
    if(Math.floor(sizeImageValueA) != sizeImageValueA){
      sizeImageValueA = sizeImageValueA.toFixed(2);
    }
    if(Math.floor(sizeImageValueB) != sizeImageValueB){
      sizeImageValueB = sizeImageValueB.toFixed(2);
    }
    this.descCharacterA = `Pour ${this.characterA.value['character-name']}, ${this.characterB.value['character-name']} mesure ${valueA}${result[0].unit} soit approximativement ${compareImageA.name} (${sizeImageValueA}${sizeImageA.unit})`;
    this.descCharacterB = `Pour ${this.characterB.value['character-name']}, ${this.characterA.value['character-name']} mesure ${valueB}${result[1].unit} soit approximativement ${compareImageB.name} (${sizeImageValueB}${sizeImageB.unit})`;
  }
}
