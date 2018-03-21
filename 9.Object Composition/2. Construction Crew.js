function solve(obj) {
   if(obj.handsShaking===true){
       obj.bloodAlcoholLevel=((obj.weight*0.1*obj.experience)+obj.bloodAlcoholLevel);
      obj. handsShaking=false;
      return obj;
   }else{
       return obj;
   }
}
console.log(solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }

));