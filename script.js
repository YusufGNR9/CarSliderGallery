var models = [
  {
    name : "1965 TURBOCHARGED FORD MUSTANG",
    image : "1.jpg",
    link : "https://drivetribe.com/p/8-ridiculously-modified-cars-we-KML0o8XCTumogsoY5vPMww?iid=P26f2QOcQ1isAg1Tot4hEw",
  },
  {
    name: "Toyota Supra ",
    image: "2.jpg",
    link: "https://www.toyota.com.tr/about/news_and_events/toyota-supra.json",
  },
  {
    name: "Ford Mustang V8 ",
    image: "3.jpg",
    link: "https://hwp.com.tr/yeni-ford-mustang-hibrit-v8-ve-dort-ceker-136674",
  },
  {
    name: "Bugatti La Voiture Noire",
    image: "4.jpg",
    link: "https://www.cnbc.com/2019/03/22/take-a-look-bugattis-la-voiture-noire-car-just-sold-for-19-million.html",
  },
  {
    name: "BMV Race Car",
    image: "5.jpg",
    link: "https://www.businessinsider.in/BMW-paid-homage-to-one-of-its-greatest-race-cars-by-building-this-gorgeous-concept/articleshow/48519552.cms",
  },
  {
    name: "BUgatti La Voiture Noire",
    image: "6.jpg",
    link: "https://www.cnbc.com/2019/03/22/take-a-look-bugattis-la-voiture-noire-car-just-sold-for-19-million.html",
  },
  {
    name: "1957 Ferrari 250 Testa Rossa",
    image: "7.png",
    link: "https://www.classicandsportscar.com/gallery/50-most-expensive-cars-ever-sold-auction",
  },
];

var settings = {
    duration : '1000',
    random : true
}

var index = 0;
var slideCount = models.length;
var interval;

init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click", function () {
  index--;
  showSlide(index);
});
document
  .querySelector(".fa-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });

  document.querySelectorAll('.arrow').forEach(function(item){
      item.addEventListener('mouseenter',function() {
          clearInterval(interval);
      });
  });

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){
    var previous;
    interval=setInterval(function(){
        if(settings.random){
           
           //random index
            do{
            index = Math.floor(Math.random() * slideCount );
           }while(index == previous)
        previous = index;
            
        }else {
            //artan index
            if(slideCount == index + 1){
                index = 0;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}


function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slideCount - 1;
  }
  if(i >= slideCount){
      index = 0;
  }

  document.querySelector(".card-title").textContent=models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);

  document.querySelector('.showIndex').textContent = index;


}
