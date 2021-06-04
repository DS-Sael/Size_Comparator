import {LanguageInterface} from "./language-interface";
import {LangEnum} from "./lang-enum.enum";
import {LanguageFR} from "./language-fr";
import {EventEmitter} from "@angular/core";
import {LanguageEN} from "./language-en";

export class Language {
  static language: LanguageInterface = new LanguageFR();
  static reload = new EventEmitter<any>();

  static get(){
    return this.language;
  }

  public static switchLanguage(language: LangEnum){
    if(language == LangEnum.FR){
      this.language = new LanguageFR();
    }
    else{
      this.language = new LanguageEN();
    }
    this.reload.emit();
  }
}

