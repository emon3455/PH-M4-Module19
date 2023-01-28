
// use of example:

var arr= [10, 55, 65 , 25 , 35, 45, 68, 112, 158, 29, 14, 68];

for (var i = 0; i <= arr.length; i++){
    if(arr[i]>100){
        continue;
    }
    console.log(arr[i]);
}