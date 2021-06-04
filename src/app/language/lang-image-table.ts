import {LangEnum} from "./lang-enum.enum";

export class LangImageTable {
  public static table = {
    FR:"../../../assets/images/lang/fr.png",
    EN:"../../../assets/images/lang/en.png"
  }

  public static returnLangImage(langEnum: LangEnum){
    return(this.table[langEnum.valueOf()])
  }
}
