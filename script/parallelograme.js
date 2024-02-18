function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')

    const area = base * height ;
    console.log(area)

    setInnerText('parallelogram-area' , area)

    
}


// // triangle er ta try kore dekhlam hosse valoi
// function calculateTriangleArea(){
//     const triangleBase = getInputValue('triangle-base')
//     const triangleHeight = getInputValue('triangle-height')
    
//     const area2 = triangleBase * triangleHeight * 0.5
//     console.log(area2)

//     setInnerText('triangle-area', area2)
// }


function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText)
    return value;
}


function setInnerText (elementId, area){
    const element = document.getElementById(elementId)

    element.innerText = area;
}