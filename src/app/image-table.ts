import {CompareImage} from "./compareImage";
import {Constants} from "./constants";
import {Language} from "./language/language";
import {LanguageInterface} from "./language/language-interface";

export class ImageTable {
  private static initialized = false;
  private static imageTable;
  private static language: LanguageInterface;
  static findCloseSize(sizeInMm){
    if(!this.initialized){
      this.language = Language.get();
      Language.reload.subscribe(() => {
        this.language = Language.get();
        this.loadTable();
      })
      this.loadTable();
      this.initialized = true;
    }
    return this.imageTable.reduce((acc, obj) =>
      Math.abs(sizeInMm - obj.size) < Math.abs(sizeInMm - acc.size) ? obj : acc
    );
  }

  private static loadTable(){
    this.imageTable = [
      new CompareImage(0.6, Constants.IMAGE_URL+"sand.jpg", this.language.GRAIN_OF_SAND),
      new CompareImage(3, Constants.IMAGE_URL+"puce.jpg", this.language.FLEA),
      new CompareImage(10, Constants.IMAGE_URL+"ant.jpg", this.language.ANT),
      new CompareImage(88, Constants.IMAGE_URL+"mouse.jpg", this.language.MOUSE),
      new CompareImage(116, Constants.IMAGE_URL+"coke.jpg", this.language.SODA_CAN_33CL),
      new CompareImage(1700, Constants.IMAGE_URL+"human.jpg", this.language.AVERAGE_HUMAN),
      new CompareImage(6000, Constants.IMAGE_URL+"giraffe.jpg", this.language.GIRAFFE),
      new CompareImage(56400, Constants.IMAGE_URL+"pisa.jpg", this.language.TOWER_OF_PISA),
      new CompareImage(92990, Constants.IMAGE_URL+"libery_statue.jpg", this.language.STATUE_OF_LIBERTY),
      new CompareImage(96000, Constants.IMAGE_URL+"big_ben.jpg", this.language.BIG_BEN),
      new CompareImage(130000, Constants.IMAGE_URL+"kheops.jpg", this.language.PYRAMID_GIZA),
      new CompareImage(169290, Constants.IMAGE_URL+"washington", this.language.WASHINGTON_MONUMENT),
      new CompareImage(324000, Constants.IMAGE_URL+"eiffel_tower.jpg", this.language.EIFFEL_TOWER),
      new CompareImage(381010, Constants.IMAGE_URL+"empire_state_building.jpg", this.language.EMPIRE_STATE_BUILDING),
      new CompareImage(828000, Constants.IMAGE_URL+"burj_khalifa.jpg", this.language.BURJ_KHALIFA),
      new CompareImage(3410000, Constants.IMAGE_URL+"central_park.jpg", this.language.CENTRAL_PARK),
      new CompareImage(8848000, Constants.IMAGE_URL+"everest.jpg", this.language.EVEREST),
      new CompareImage(88000000, Constants.IMAGE_URL+"panama.jpg", this.language.PANAMA_CANAL),
      new CompareImage(107000000, Constants.IMAGE_URL+"english_channel.jpg", this.language.ENGLISH_CHANNEL),
      new CompareImage(3474200000, Constants.IMAGE_URL+"moon.jpg", this.language.MOON),
      new CompareImage(12742000000, Constants.IMAGE_URL+"earth.jpg", this.language.EARTH),
      new CompareImage(1392700000000, Constants.IMAGE_URL+"sun.jpg", this.language.SUN),
    ]
  }
}
