// 1. Tek ve Çift Sayıları Ayırma
// Girilen 10 sayıyı bir diziye ekleyin. Sayıları kontrol ederek tek ve çift sayıları ayrı ayrı dizilere ayırıp konsola yazdırın.

const sayiAdet = Number(prompt("Kaç adet sayı gireceksiniz"));
const tekSayilar = [];
const ciftSayilar = [];

for (let index = 0; index < sayiAdet; index++) {
    const sayi = Number(prompt(`${index + 1}. sayıyı giriniz`));
    
    if(sayi % 2 === 0){
       
        ciftSayilar.push(sayi);
        
    }
    else{
        tekSayilar.push(sayi);
    }

}
console.log(`Tek Sayılar: ${tekSayilar}`);
console.log(`Çift Sayılar: ${ciftSayilar}`);