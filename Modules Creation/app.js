function mainfunction(callback){
   const data="Hi callback";
   callback(data);
}
 mainfunction(function(a){
    console.log(a);
});