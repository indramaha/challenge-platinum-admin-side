export function convertToRupiah(angka){
    if (angka === null) {
        return 0
    } else {
        var rupiah = '';    
        var angkarev = angka.toString().split('').reverse().join('');
        
        for(var i = 0; i < angkarev.length; i++) 
            if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
        
        return rupiah.split('',rupiah.length-1).reverse().join('');
    }
}