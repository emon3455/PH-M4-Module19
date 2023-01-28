var items = ["pen" , "Bottle" , "Notebook", "Meril","Belt"];

for(var i =0; i < items.length ; i++){
    var item = items[i];
    console.log(item);
}


console.log("\nUsing for each loop: ");

items.forEach(element => {
    console.log(element);
});