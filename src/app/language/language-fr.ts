import {LanguageInterface} from "./language-interface";
import {LangEnum} from "./lang-enum.enum";

export class LanguageFR implements LanguageInterface{
  LANG = LangEnum.FR;
  NAME = "Nom";
  IRL_SIZE = "Taille IRL";
  MODIFIED_SIZE = "Taille modifiée";
  COMPARE = "Comparer";
  DESCRIPTION = (characterA,characterB,size,unit,imageName,imageSize,imageUnit) => {
    return `Pour ${characterA}, ${characterB} mesure ${size}${unit} soit approximativement ${imageName} (${imageSize}${imageUnit})`;
  }
  ANT = "une fourmi";
  AVERAGE_HUMAN = "un humain moyen";
  BURJ_KHALIFA = "la Burj Khalifa";
  CENTRAL_PARK = "la longueur de Central Park";
  EARTH = "le diamètre de la terre";
  EIFFEL_TOWER = "la Tour Eiffel";
  EVEREST = "la hauteur de l'Everest";
  FLEA = "une puce";
  GRAIN_OF_SAND = "un grain de sable";
  MOON = "le diamètre de la lune";
  MOUSE = "une souris";
  SODA_CAN_33CL = "une canette de soda de 33cl";
  SUN = "le diamètre du soleil";
  SOCCER_FIELD = "un terrain de football";
  BIG_BEN = "Big Ben";
  EMPIRE_STATE_BUILDING = "L'Empire State Building";
  ENGLISH_CHANNEL = "la Manche";
  GIRAFFE = "une giraffe";
  PANAMA_CANAL = "la longueur du canal Panama";
  PYRAMID_GIZA = "la pyramide de Kheops";
  STATUE_OF_LIBERTY = "la statue de la liberté";
  TOWER_OF_PISA = "la tour de pise";
  WASHINGTON_MONUMENT = "le Washington Monument";
}
