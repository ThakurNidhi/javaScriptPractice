console.log("Its Nullish colision --> ?? ")

// let height = 0;
// alert(height || 101);// 101
// alert(height ?? 101122); // 0

// ----- Precedence 
let height1 = null;
let width = null ;
let area = (height1 ?? 100) * (width ?? 50 );
alert(area);