// utility start here
function callingValue (inputValue){
    const inputFiled = document.getElementById(inputValue);
    const inputFiledString = inputFiled.value;
    const inputFiledAmont = parseFloat(inputFiledString);
    inputFiled.value = '';
    return inputFiledAmont;
}
function callingText(inputText){
    const inputTextFiled = document.getElementById(inputText);
    return inputTextFiled;
}
// reuseable set function
function setInnerText(id , area){
    const element = document.getElementById(id);
    element.innerText =  area;
}


// trianglecalculatBtn--------------------------------|
function trianglecalculatBtn(){
    
    const triangleBase = callingValue("triangleBase");
    console.log(triangleBase)
    const triangleHeight = callingValue('triangleHeight')
    console.log(triangleHeight)

    const area = 0.5 * triangleBase * triangleHeight;
    console.log(area)

    const areaText = callingText('areaValue');
    areaText.innerText = area;
}

// rectangleCalculatBtn-----------------|
function rectangleCalculatBtn(){
    const rectangelWeigth = document.getElementById('rectangelWeigth').value;
    const convertrectangelWeigth =parseFloat(rectangelWeigth);
    console.log(convertrectangelWeigth);

    const rectangelLength = document.getElementById('rectangelLength').value;
    const convertrectangelLength =parseFloat(rectangelLength);
    console.log(convertrectangelLength );

    const value = convertrectangelWeigth * convertrectangelLength ;
    console.log(value);

    const areaText = document.getElementById('rectangalValue');
    areaText.innerText = value;
}
// parallelogramCalculatBtn-----------------------|
function parallelogramCalculatBtn(){
    const base = callingValue('parallelogramBase');
    const height = callingValue('parallelogramHeight')
    const area = base * height;
    setInnerText('parallelogramArea', area)
}
// ellipseCalculatBtn------------------|
function ellipseCalculatBtn(){
    const major = callingValue('EllipseMajor');
    const minor = callingValue('ellipseMinor');
    const area = 3.14 * major * minor ;
    setInnerText('ellipseArea',area);
}