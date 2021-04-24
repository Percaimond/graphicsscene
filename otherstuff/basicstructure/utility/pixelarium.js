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
              imgSource.style.width = "250px";
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
