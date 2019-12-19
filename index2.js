const axios = require('axios'),
      jsdom = require('jsdom'),
      { JSDOM }=  jsdom,
      url = 'https://www.trendyol.com/xiaomi/redmi-8-32-gb-mavi-xiaomi-turkiye-garantili-cep-telefonu-p-32382935/yorumlar?boutiqueId=381444&merchantId=104870'


//Error Bilgisi
axios.get(url)
  .then (response => {
    getNodes(response.data);
  })
  .catch(error => {
    console.error(error);
  })


  

  const getNodes = html => {
    const data = [], // Boş bir array oluşturuyoruz
    dom = new JSDOM(html), // Yeni bir JSDOM instanceı alıyoruz
    news = dom.window.document.querySelectorAll('.rnr-com-tx,p'); // dom'dan gelen nodelar arasında gezerek o modülün içerisindeki a etiketlerini çekiyorum.
    news.forEach(item => { // daha sonra bu seçtiğim öğelerde dönüyorum
      data.push({ // yukarıdaki boş arraye her elemanın title ve href özelliklerini atıyorum
        yorum: item.innerHTML
      })
    });
    //console.log(data); // Arrayin son halini yazdırıyorum. Burada elinize gelen data ile ne yapacağınız size kalmış :)

    //const csv = convertArrayToCSV(data,Option);
    
 var fs =require('fs');
 var  csv = require('fast-csv');
var ws = fs.createWriteStream('yorum2.csv');


// Dizi tipindeki dataları csv ye çevirme

for(var i=1;i<=200;i++)
{
  csv.
    write([


     data[i]

         
    ],{headers:true})
    
    .pipe(ws);

}

  }
  
