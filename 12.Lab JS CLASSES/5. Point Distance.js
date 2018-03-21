class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){//--->vuv samiq klas shte imame funciqta distance priema dva obekta ot tip point
        const diffX=a.x-b.x;
        const diffY=a.y-b.y;
         return Math.sqrt(diffX*diffX +diffY*diffY);

    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
