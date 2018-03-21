function orderRectangles(input) {
    function createRect(width, height){
        let rect =  {
            width: width,
            height: height,
            area: function () {
                return rect.width * rect.height;
            },
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }

        };

        return rect;
    }

    let rects = [];
    for(let [width, height] of input){
        rects.push(createRect(width, height));
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects;
}
orderRectangles([[10, 5], [3, 20], [5, 12]]);

