import convert from "convert-units";

export class Calculation {
  static compare(firstPersonNormalSize,firstPersonNormalMeasure,firstPersonExtraSize,firstPersonExtraMeasure,secondPersonNormalSize,secondPersonNormalMeasure,secondPersonExtraSize,secondPersonExtraMeasure){
    let firstNormalSize = convert(firstPersonNormalSize).from(firstPersonNormalMeasure).to('mm')
    let firstExtraSize = convert(firstPersonExtraSize).from(firstPersonExtraMeasure).to('mm')
    let secondNormalSize = convert(secondPersonNormalSize).from(secondPersonNormalMeasure).to('mm')
    let secondExtraSize = convert(secondPersonExtraSize).from(secondPersonExtraMeasure).to('mm')
    let result1 = convert((firstNormalSize * secondExtraSize) / firstExtraSize).from('mm').toBest();
    let result2 = convert((firstExtraSize * secondNormalSize) / secondExtraSize).from('mm').toBest();
    return [result1,result2];
  }
}
