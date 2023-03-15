let x , y, a, count = 1;
for (x=2; count<=100;x++){
    a = 0;
    for(y=2;y<x;y++){
        if(x%y == 0){
            a =1
            break;
        }
    }
    if(a==0){
        document.write(x,"<br>")
        count++
    }
}