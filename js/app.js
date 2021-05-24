$(document).ready(function(){


$("#list").on("click",function(){
$(".slider").css("left","0");
$(".slider").addClass("afterslide");
});

$(".more").on("click",function(){
$(".slider").css("left","0");
$(".slider").addClass("afterslide");
});
    
$("#close").on("click",function(){
$(".slider").css("left","-630px");
$(".slider").addClass("afterslide");
});
    
$("#show").on("click",function(){
$(".slider").css("left","0");
$(".slider").addClass("afterslide");
});

$("#ot").on("click",function(){
if($("#ic").text()==" view less") 
{
 $("#ic").text(" view more"); 
}   
else
{
 $("#ic").text(" view less"); 
}
if($("#ic").hasClass("fa-chevron-circle-down"))
{
$("#ic").removeClass("fa-chevron-circle-down");
$("#ic").addClass("fa-chevron-circle-up");
}
else
{
$("#ic").addClass("fa-chevron-circle-down");
$("#ic").removeClass("fa-chevron-circle-up");
}
$(".wrapper").slideToggle('slow');
$(".speed").slideToggle('slow');
});    


$("#notification").hide();
//notification
var notification=(target,message,status)=>{
                                      if(status==false)
                                      {
                                      $(target).html('<i class="fa fa-frown-o" aria-hidden="true">&nbsp;</i>'+message);
                                      $(target).slideDown('slow');
                                      setTimeout(function(){
                                        $(target).slideUp('slow');
                                      },4000);
                                      }
                                      else
                                      {
                                        $(target).html('<i class="fa fa-music" aria-hidden="true">&nbsp;</i>'+message);
                                        $(target).slideDown('slow');
                                       setTimeout(function(){
                                        $(target).slideUp('slow');
                                      },4000);
                                      }
                                     
                                    }


                                      var ar={};
                                      var load=()=>{
                                                   $.ajax({
                                                            url:"php/file.json",
                                                            type:"POST",
                                                            async: true,
                                                            dataType:"json",
                                                            success:data=>{

                                                                            if(data.length>0)
                                                                            { 
                                                                                $("#collin").html(`<div class="accordion apn" id="accordionExample" data-id="give"></div>`);
                                    
                                                                             var i;
                                                                             var value;   
                                                                             var key,val;
                                                                             var tot=[0];
                                                                              $.each(data,function(dat,value){
                                                                               
                                                                                var obj=value;
                                                                                for(key in obj)
                                                                                {
                                                                                  $("#addplaylist").html("");
                                                                                  $("#addmusic").html("");
                                                                                   $("#chn").val(key);
                                                                                  $(".apn").append(`<div class="card" style="background:black;color:white;" id="apn" data-tarpl="`+key+`">
                                                                                  <div class="card-header" id="headingOne" style="padding:0px !important;outline-width: 0px !important;outline-style: none;outline-color: black !important;border:0px solid black !important;">
                                                                                  <h2 class="mb-0">
                                                                                    <a class="btn btn-link btn-block text-left" data-id="`+key+`" id="colp"  style="text-decoration:none !important;outline-width: 0px !important;outline-style: none;outline-color: black !important;border:0px solid black !important;"  type="button"  data-target="#collapseOne" aria-expanded="true" >
                                                                                      <i class="fa fa-plus-square" aria-hidden="true">&nbsp;</i>`+key+`
                                                                                    </a>
                                                                                  </h2>
                                                                                </div>
                                                                            
                                                                                <div id="collapseOne-`+key+`"  style="background:black;color:white;" class="ro" data-id="none">
                                                                                  <div class="card-body " style="background:black;color:white;padding:0px !important;" id="ace" data-id="get">
                                                                                  <ul class="list-group" id="bdy-`+key+`" style="display:none;" data-tim="`+key+`" class="ctch">
                                                                                  <li class="list-group-item"  style="background:black ;">
                                                                                   <span id="do" style="cursor:pointer;" data-myplays="`+key+`"><i class="fa fa-plus-circle" aria-hidden="true">&nbsp;</i>Add New&nbsp;&nbsp;</span>
                                                                                   <span id="deleteplaylist" style="cursor:pointer;" data-playlist="`+key+`"><i class="fa fa-trash" aria-hidden="true">&nbsp;</i>Remove Playlist</span>
                                                                                   </li>
                                                                                  </ul>
                                                                                  </div>
                                                                                </div>
                                                                              </div>`);
                                                                              var playread={};
                                                                              var jsmediatags1 = window.jsmediatags;
                                                                              var assignkey=key;
                                                                              jsmediatags1.read(window.location.href+"playlists/Playlist-"+assignkey+"/"+obj[assignkey][0],{
                                                                                onSuccess: function(tag) {
                                                                                    playread = tag;
                                                                                    var pic = playread.tags.picture; // create reference to track art
                                                                                   var base64String = "";
                                                                                   for (var i = 0; i < pic.data.length; i++) {
                                                                                   base64String += String.fromCharCode(pic.data[i]);
                                                                                   }
                                                                                   imageri = "data:" + pic.format + ";base64," + window.btoa(base64String);
                                                                                   
                                                                                   $("#addplaylist").prepend(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4" style="padding-bottom:0px;" id="findit1">
                                                                                   <div style="padding:10px;height:45.6vh;background:rgba(0,0,0,0.46);border-radius:2px;">     
                                                                                   <div style="position:relative;">
                                                                                   <div style="max-width:40px;max-height:40px;position:absolute;top:44%;left:45%;transform:translateY(-44%,-45%);">
                                                                                   <img src="./img/playlist.png" alt="play" style="width:40px;height:40px;" id="screenplaylist" data-getkey="`+assignkey+`" data-ssong="`+obj[assignkey][0]+`">
                                                                                   </div>
                                                                                   <div id="hidedata" style="display:none;">
                                                                                   </div>

                                                                                   <img src="`+imageri+`" class="rounded mx-auto d-block img torrento" alt="..." data-song="`+obj[assignkey][obj[assignkey].length-1]+`" data-id="`+assignkey+`" id="myplaylistplay" data-mink="`+assignkey+`" style="width: 100%;
                                                                                   height: 43vh;
                                                                                   object-fit:cover;">
                                                                                   </div>
                                                                                   </div>
                                                                                   <h5 class="caphead" >`+assignkey+`
                                                                                   </h5>
                                                                                   <small class="cap">`+"Mix"+" | "+"playlist"+`</small>

                                                                                   </div>
                                                                                   
                                                                                   
                                                                         `);

                                                                                  }, 
                                                                                  onError: function(error) {
                                                                                     // handle error
                                                                                     console.log(error);
                                                                                  }

                                                                               }                                                                                       
                                                                              );





                                                                                 //click to toggle innerContent:-
                                                                                  for(i=0;i<obj[key].length;i++)
                                                                                  { 
                                                                                   
                                                                                    ar=obj[key][i];
                                                                                    let g=parseInt(i)-1;
                                                                                    let f=parseInt(i)+1;
                                                                                    let mysn=obj[key][i].substr(0,14)+"...";
                                                                                 $("#bdy-"+key).prepend(`<li class="list-group-item "`+key+` id="targ" data-so="`+obj[key][i]+`" style="background:black ; border-bottom:1px solid grey !important;">
                                                                                   <span class="playpauseprevnext">
                                                                                  `+mysn+`  
                                                                                  <div id="prevt" data-plays="`+key+`" data-prev="`+obj[key][f]+`" class="dis `+key+i+"a"+`" data-previouscheck="none"></div>                                                                                  
                                                                                  <div id="playpaused" data-id="`+key+`" data-song="`+obj[key][i]+`" class="pr "`+key+` data-playcheck="none"></div>
                                                                                  <div id="nextt" data-play="`+key+`" data-next="`+obj[key][g]+`" data-nextcheck="none" class="`+key+i+"c"+`"></div>
                                                                                  </span>
                                                                                  <span style="color:blue;font-size:13px;cursor:pointer;" id="remove" data-remove="`+obj[key][i]+`" data-playlist="`+key+`"><i class="fa fa-trash" aria-hidden="true">&nbsp;</i>remove from playlist</span>
                                                                                </li>`);
                                                                                    if(i==0)
                                                                                    {
                                                                                  
                                                                                     $("."+key+i+"c").css({"background-image":"none","pointer-events":"none"});
                                                                                    }
                                                                                    if(i==obj[key].length-1)
                                                                                    {
                                                                                      $("."+key+i+"a").css({"background-image":"none","pointer-events":"none"});
                                                                                    }
                                                                                    
                                                                                   $("#hidedata").append(`<span id="allplaylistsong" data-playlis="`+key+`" data-csng="`+obj[key][i]+`"></span>`);
                                                                                    var title;
                                                                                    var artist;
                                                                                    var album;
                                                                                    var year;
                                                                                    var imageUri;
                                                                                    var comments;
                                                                                    let getlocation=window.location.href;
                                                                                    var jsmediatags = window.jsmediatags;
                                                                                    var curin=i;
                                                                                    var tags = {};
                                                                                    
                                                                                     function mainlod(tag,keys,songing)
                                                                                     {
                                                                                     
                                                                                      tags = tag;
                                                                                      var picture = tags.tags.picture; // create reference to track art
                                                                                     var base64String = "";
                                                                                     for (var i = 0; i < picture.data.length; i++) {
                                                                                     base64String += String.fromCharCode(picture.data[i]);
                                                                                     }
                                                                                     imageUri = "data:" + picture.format + ";base64," + window.btoa(base64String);
                                                                                      $("#setimage").attr("src",imageUri);
                                                                                      title=tags.tags.title;
                                                                                      if(title.length>70)
                                                                                      {
                                                                                        title=title.substr(0,70);
                                                                                      }
                                                                                      else 
                                                                                      {
                                                                                        title=tags.tags.title;;
                                                                                      }
                                                                                      if(tags.tags.artist==undefined)
                                                                                      {
                                                                                        artist="My Music";
                                                                                      }
                                                                                      else 
                                                                                      {
                                                                                        artist=tags.tags.artist;
                                                                                      }
                                                                                      if(tags.tags.album==undefined)
                                                                                      {
                                                                                        album="Top Hits";
                                                                                      }
                                                                                      else
                                                                                      {
                                                                                        album=tags.tags.album;
                                                                                      }
                                                                                      year=tags.tags.year;
                                                                                      $("#prevt").data("previouscheck",title);
                                                                                      $("#nextt").data("nextcheck",title);
                                                                                      $("#playpaused").data("playcheck",title.replace(/["']/g, ""));
                                                                                      let col=$("#playpaused").data("playcheck");
                                                                                      $("#addmusic").prepend(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4" style="padding-bottom:0px;" id="findit" data-find="`+keys+`">                
                                                                                      <div style="padding:10px;height:45.6vh;background:rgba(0,0,0,0.46);border-radius:2px;">     
                                                                                      <div style="width:100%;position:relative !important;">
                                                                                      <div style="max-width:40px;max-height:40px;position:absolute;top:44%;left:45%;transform:translateY(-44%,-45%);" id="setimag">
                                                                                      <img src="./img/myplay.png" alt="play" style="width:40px;height:40px;" id="screensong" data-sn="`+songing+`" data-id="`+keys+`" data-artist="" data-album="" data-year="">
                                                                                     </div>
                                                                                      <img src="`+imageUri+`" class="rounded mx-auto d-block img" alt="..." id="screenclick" data-id="`+keys+`" data-song="`+songing+`" style=" width: 100%;
                                                                                      height: 43vh;
                                                                                      object-fit:cover;">
                                                                                      </div>
                                                                                     
                                                                                      </div>
                                                                                      <h5 class="caphead" style="margin-bottom:0px;" >`+title+`
                                                                                      </h5>
                                                                                      <small class="cap">`+artist+" | "+album+`</small>

                                                                                      </div>
                                                                                      
                                                                                      
                                                                            `);
                                                                                     }
                                                                                    function selfexec(songing,keys)
                                                                                    {
                                                                                    jsmediatags.read(getlocation+"playlists/Playlist-"+keys+"/"+songing,{
                                                                                     onSuccess: function(tag) {
                                                                                          mainlod(tag,keys,songing);
                                                                                                                                                                                  
                                                                                       }, 
                                                                                       onError: function(error) {
                                                                                          // handle error
                                                                                          console.log(error);
                                                                                       }
                                                                                      
                                                                                    }                                                                                       
                                                                                   );
                                                                                  }
                                                                                  selfexec(obj[key][i],key);

                                                                        
                                                                                  }

                                                                                }                                           

                                    
                                                                              });
                                                                            }
                                                                            else
                                                                            {
                                                                              $("#collin").html("You have no playlist yet..");
                                                                            }
                                                                          
                                                                          }
                                                          });
                                                   
                                                  }
                                    load();

                                    


var playlists;
$("#createplaylist").on("submit",function(e){
    var ev=this;
    e.preventDefault();
    let regex=/\s/;
    let playli=$("#playlistname").val();
    let filt=regex.test(playli);
    if($("#playlistname").val()=="" || $(".nw").val()=="")
    {
    notification("#notification","Please! fill all fields",false);
    }
    else if(filt==true)
    {
      notification("#notification","No gaps between playlist name",false);
    }
    else
    {
    playlists=new FormData(this);
    $.ajax({
            url:"php/sendplaylist.php",
            type:"POST",
            data:playlists,
            async:true,
            dataType:"json",
            beforeSend:function(){
              $.LoadingOverlay("show");
            },
            complete:function(){
              $.LoadingOverlay("hide");
            },
            contentType:false,
            processData:false,
            success:data=>{
                        if(data.status==true)
                        {
                            notification("#notification",data.message,data.status);
                            $("#staticBackdrop").slideUp('slow');
                            $(".modal-backdrop").hide();
                            $(ev).trigger("reset",true);
                            $('body').removeClass('modal-open');
                            $("#showhide").on("click",function(e){
                            e.preventDefault();
                            $("#staticBackdrop").slideDown('slow');
                            $(".modal-backdrop").show();
                        });
                        }
                        else
                        {        
                            notification("#notification",data.message,data.status);
                        }
                        setTimeout(load,1000);

                       }
          });

    }
  });




$(document).on("click","#colp",function(e){

var data=$(this).data("id");
$("#bdy-"+data).slideToggle('slow');
if($(this).children("i").hasClass("fa-plus-square"))
{
    $(this).children("i").addClass("fa-minus-square");
    $(this).children("i").removeClass("fa-plus-square");  

}
else 
{
    $(this).children("i").addClass("fa-plus-square");
    $(this).children("i").removeClass("fa-minus-square");  

}

});


//=====songs_playlist_track_started======//


//to show first song//

$.ajax({
        
        url:"php/file.json",
        type:"POST",
        dataType:"json",
        success:data=>{
                          var first;
                          var keyfirst;
                        $.each(data,function(key1,val1){
                          for(key2 in val1)
                          {
                            keyfirst=key2;
                            first=val1[key2][val1[key2].length-1];
                            break;
                          }
                          return false;
                        });
                        fetchRecords(keyfirst,first);

         }

                     
                    


});

//function to fetch songs record


var fetchRecords=(key,songRecord)=>{
let newtitle;
let album;
var playreads={};
var jsmediatags2 = window.jsmediatags;
jsmediatags2.read(window.location.href+"playlists/Playlist-"+key+"/"+songRecord,{
  onSuccess: function(tag) {
      playreads = tag;
      var pici = playreads.tags.picture; // create reference to track art
     var base64Strings = "";
     for (var i = 0; i < pici.data.length; i++) {
     base64Strings += String.fromCharCode(pici.data[i]);
     }
    finalimage = "data:" + pici.format + ";base64," + window.btoa(base64Strings);
    $("#pic").css({"background-image":"url("+finalimage+")","background-size":"174%","background-repeat":"no-repeat","background-position":"center"});
    if(playreads.tags.title.length>30)
    {
      newtitle=playreads.tags.title.substr(0,24)+"..";
    }
    else 
    {
      newtitle=playreads.tags.title;

    }
    if(playreads.tags.album==undefined)
    {
     album="Top Hits"
    }
    else 
    {
    album=playreads.tags.album;
    }
    $("#maintitle").html(newtitle+`-`+`<span id="album">`+album+`</span>`);
    $("#artist").html(playreads.tags.artist);
    }, 
    onError: function(error) {
       // handle error
       console.log(error);
    }

 }                                                                                       
);
}
//fetch songs record completed

//to click screen songs




//change track in diffrent playlist
var arr=[];
var isplay="";
var aud="";
var chk="";
var son=(eve)=>{
               
                if(next==$(eve).data("song"))
                {
                   song.pause();
                   $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
                   $(".contain").css({"background":"url(./img/myplay.png)","background-size":"cover"});      
                   isplay=true;
                   $("#pic").addClass("picstopped");
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.png"); 
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/playlist.png");                 

                   chk="a";
                  }
                
                else if(previous==$(eve).data("song"))
                {
                   song.pause();
                   $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
                   $(".contain").css({"background":"url(./img/myplay.png)","background-size":"cover"});      
                   isplay=true;
                   $("#pic").addClass("picstopped");
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.png"); 
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/playlist.png");                 

                   chk="a";

                }

                 else if(previous!="")
                  {
                    $(".pr[data-song='"+previous+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
                   $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/pause.png)","background-size":"cover"}); 
                   song.src="./playlists/playlist-"+$(eve).data("id")+"/"+$(eve).data("song");
                   $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});     
                   $(".pr[data-song='"+$(eve).data("song")+"']").parents("#targ").siblings().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.gif"); 
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/musicplay.webp");                 
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

                   song.play();
                   previous="";
                   isplay=true;
                   chk="";
                   capt=$(eve).data("song");
                   fetchRecords($(eve).data("id"),$(eve).data("song"));
                   $("#pic").addClass("picanimation");
                   $("#pic").removeClass("picstopped");

                  }
                 else if(next!="")
                  {
                    $(".pr[data-song='"+next+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
                   $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/pause.png)","background-size":"cover"}); 
                   $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});     
                   $(".pr[data-song='"+$(eve).data("song")+"']").parents("#targ").siblings().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});  
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.gif"); 
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/musicplay.webp");                 
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

                   song.src="./playlists/playlist-"+$(eve).data("id")+"/"+$(eve).data("song");
                   capt=$(eve).data("song");
                   song.play();
                   next="";
                   isplay=true;
                   chk="";
                   fetchRecords($(eve).data("id"),$(eve).data("song"));
                   $("#pic").addClass("picanimation");
                   $("#pic").removeClass("picstopped");

                  }
                
               else 
               {
              if(isplay==true)
              {     
               if(aud!=$(eve).data("song"))
               {   
                  if(chk=="")
                  {
                   song.src="./playlists/playlist-"+$(eve).data("id")+"/"+$(eve).data("song");
                   capt=$(eve).data("song");
                   fetchRecords($(eve).data("id"),$(eve).data("song"));
                  }
                   song.play();
                   $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});    
                   $(".pr[data-song='"+aud+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});  
                   $(".pr[data-song='"+$(eve).data("song")+"']").parents("#targ").siblings().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
                   $("#pic").addClass("picanimation");
                   $("#pic").removeClass("picstopped");
                   $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.gif"); 
                   $("#screensong[data-sn='"+$(eve).data("song")+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/musicplay.webp");                 
                   $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

                  }
               else
               {
                  song.pause();
                  $(".contain").css({"background":"url(./img/myplay.png)","background-size":"cover"});      
                  $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
                  $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.png");     
                  $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/playlist.png");                      
                  isplay="";   
                  $("#pic").addClass("picstopped");

               }   
              }
              else 
              {
               isplay=true;   
              $(".pr[data-song='"+$(eve).data("song")+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});  
              $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});
              $("#screensong[data-sn='"+$(eve).data("song")+"']").attr("src","./img/myplay.gif");   
              $("#screenplaylist[data-getkey='"+$(eve).data("id")+"']").attr("src","./img/musicplay.webp");   
              $(".pr[data-song='"+$(eve).data("song")+"']").parents("#targ").siblings().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
              if(aud!=$(eve).data("song"))
              { 
                fetchRecords($(eve).data("id"),$(eve).data("song"));
                var dr;
                song.src="./playlists/playlist-"+$(eve).data("id")+"/"+$(eve).data("song");
                capt=$(eve).data("song");
                
                
              }  
              $("#pic").addClass("picanimation");
              $("#pic").removeClass("picstopped");
              song.play();
              }
            }
           
            if(next==$(eve).data("song"))
            {
             aud="";
             next="";
            }
            else if(previous==$(eve).data("song") )
            {
           aud="";
           previous="";
           }
           else 
           {
          aud=$(eve).data("song");
          chk="";
          }

            if($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().prev().children(".ro").children().children().children().last().prev().children().children("#playpaused").data("song") || $(".pr[data-song='"+capt+"']").parents("#targ").prev().children().children("#playpaused").data("song"))
            {
              $(".previous").css({"opacity":"1","cursor":"pointer","pointer-events":"all"});  
            }
            else 
            {
              $(".previous").css({"opacity":"0.4","pointer-events":"none"});  

            }
             }
