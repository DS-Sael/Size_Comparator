import {CompareImage} from "./compareImage";

export class ImageTable {
  private static imageTable = [
    new CompareImage(0.6, "", "un grain de sable"),
    new CompareImage(3, "", "une puce"),
    new CompareImage(10, "", "une fourmi"),
    new CompareImage(88, "", "une souris"),
    new CompareImage(116, "", "une canette de soda 33cl"),
    new CompareImage(1700, "", "un humain moyen"),
    new CompareImage(324000, "", "la Tour Eiffel"),
    new CompareImage(828000, "", "la Burj Khalifa"),
    new CompareImage(3410000, "", "la longueur de Central Park"),
    new CompareImage(8848000, "", "l'Everest"),
    new CompareImage(10994000, "", "la fosse des Mariannes"),
    new CompareImage(3474200000, "", "le diamètre de la Lune"),
    new CompareImage(12742000000, "", "le diamètre de la Terre"),
    new CompareImage(1392700000000, "", "le diamètre du soleil"),
  ]

  static findCloseSize(sizeInMm){
    return this.imageTable.reduce((acc, obj) =>
      Math.abs(sizeInMm - obj.size) < Math.abs(sizeInMm - acc.size) ? obj : acc
    );
  }
}
