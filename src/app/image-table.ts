import {CompareImage} from "./compareImage";
import {Constants} from "./constants";

export class ImageTable {

  private static imageTable = [
    new CompareImage(0.6, Constants.IMAGE_URL+"sang.png", "un grain de sable"),
    new CompareImage(3, Constants.IMAGE_URL+"puce.png", "une puce"),
    new CompareImage(10, Constants.IMAGE_URL+"ant.png", "une fourmi"),
    new CompareImage(88, Constants.IMAGE_URL+"mouse.jpg", "une souris"),
    new CompareImage(116, Constants.IMAGE_URL+"coke.jpg", "une canette de soda 33cl"),
    new CompareImage(1700, "", "un humain moyen"),
    new CompareImage(324000, Constants.IMAGE_URL+"eiffel_tower.jpg", "la Tour Eiffel"),
    new CompareImage(828000, Constants.IMAGE_URL+"burj_khalifa", "la Burj Khalifa"),
    new CompareImage(3410000, Constants.IMAGE_URL+"central_park.jpg", "la longueur de Central Park"),
    new CompareImage(8848000, Constants.IMAGE_URL+"everest.jpg", "l'Everest"),
    new CompareImage(3474200000, Constants.IMAGE_URL+"moon.jpg", "le diamètre de la Lune"),
    new CompareImage(12742000000, Constants.IMAGE_URL+"earth.jpg", "le diamètre de la Terre"),
    new CompareImage(1392700000000, Constants.IMAGE_URL+"sun.jpg", "le diamètre du soleil"),
  ]

  static findCloseSize(sizeInMm){
    return this.imageTable.reduce((acc, obj) =>
      Math.abs(sizeInMm - obj.size) < Math.abs(sizeInMm - acc.size) ? obj : acc
    );
  }
}
