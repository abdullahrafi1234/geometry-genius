function calculateRectangleArea(){
    
    const rectangleWidth = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidth.value;
    const width= parseFloat(rectangleWidthText)
    console.log(width)


    const rectangleLength = document.getElementById('rectangle-length')
   const rectangleLengthText = rectangleLength.value;
   const length = parseFloat(rectangleLengthText)
   console.log(length)


   const area = width * length;
   console.log('area', area)

   const rectangleArea = document.getElementById('rectangle-area')
   rectangleArea.innerText = area;
   console.log(rectangleArea)
}