var song=new Audio(); 
song.crossOrigin="anonymous";
var st="";
var sr=""; 
$(document).on("click","#playpaused,#screenclick,#myplaylistplay",function(e){
  console.log($(this).data("song"));
son(this);    
st=this;
sr=$(this).next();
});


//====main-body-play-all-songs completed===//
var capt="";
var mbs="";
var mba=[];
var keya=[];
var plays=false;
var o=0;
var p=0;
var f;
var ts;
var mainnext="";
var mainprevious="";
var d=0;
var mn;
var store;
//main-pause-play-start
var newcheck=capt;

$(document).on("click",".contain",function(e){
  if(capt!="")
  {
    
   var storing;
    if(isplay==true)
    {
      $(this).css({"background":"url(./img/myplay.png)","background-size":"cover"});
      isplay=false;
      song.pause();
      $(".pr[data-song='"+capt+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
      newcheck=capt;
      $("#pic").addClass("picstopped");
      $("#screensong[data-sn='"+capt+"']").attr("src","./img/myplay.png"); 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").attr("src","./img/playlist.png");                 

    }
   else 
   {
    
    $(this).css({"background":"url(./img/pause.png)","background-size":"cover"});
    song.play();
    isplay=true;
    $(".pr[data-song='"+capt+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#pic").removeClass("picstopped");
    $("#pic").addClass("picanimation");
    $("#screensong[data-sn='"+capt+"']").attr("src","./img/myplay.gif"); 
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

    newcheck=capt;
   }
  }
  else
  {
  
  k=0;
 var kp="";
 var kps="";

$(".pr").each(function()
  {

    keya[k]=$(this).data('id');
    mba[k]=$(this).data("song");
    k++;
  
  });   
   if(plays==false)
   {
   if(mbs!=mba[0] && mainnext=="")
   {  
    if(p>mba.length-1)
    {
    p=0;
    song.src="./playlists/Playlist-"+keya[p]+"/"+mba[p];
    fetchRecords(keya[p],mba[p]);
    $("#pic").addClass("picanimation");
    $("#pic").removeClass("picstopped");
$("#myplaylistplay[data-id='"+keya[p]+"']").data("song",mba[p]);
   } 
   else
   {
   song.src="./playlists/Playlist-"+keya[p]+"/"+mba[p];
   fetchRecords(keya[p],mba[p]);
   $("#pic").addClass("picanimation");
   $("#pic").removeClass("picstopped");
   $("#myplaylistplay[data-id='"+keya[p]+"']").data("song",mba[p]);

   }
   }
   if(mainnext!="" )
   {
    $(".pr[data-song='"+mainnext+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#screensong[data-sn='"+mainnext+"']").attr("src","./img/myplay.gif"); 
    $("#pic").addClass("picanimation");
   $("#pic").removeClass("picstopped");
   $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mainnext+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
   $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mainnext+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

   }
   else if(mainprevious!="")
   {
   
    $(".pr[data-song='"+mainprevious+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#screensong[data-sn='"+mainprevious+"']").attr("src","./img/myplay.gif"); 
    $("#pic").addClass("picanimation");
   $("#pic").removeClass("picstopped");
   $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mainprevious+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
   $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mainprevious+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

   }
   else
   {
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[p]+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[p]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
    $(".pr[data-song='"+mba[p]+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#screensong[data-sn='"+mba[p]+"']").attr("src","./img/myplay.gif"); 
    $("#pic").addClass("picanimation");
   $("#pic").removeClass("picstopped");
    
   }
   song.play();
   $(this).css({"background":"url(./img/pause.png)","background-size":"cover"});
   isplay=true;
   aud=mba[p];
   mbs=mba[0];      
   plays=true;
   kp=mba[p];
   }
   else
   {
    if(mainnext!="")
    {
    
     $(".pr[data-song='"+mainnext+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
     $("#pic").addClass("picstopped");
     $("#screensong[data-sn='"+mainnext+"']").attr("src","./img/myplay.png"); 
     $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mainnext+"']").data("id")+"']").attr("src","./img/playlist.png");                 
     mainprevious="";
    }
    else if(mainprevious!="")
    {
     
     $(".pr[data-song='"+mainprevious+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
     $("#pic").addClass("picstopped");
     $("#screensong[data-sn='"+mainprevious+"']").attr("src","./img/myplay.png"); 
     $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mainprevious+"']").data("id")+"']").attr("src","./img/playlist.png");                 
     mainnext="";
    }
    else
    {
      
       $(".pr[data-song='"+mba[p]+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});   
       $("#pic").addClass("picstopped");
       $("#screensong[data-sn='"+mba[p]+"']").attr("src","./img/myplay.png"); 
       $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[p]+"']").data("id")+"']").attr("src","./img/playlist.png");                 
 

    }
   
    
    $(this).css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
    $("#pic").addClass("picstopped");
    isplay=false;
    aud=mba[p];
    song.pause();
    plays=false;
    kps='a';
   }
  var pp="a";
  
  if(p>0 || o>0)
  {
    $(".previous").css({"opacity":"1","cursor":"pointer","pointer-events":"all"});  
  }
  else if(o<1 && p<1) 
    {
     $(".previous").css({"opacity":"0.4","pointer-events":"none"});        
    }
  }
  });

  //main-pause-play-complete
  
  //main-next-start

  $(document).on("click",".next",function(){
    if(capt!="")
    {
      $(".previous").css({"opacity":"1","cursor":"pointer","pointer-events":"all"});  

      if($(".pr[data-song='"+capt+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("song"))
      {
        let csong=$(".pr[data-song='"+capt+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("song");
        let ckey=$(".pr[data-song='"+capt+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("id");
        song.src="./playlists/Playlist-"+ckey+"/"+csong;
        fetchRecords(ckey,csong);
        $("#pic").addClass("picanimation");
        $("#pic").removeClass("picstopped");
        capt=csong;
        song.play();
        isplay=true;
        $(".pr[data-song='"+capt+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $(".pr[data-song='"+capt+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
        $("#screensong[data-sn='"+capt+"']").attr("src","./img/myplay.gif"); 
        $("#screensong[data-sn='"+capt+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");   
        $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").data("song",capt);                            
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
        aud=capt;
        next=capt;
      }
      else 
      {
        if($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().next().children(".ro").children().children().children().children().children("#playpaused").data("song"))
        {
       let localstore=$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().next().children(".ro").children().children().children().children().children("#playpaused").data("song");
      let localprev= $(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().children(".ro").children().children().children().last().prev().children().children("#playpaused").data("song");

       song.src="./playlists/Playlist-"+$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().next().data("tarpl")+"/"+localstore;
       song.play();
       fetchRecords($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().next().data("tarpl"),localstore);
       capt=localstore;
       aud=capt;
       next=capt;
       isplay=true;
       $("#pic").addClass("picanimation");
       $("#pic").removeClass("picstopped");
       $(".pr[data-song='"+localstore+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
       $(".pr[data-song='"+localprev+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
       $("#screensong[data-sn='"+localstore+"']").attr("src","./img/myplay.gif"); 
       $("#screensong[data-sn='"+localstore+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
       $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+localstore+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
       $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+localstore+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
       $("#myplaylistplay[data-gid='"+$("#screensong[data-sn='"+localstore+"']").data("id")+"']").data("song",capt);                            
        }
        else 
        {
          let rcsong=$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children().children().children().children().children("#playpaused").data("song");
          song.src="./playlists/Playlist-"+$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().parent().children().data("tarpl")+"/"+rcsong;
          song.play();
          $("#pic").addClass("picanimation");
          $("#pic").removeClass("picstopped");
          fetchRecords($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().parent().children().data("tarpl"),rcsong);
          $(".pr[data-song='"+rcsong+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
          $(".pr[data-song='"+capt+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
          $("#screensong[data-sn='"+rcsong+"']").attr("src","./img/myplay.gif"); 
          $("#screensong[data-sn='"+rcsong+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
          $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+rcsong+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
          $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+rcsong+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
    
          capt=rcsong;
          aud=capt;
          next=capt;
          isplay=true;
          $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+rcsong+"']").data("id")+"']").data("song",capt);                            

         
        }

      }
    
      previous="";
    }
    else 
    {
    f=0;
    $(".pr").each(function()
  {
    keya[f]=$(this).data('id');
    mba[f]=$(this).data("song");
    f++;
  
  });    
    if(plays==false)
    {
      mainprevious="";
      if(o+1>mba.length-1)
      {
        o=1;       
      }
      else 
      {
      o++;
      }
      song.src="./playlists/Playlist-"+keya[o]+"/"+mba[o];
      plays=true;
      song.play();
      $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});  
      mainnext=mba[o]; 
      mn=mainnext;
      fetchRecords(keya[o],mba[o]);
      $("#pic").addClass("picanimation");
      $("#pic").removeClass("picstopped");
      $(".pr[data-song='"+mba[o]+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
      $("#screensong[data-sn='"+mba[o]+"']").attr("src","./img/myplay.gif"); 
      $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
      $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").data("song",mba[o]);                            

      if(mn==mba[0])
      {
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[keya.length-1]).children().last().prev().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
  
      }
      else if(mn==mba[1])
      {
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[keya.length-1]).children().last().prev().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
  
      }
      else
      {
      if($(".pr[data-song='"+mba[o]+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").data("song"))
      {
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
        }
      else
      {
        if($(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().prev().data("tarpl"))
        {
         
          $(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[o-1]).children().last().prev().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
          $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
          $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
    
        }
       
      }
    }
      isplay=true;
      aud=mba[o]; 
    }
    else 
    {  
      mainprevious="";    
      if(o+1>mba.length-1)
      {
        o=1;
     
      }
      else 
      {
      o++;
     
      }
      song.src="./playlists/Playlist-"+keya[o]+"/"+mba[o];
      plays=true;
      song.play();
      $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});   
      mainnext=mba[o];
      mn=mainnext;
      $(".pr[data-song='"+mba[o]+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
      $("#screensong[data-sn='"+mba[o]+"']").attr("src","./img/myplay.gif"); 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
      $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").data("song",mba[o]);                           
      fetchRecords(keya[o],mba[o]);
      $("#pic").addClass("picanimation");
      $("#pic").removeClass("picstopped");

      if(mn==mba[0])
      {
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[keya.length-1]).children().last().prev().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

      }
      else if(mn==mba[1])
      {
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[keya.length-1]).children().last().prev().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
  
      }
      
      if($(".pr[data-song='"+mba[o]+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").data("song") )
      {
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

      }
    
      else
      {
        
      if($(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().prev().data("tarpl"))
      {
       
        $(".pr[data-song='"+mba[o]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[o-1]).children().last().prev().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
        $("#screensong[data-sn='"+mba[o]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
        $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[o]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
  
      }
       
      }
    
     isplay=true;
    aud=mba[o]; 
    }
    
    if(p>0 || o>0)
    {
      $(".previous").css({"opacity":"1","cursor":"pointer","pointer-events":"all"});  
    }
    else if(o<1 && p<1) 
    {
     $(".previous").css({"opacity":"0.4","pointer-events":"none"});   
     
    }
  }
  });

  //main-next-complete

  //main-previous-start
  $(document).on("click",".previous",function()
  {
    if(capt!="")
    {
      if($(".pr[data-song='"+capt+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").data("song"))
      {
      $(".previous").css({"opacity":"1","cursor":"pointer"});   
      let csong=$(".pr[data-song='"+capt+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").data("song");
      let ckey=$(".pr[data-song='"+capt+"']").parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").data("id");
      song.src="./playlists/Playlist-"+ckey+"/"+csong;
      fetchRecords(ckey,csong);
      $("#pic").addClass("picanimation");
      $("#pic").removeClass("picstopped");
      capt=csong;
      song.play();
      isplay=true;
      $(".pr[data-song='"+capt+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
      $(".pr[data-song='"+capt+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
      $("#screensong[data-sn='"+capt+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
      $("#screensong[data-sn='"+capt+"']").attr("src","./img/myplay.gif"); 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
      $("#myplaylistplay[data-getkey='"+$("#screensong[data-sn='"+capt+"']").data("id")+"']").data("song",capt);                            


      aud=capt;
      previous=capt;
      $(".previous").css({"opacity":"1","cursor":"pointer","pointer-events":"all"});  
      }
      else 
      {
        if($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().prev().children(".ro").children().children().children().last().prev().children().children("#playpaused").data("song"))
        {
          $(".previous").css({"opacity":"1","cursor":"pointer"});   
       let localstore=$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().prev().children(".ro").children().children().children().last().prev().children().children("#playpaused").data("song");
       $(".pr[data-song='"+localstore+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
       $(".pr[data-song='"+capt+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});
       $("#screensong[data-sn='"+localstore+"']").attr("src","./img/myplay.gif"); 
       $("#screensong[data-sn='"+localstore+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
       $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+localstore+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
       $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+localstore+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
 
       song.src="./playlists/Playlist-"+$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().prev().data("tarpl")+"/"+localstore;
       fetchRecords($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().prev().data("tarpl"),localstore);
       $("#pic").addClass("picanimation");
       $("#pic").removeClass("picstopped");
       song.play();
       capt=localstore;
       aud=capt;
       previous=capt;
       isplay=true;
       $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+localstore+"']").data("id")+"']").data("song",capt);                            

        }
        else
        {
         // $(".previous").css({"opacity":"0.4","pointer-events":"none"});   
        }
      }
      next="";
    }
    else 
    {
    ts=0;
    $(".pr").each(function()
   {
    keya[ts]=$(this).data('id');
    mba[ts]=$(this).data("song");
    ts++;  
  });   
   
   if(p>0 || o>0)
   {
     if(mn=="")
     {
     if(p>1)
     {
     d=--p;
     }
     else 
     {
      $(".previous").css({"opacity":"0.4","pointer-events":"none"}); 
      d=--p;
     }
     }
     else 
     {
     if(o>1)
     {
     d=--o;
     }
     else
     {
      $(".previous").css({"opacity":"0.4","pointer-events":"none"});   
      d=--o;
      
     }

     }
     mainprevious=mba[d];
    song.src="./playlists/Playlist-"+keya[d]+"/"+mba[d];
    plays=true;
    song.play();
    fetchRecords(keya[d],mba[d]);
    $("#pic").addClass("picanimation");
    $("#pic").removeClass("picstopped");
    $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});  
    $(".pr[data-song='"+mba[d]+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#screensong[data-sn='"+mba[d]+"']").attr("src","./img/myplay.gif"); 
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[d]+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[d]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
    $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+mba[d]+"']").data("id")+"']").data("song",mba[d]);                            

    if($(".pr[data-song='"+mba[o]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("song"))
    {
      $(".pr[data-song='"+mba[d]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
      $("#screensong[data-sn='"+mba[d]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[d]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

    }
    else
    {
      $(".pr[data-song='"+mba[d]+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children("#ace").children("#bdy-"+keya[o+1]).children().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
      $("#screensong[data-sn='"+mba[d]+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");                               
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+mba[d]+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

    }
    
    isplay=true;
    aud=mba[d];
    plays=true;
    mainnext="";
   }
  }
  });

  if(o<1 && p<1) 
    {
     $(".previous").css({"opacity":"0.4","pointer-events":"none"});   
     
    }

 //main-previous-complete//   

//====main-body-play-all-songs completed===//

//data-play data-next

//change track to next
var ck="";
var previous="";
var next="";
var sm="";
$(document).on("click","#nextt",function()
{
nextt(this);  
});

function nextt(me)
{ 
$(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});      
let p=$(me).data("play");
sm=$(me).data("next"); 
if(aud!="")
{
  $(".pr[data-song='"+aud+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
  $("#screensong[data-sn='"+aud+"']").attr("src","./img/myplay.png"); 
  $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+aud+"']").data("id")+"']").attr("src","./img/playlist.png");                 

}
if(previous!="")
{
  $(".pr[data-song='"+previous+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});  
  $("#screensong[data-sn='"+previous+"']").attr("src","./img/myplay.png");   
  $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+previous+"']").data("id")+"']").attr("src","./img/playlist.png");                 

  previous="";
} 
if(next!=sm)
{
  $(".pr[data-song='"+next+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});  
  $("#screensong[data-sn='"+next+"']").attr("src","./img/myplay.png"); 
  $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+next+"']").data("id")+"']").attr("src","./img/playlist.png");                 

  
}
if(ck!="")
{
$(me).prev().css({"background":"url(./img/myplay.png)","background-size":"cover"});
$(me).parents("#targ").next().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/pause.png)","background-size":"cover"});
song.src="./playlists/playlist-"+p+"/"+sm;
song.play();
capt=sm;
fetchRecords(p,sm);
$("#screensong[data-sn='"+sm+"']").attr("src","./img/myplay.gif"); 
$("#screensong[data-sn='"+sm+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png"); 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+sm+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+sm+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

$("#pic").addClass("picanimation");
$("#pic").removeClass("picstopped");
$("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+sm+"']").data("id")+"']").data("song",capt);                            

}
else
{
$(me).parents("#targ").next().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/pause.png)","background-size":"cover"});
song.src="./playlists/playlist-"+p+"/"+sm;
song.play();
fetchRecords(p,sm);
$("#screensong[data-sn='"+sm+"']").attr("src","./img/myplay.gif"); 
$("#screensong[data-sn='"+sm+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");  
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+sm+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+sm+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

$("#pic").addClass("picanimation");
$("#pic").removeClass("picstopped");
ck=sm;
capt=sm;
$("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+sm+"']").data("id")+"']").data("song",capt);                            

}
next=sm;
}

//change track to next complete

//change track to previous 

$(document).on("click","#prevt",function(e)
{
 
  plays=true;
let p=$(this).data("plays");
let s=$(this).data("prev"); 
$(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});      

if(aud!="")
{
  $(".pr[data-song='"+aud+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});    

  $("#screensong[data-sn='"+aud+"']").attr("src","./img/myplay.png"); 
  $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+aud+"']").data("id")+"']").attr("src","./img/playlist.png");                 

}
if(next!="")
{
  $(".pr[data-song='"+next+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});    
  
$("#screensong[data-sn='"+next+"']").attr("src","./img/myplay.png"); 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+next+"']").data("id")+"']").attr("src","./img/playlist.png");                 

  next="";
} 
if(previous!=s)
{
  $(".pr[data-song='"+previous+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});  
  
$("#screensong[data-sn='"+previous+"']").attr("src","./img/myplay.png"); 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+previous+"']").data("id")+"']").attr("src","./img/playlist.png");                 

}
if(ck!="")
{  
  $(this).parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/pause.png)","background-size":"cover"});
  $(this).next().css({"background":"url(./img/myplay.png)","background-size":"cover"});
  song.src="./playlists/playlist-"+p+"/"+s;
  song.play();
  capt=s;
  
$("#screensong[data-sn='"+s+"']").attr("src","./img/myplay.gif"); 
$("#screensong[data-sn='"+s+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");  
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+s+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+s+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

fetchRecords(p,s);
$("#pic").addClass("picanimation");
$("#pic").removeClass("picstopped");
$("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+s+"']").data("id")+"']").data("song",s);                            

}
else 
{ 
  $(this).parents("#targ").prev().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/pause.png)","background-size":"cover"});
  song.src="./playlists/playlist-"+p+"/"+s;
  song.play();
  ck=s;
  capt=s;
  
$("#screensong[data-sn='"+s+"']").attr("src","./img/myplay.gif"); 
$("#screensong[data-sn='"+s+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");  
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+s+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+s+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
fetchRecords(p,s);
$("#pic").addClass("picanimation");
$("#pic").removeClass("picstopped");
$("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+s+"']").data("id")+"']").data("song",s);                            
}
previous=s;
});

//change track to previous complete


//=====songs_playlist_track_completed======//

//=====song_end_and_switch_to_next_start======//




$(song).on("ended",function(){
let w=$(this).attr('src');
let r=w.split("/");
if($(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("song"))
{
  $("#pic").addClass("picanimation");
    $("#pic").removeClass("picstopped");
$(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});
o++; 
p++;
}
else
{
  if(capt=="")
  {
  $(".contain").css({"background":"url(./img/myplay.png)","background-size":"cover"});  
  $("#screensong[data-sn='"+r[r.length-1]+"']").attr("src","./img/myplay.png"); 
  $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+r[r.length-1]+"']").data("id")+"']").attr("src","./img/playlist.png");                 
  $("#pic").addClass("picstopped");
  $("#pic").removeClass("picanimation");
  $("#inner").css({"width":"0%"});
  $("#cir").css({"left":"0%"});
  }
  else 
  {
    $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#pic").addClass("picanimation");
    $("#pic").removeClass("picstopped");
  }
  mainnext="";
  p=o+1; 
  mbs="";
  plays=false;
  o++;
}  

if(o>0 || p>0) 
    {
     $(".previous").css({"opacity":"1","cursor":"pointer","pointer-events":"all"});        
    } 
if(capt!="")
{  
  if($(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data('song'))
  {
    $(".pr[data-song='"+r[r.length-1]+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});    
    $(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/pause.png)","background-size":"cover"});
    $("#screensong[data-sn='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data('song')+"']").attr("src","./img/myplay.gif"); 
    $("#screensong[data-sn='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data('song')+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");  
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data('song')+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
    $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data('song')+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
    
    let getnextsong=$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("song");
    song.src="./playlists/"+r[r.length-2]+"/"+getnextsong;
    song.play();
    isplay=true;
    aud=getnextsong;
    capt=getnextsong;
    $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data('song')+"']").data("id")+"']").data("song",capt);                            
fetchRecords($(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("id"),getnextsong);
$("#pic").addClass("picanimation");
$("#pic").removeClass("picstopped");
  }
  else
  {
    if($(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").parent().parents(".ro").parent().next().children(".ro").children().children().children().children().children("#playpaused").data("song"))
    {
   storing=$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").parent().parents(".ro").parent().next().children(".ro").children().children().children().children().children("#playpaused").data("song");//parent().parent().data("tarpl");//next().children().children(".ro").children("#ace").children("#bdy-"+$(eve).data("id")).data("tim");//children().prev().children().children("#playpaused").data("song");
   song.src="./playlists/Playlist-"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").parent().parents(".ro").parent().next().data("tarpl")+"/"+storing;
   song.play();
   capt=storing; 
   aud=storing;
   isplay=true;
   $("#myplaylistplay[data-id='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").parent().parents(".ro").parent().next().children(".ro").children().children().children().children().children("#playpaused").data("id")+"']").data("song",capt);                            

fetchRecords($(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").parent().parents(".ro").parent().next().data("tarpl"),storing);
$("#pic").addClass("picanimation");
$("#pic").removeClass("picstopped");
   $(".pr[data-song='"+r[r.length-1]+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});    
    let cursong=$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").parent().parents(".ro").parent().next().children(".ro").children().children().children().children().children("#playpaused").data("song");
   $(".pr[data-song='"+cursong+"']").css({"background":"url(./img/pause.png)","background-size":"cover"});//parent().parent().data("tarpl");//next().children().children(".ro").children("#ace").children("#bdy-"+$(eve).data("id")).data("tim");//children().prev().children().children("#playpaused").data("song");
   $(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().prev().children(".ro").children().children().children().children().children("#playpaused").css({"background":"url(./img/myplay.png)","background-size":"cover"});
   $("#screensong[data-sn='"+cursong+"']").attr("src","./img/myplay.gif"); 
   $("#screensong[data-sn='"+cursong+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png");  
   $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+cursong+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+cursong+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               

   $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"}); 
  }
    else 
    {
      $(".pr[data-song='"+r[r.length-1]+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"}); 
      let rsong=$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().parent().children().children(".ro").children().children().children().children().children("#playpaused").data("song");
      song.src="./playlists/Playlist-"+$(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().parent().children().data('tarpl')+"/"+rsong;
      song.play();
      
      fetchRecords($(".pr[data-song='"+capt+"']").parents("#targ").parent().parents(".ro").parent().parent().children().data('tarpl'),rsong);
      $("#pic").addClass("picanimation");
      $("#pic").removeClass("picstopped");
      aud=rsong;
      capt=rsong;
      isplay=true;   
      $(".pr[data-song='"+rsong+"']").css({"background":"url(./img/pause.png)","background-size":"cover"}); 
      $("#screensong[data-sn='"+rsong+"']").attr("src","./img/myplay.gif"); 
      $("#screensong[data-sn='"+rsong+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png"); 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+rsong+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
      $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+rsong+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
 
      $(".contain").css({"background":"url(./img/pause.png)","background-size":"cover"}); 
      $("#myplaylistplay[data-id='"+$("#screensong[data-sn='"+rsong+"']").data("id")+"']").data("song",capt);                            

    }
  }
}
else 
{
  $(".pr[data-song='"+r[r.length-1]+"']").css({"background":"url(./img/myplay.png)","background-size":"cover"});    
  $(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").css({"background":"url(./img/pause.png)","background-size":"cover"});
  let getnextsong=$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("song");
  $("#screensong[data-sn='"+getnextsong+"']").attr("src","./img/myplay.gif"); 
  $("#screensong[data-sn='"+getnextsong+"']").parents("#findit").siblings().children().children().children().children().attr("src","./img/myplay.png"); 
  $("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+getnextsong+"']").data("id")+"']").attr("src","./img/musicplay.webp");                 
$("#screenplaylist[data-getkey='"+$("#screensong[data-sn='"+getnextsong+"']").data("id")+"']").parents("#findit1").siblings().children().children().children().children().attr("src","./img/playlist.png");                               
 
  song.src="./playlists/"+r[r.length-2]+"/"+getnextsong;
  song.play();
  isplay=true;
  aud=getnextsong; 
  fetchRecords($(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("id"),getnextsong);
  $("#myplaylistplay[data-id='"+$(".pr[data-song='"+r[r.length-1]+"']").parents("#targ").next().children(".playpauseprevnext").children("#playpaused").data("id")+"']").data("song",getnextsong);                            

  
  
}


});



//=====song_end_and_switch_to_next_completed======//



//add more songs

$(document).on("click","#do",function(){

  $("#dialog").fadeIn('slow');
  var plst=$(this).data("myplays");
  $("#text").val(plst);
  $(document).on("submit","#myform",function(e){
    var set=$("#text").val();
    var ev=this;
    e.preventDefault();
    if(document.getElementById('multiFiles').files.length===0)
    {
      notification("#notification","All fields are required!",false);
    }
    else
    {
      var songss=new FormData(this);
    $.ajax({
            url:"php/inner.php",
            type:"POST",
            data:songss,
            dataType:"json",
            contentType:false,
            processData:false,
            success:data=>{   
                          console.log(data);
                           if(data.status==false)
                           {
                            notification("#notification",data.message,data.status);
                           }
                           else
                           {
                            notification("#notification",data.message,data.status);
                             $("#myform").trigger("reset",true);
                             $("#dialog").fadeOut('slow');
                             setTimeout(load,1000);
                           }
                       }
  
          });
        //  setTimeout(load,1000);

        }
  });

});

//add more songs complete


//add more dialog box close

$(document).on("click","#cls",function(){

  $("#dialog").fadeOut('slow');

});

//delete specific song

$(document).on("click","#remove",function(){

var song=$(this).data("remove");
var playlist=$(this).data("playlist");

$.ajax({
        url:"php/deletefile.php",
        type:"POST",
        dataType:"json",
        data:{songname:song,playlistname:playlist},
        success:data=>{
                       if(data.status==true)
                       {
                       notification("#notification",data.message);
                       $('#targ[data-so="'+song+'"]').fadeOut('slow');
                       setTimeout(load,1010);
                       }
                       else 
                       {
                        notification("#notification","error");
                       }
                      }

        });

});


//delete specific song complete

//delete specific playlist 

$(document).on("click","#deleteplaylist",function(){


var folder=$(this).data("playlist");

$.ajax({
        url:"php/deletefolder.php",
        type:"POST",
        data:{songfolder:folder},
        dataType:"json",
        success:data=>{
                        if(data.status==true)
                        {
                          notification("#notification",data.message);
                          $('#apn[data-tarpl="'+folder+'"]').fadeOut('slow');
                          setTimeout(load,1010);
                        }
                        else
                        {
                          notification("#notification",data.message);
                        }
                      }

        });



});


//delete specific playlist complete 

//delete all playlist 

$("#delall").on("click",function(e)
{
e.preventDefault(); 
$("#deldialog").fadeIn('slow');
$("#deleting").on("click",function(e)
{
e.preventDefault();

$.ajax({
  url:"php/deleteallfolder.php",
  type:"POST",
  dataType:"json",
  success:data=>{
                  if(data.status==true)
                  {
                    notification("#notification",data.message,data.status);
                    $("#deldialog").fadeOut('slow');
                  }
                  else 
                  {
                    notification("#notification",data.message,data.status);
                    $("#deldialog").fadeOut('slow');
                  }
                }

 });
setTimeout(load,1000);

});


});

//delete all playlist complete

//delete triggring popup close

$("#clre").on("click",function(){

  $("#deldialog").fadeOut('slow');


});

$("#clo").on("click",function(){

  $("#deldialog").fadeOut('slow');


});

//song muted started


$(document).on("click","#muteunmute",function(){

  if(song.muted==true)
  {
   song.muted=false;
   $(this).css({"background":"url(./img/unmute.png)","background-size":"cover","bakground-repeat":"no-repeat"});

  }
  else 
  {
    song.muted=true;
    $(this).css({"background":"url(./img/mute.png)","background-size":"cover","bakground-repeat":"no-repeat"});
  }


});

//song muted started close

//song volume change started

$(document).on("mousemove click",".vol",function(){

song.volume=$(this).val()/100;

});

//song volume chenge complete



  var update;
  var curmin;
  var cursec;
  var durmin;
  var dursec,cmin,csec,dmin,dsec;

//seek slider and timeupdate start
$(song).on("timeupdate",function(){
  
  update=(song.currentTime*100)/song.duration;
  $("#inner").css({"width":update+"%"});
  $("#cir").css({"left":update-0.35+"%"});
  curmin=Math.floor(song.currentTime/60);
  cursec=Math.floor(song.currentTime-curmin*60);
  durmin=Math.floor(song.duration/60);
  dursec=Math.floor(song.duration-durmin*60);
  if(curmin<10){cmin="0"+curmin}else{cmin=curmin;}
  if(cursec<10){csec="0"+cursec;}else{csec=cursec;}
  if(durmin<10){dmin="0"+durmin}else{dmin=durmin;}
  if(dursec<10){dsec="0"+dursec}else{dsec=dursec;}

  if(isNaN(cmin) || isNaN(csec) || isNaN(dmin) || isNaN(dsec))
  {
    $("#current").html("00:00");
    $("#duration").html("completed");
  }
  else
  {
  $("#current").html(cmin+":"+csec);
  $("#duration").html(dmin+":"+dsec);

  }


});

//seek slider and timeupdate completed

//seek click skip
var seeking;
$(document).on("mousedown","#outer",function(e){
seeking=true;
if(seeking)
{
if(!isNaN(durmin) || !isNaN(dursec))
{  
let getloc,getpc;
getloc=e.clientX-$(this).offset().left;
getpc=getloc*100/$(this).width();
$("#inner").css({"width":getpc+"%"});
song.currentTime=song.duration*(getpc/100);
}
else 
{
$("#inner").css({"width":"0%"});
}
}
});

$(document).on("mouseup","#outer",function(e){
seeking=false;
});

//seek click skip completed

//==playback speed started==//


$(document).on("change","#playbackspeed",function(e)
{

  song.playbackRate=$(this).val();

});



//==playback speed completed==/




//==All functioning completed v.1 mymusic==//
});
