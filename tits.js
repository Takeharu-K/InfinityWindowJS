//this is comment
/* this is
    also comment
*/
function judgeTits(size) {
    var winname;
    var top;
    var left;
    var options;

    for(var i=0;i<3;i++){
        winname = 'win' + i;
        if(i<4){
            top = 'top=' + 0 + ',';
            left = 'left=' + i*400;
        }else if(i<8){
            top = 'top=' + 300 + ',';
            left = 'left=' + (i-4)*400;
        }else{
            top = 'top=' + 600 + ',';
            left = 'left=' + (i-8)*400;
        }
        options = 'width=400,height=300,'+top+left;
        console.log(options);

        openWindow(size,winname,options);
    }
}

function openWindow(size,winname,options){
    var win = window.open('https://www.google.com/search?rlz=1C5CHFA_enJP802JP803&biw=1440&bih=765&tbm=isch&sa=1&ei=CE1-XMm9BrqMr7wP2euGqAo&q=+'+size+'+cup&oq='+size+'+cup+&gs_l=img.3...888.12596..12952...0.0..0.78.577.8......2....1..gws-wiz-img.....0..0i4j0.1uI3ubgWG1E',winname,options);

}