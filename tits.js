//this is comment
/* this is
    also comment
*/
function infinityWindow(size) {
    var top;
    var left;
    var options;
    var win;
    var i=0;

    for(;;i++){
        top = 'top='+i;
        left = ',left='+i;
        options = 'width=400,height=300,'+top+left;
        win = window.open('','',options);
        if(i==4){
            break;
        }
    }
}