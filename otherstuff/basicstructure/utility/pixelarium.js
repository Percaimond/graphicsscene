function display(){
    this.img = document.createElement("img");
    this.img2 = document.createElement("img");
    this.img.style.width = "100px";
    this.img2.style.width = "100px";
    this.img.src = "img/diamond.png";
    this.img2.src = "img/ruby.png";
  
    preview = document.getElementById("secondary");
    afterview = document.getElementById("primary");
    afterview.appendChild(this.img2)
    preview.appendChild(this.img);
}


function openSite(evt, siteName){
  switch(siteName){
    case 'Startsite': window.location.href='/otherstuff/basicstructure/start.html';
      break;
    case 'Github': window.location.href='https://github.com/Percaimond';
      break;
    case 'Utility': window.location.href='utility.html';
      break;
    case 'YourSongs': window.location.href='youtube.html';
      break;
    case 'Premium': window.location.href='premium.html';
      break;
    case 'Shop': window.location.href='personalshop.html';
      break;
    case 'Calculator': window.location.href='calculator.html';
      break;
    case 'ShoppingList': window.location.href='shoppingList.html';
      break;
    case 'Game': window.location.href='game.html';
      break;
    case 'Search': window.location.href='search.html';
      break;
  }
}

$('.pixel-image').hover(function()
    {
      var displayID = this.id;
      var displayINT = parseInt(displayID);
      $('#box3').removeClass('hidden');
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:5500/otherstuff/basicstructure/utility/articles.json',
        dataType:"json",
        success: function(data) { 
          if(data) {
              var imgSource = document.createElement('img');
              imgSource.src = 'img/' + data.articles[displayINT].picID;
              //imgSource.style.width = "250px";
              imgSource.style.objectFit = "contain";
              $('.picPIC').append(imgSource);
              $('.picID').append("</td> pictureID: </tr>"+ data.articles[displayINT].id);
              $('.picNAME').append("</td> name of the picture: </tr>"+ data.articles[displayINT].name);
              $('.creationDate').append("</td>date of creation: </tr>"+ data.articles[displayINT].creationDate);
              $('.story').append("</td>creation story: </tr>"+ data.articles[displayINT].story);
              $('.price').append("</td>price:  </tr>"+ data.articles[displayINT].price);
              console.log(data.articles[displayINT].id);
              console.log(imgSource);
            }
          },
          error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
          }
      });
      return false;
  },function(){
        $('.picPIC').empty();
        $('.picID').empty();
        $('.picNAME').empty();
        $('.creationDate').empty();
        $('.story').empty();
        $('.price').empty();
        $picName = null;
    }
);

/*function addToCart(){
  //
  var imgSource = document.createElement('img');
  imgSource.src  = picPIC.getElementsByTagName('img')[0].src; 
  console.log(imgSource.src);
  imgSource.style.width = "50px";
  $picName picPIC.getElementById
  $price
  $('.box').append(imgSource);
  var imgName = document.createElement('div3');
  var imgPrice = document.createElement('div4');


  imgName.style.backgroundColor  = "black";
 
  imgPrice.style.backgroundColor  = "black";
  $('.box').append(imgName);
  $('.box').append(imgPrice);

}*/
$('.pixel-image').click(function()
    {
      var displayID2 = this.id;
      var displayINT2 = parseInt(displayID);
      //$('#box3').removeClass('hidden');
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:5500/otherstuff/basicstructure/utility/articles.json',
        dataType:"json",
        success: function(data) { 
          if(data) {
            var imgSource = document.createElement('img');
            imgSource.src  = picPIC.getElementsByTagName('img')[0].src; 
              imgSource.style.width = "50px";

              $('.box').append(imgSource);
              $('.box').append("</td> name of the picture: </tr>"+ data.articles[displayINT2].name);
              $('.box').append("</td>price:  </tr>"+ data.articles[displayINT2].price);
              console.log(data.articles[displayINT2].id);
              console.log(imgSource);
            }
          },
          error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
          }
      });
      return false;
    }
);

