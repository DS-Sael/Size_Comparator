import {LanguageInterface} from "./language-interface";
import {LangEnum} from "./lang-enum.enum";

export class LanguageEN implements LanguageInterface{
  LANG = LangEnum.EN;
  NAME = "Name";
  IRL_SIZE = "IRL size";
  MODIFIED_SIZE = "Modified size";
  COMPARE = "Compare";
  DESCRIPTION = (characterA,characterB,size,unit,imageName,imageSize,imageUnit) => {
    return `For ${characterA}, ${characterB} measures ${size}${unit} or approximately ${imageName} (${imageSize}${imageUnit})`;
  }
  ANT = "an ant";
  AVERAGE_HUMAN = "an average human";
  BURJ_KHALIFA = "the height of the Burj Khalifa";
  CENTRAL_PARK = "the length of Central Park";
  EARTH = "the diameter of the Earth";
  EIFFEL_TOWER = "the height of the Eiffel Tower";
  EVEREST = "the height of the Everest";
  FLEA = "a flea";
  GRAIN_OF_SAND = "a grain of sand";
  MOON = "the diameter of the moon";
  MOUSE = "a mouse";
  SODA_CAN_33CL = "a 33cl soda can";
  SUN = "the diameter of the sun";
}
