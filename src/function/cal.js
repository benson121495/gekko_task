export function formula(type, value)
{
   
    if (type =="celsius"){
        return (value * 1.8) + 32;
       
    }else {
        return (value - 32) / 1.8;
    }
// do the different calculation
}

