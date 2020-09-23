<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- CSS only -->
    <link rel="stylesheet" type="text/css" href="bootstrap5/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="fontawesome/css/font-awesome.min.css">
    <!--==cdn's==-->
   <!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">-->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
   <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">

</head>
<body>
    <!----==slider start==-->

<!--add more dialog-->
    <div id="dialog" style="display:none;border-width:1px;border-color:gray;border-style:solid;z-index:3;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.6);">                                                     
     <div style="padding:0px 12px;background-color:#4D5257;color:white;max-width:500px;height:170px;margin-left:auto;margin-right:auto;margin-top:12%;">
        <div id="cls" style="padding:1px;color:white;position:relative;right:5px;top:0px;float:right;font-size:24px;cursor:pointer;">  
         &#x2718;
        </div>
        <div style="position:relative;top:13px;">
        <h4 style="color:white;text-decoration:underline;" class="mb-4">Add Songs</h4>
        <form id="myform" name="myform">
        <input type='hidden' id='text' value="" name="playle" data-my="`+key+`">
        <input type="file" id="multiFiles" name="files[]" multiple="multiple"/ class="mb-3">
      <br>
        <input type="submit" name="add" class="btn btn-primary" value="Add" id="adding" data-add="`+key+`" value="Add">
        </form>
        </div>
        </div>
        </div>   

<!--delete all-dialog-->

        <div id="deldialog" style="padding-bottom:12px;display:none;border-width:1px;border-color:gray;border-style:solid;z-index:3;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.6);">                                                     
          <div style="padding:0px 12px;background-color:#4D5257;color:white;max-width:500px;height:170px;margin-left:auto;margin-right:auto;margin-top:12%;">
             <div id="clre" style="padding:1px;color:white;position:relative;right:5px;top:0px;float:right;font-size:24px;cursor:pointer;">  
              &#x2718;
             </div>
             <div style="position:relative;top:13px;">
             <h4 style="color:white;text-decoration:underline;" class="mb-4">Delete Playlists</h4>
             <span style="color:rgba(0, 238, 255, 0.575);">Are you sure want to delete all playlists?</span>
             <br>
             <div style="margin-top:20px;">
             <input type="button" name="del" class="btn btn-danger" value="Delete" id="deleting" >
             <input type="button" name="clo" class="btn btn-success" value="Cancel" id="clo" >
            </div>
             </div>
             </div>
             </div>          


<!-- Modal -->
<div class="modal fade mod" style="color:black;" id="staticBackdrop"  data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog" >
      <div class="modal-content"> 
        <div class="modal-header bg-dark bg-gradient text-white">
          <h5 class="modal-title" id="staticBackdropLabel">Create Playlist</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" >&times;</span>
          </button>
        </div>
        <div class="modal-body bg-dark bg-gradient text-white">
            <form id="createplaylist" name="myform">
                <div class="mb-3">
            <input type="text" class="form-control bg-dark bg-gradient text-white" name="playlistname" placeholder="Enter your playlist name" id="playlistname">
                </div>
            <div class="form-file mb-3">
                <input type="file" class="form-file-input bg-dark bg-gradient nw" id="customFile" name="songs[]" multiple>
                <label class="form-file-label" for="customFile">
                  <span class="form-file-text bg-dark bg-gradient text-white">Select Music Files</span>
                  <span class="form-file-button bg-success bg-gradient text-white">Choose</span>
                </label>
              </div>
        </div>
        <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <input type="submit" class="btn btn-primary" value="Add" name="add" id="add" >
        </form>
        </div>
      </div>
    </div>
  </div>



<div class="slider">
 <div id="close">
   &#x2718;
 </div>   
 <div class="body">
<a class="btn btn-primary btn-lg btn-block" href="#" role="button" data-toggle="modal" data-target="#staticBackdrop" id="showhide"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Create Playlist</a>
<a class="btn btn-danger btn-lg btn-block" href="#" role="button" id="delall"><i class="fa fa-trash-o" aria-hidden="true">&nbsp;</i>Delete All Playlist</a>
 </div>
 <div class="main-body">
<!--collapse start-->
<h4 class="myplaylist mb-3">My Playlists</h4>
<div id="collin">
    </div>
<!--collapse end-->

 </div>
 <footer class="downto" width="100">
<span class="logo">My Music</span><small> v1.0</small>
 </footer>
</div>
<!----==slider end==-->

<!----==click to slider==-->
<div class="outerlist">
<div id="list" >
 &#9776;     
</div>
</div>
<div class="notification" id="notification">
  am,am abnbn banb  
</div>
<!----==main Music intro start==-->
<div class="head" >
<div class="heading mb-5" style=" padding-bottom:0px;" >
         <h1 style="position: relative;font-size:46px;font-weight: bolder;position: relative;top:20px;">
            <span style="position: relative;top:0px;opacity: 1;color:whitesmoke;letter-spacing:0px;">My Playlists</span><br><small class="sml" style="letter-spacing:0px;color:pink;position: relative;top:-26px;font-size:18px;">Your mix playlists</small></h1>
   
</div>
<div class="box playlist mb-4" >
    <div class="row mb-4"  id="addplaylist" style="margin-right:0px !important;margin-left:0px !important;">
      
        </div>
        <h5 class="plus" style="margin-left:10px;margin-top:-8px;">
          <i class="fa fa-plus-square more" aria-hidden="true">&nbsp;See More</i>
      </h5>

    </div>
    <div class="heading mb-5" style=" padding-bottom:0px;">
        <!--<i class="fa fa-music" aria-hidden="true" style="color:pink;">&nbsp;</i>
        <img src="img/head6.png" alt="headphones" style="height:120px;width:120px;float:left;">-->

         <h1 style="position: relative;font-size: 50px;font-weight:bolder;position: relative;top:20px;">
            <span style="position: relative;top:0px;opacity: 1;color:whitesmoke;">My Music</span><br><small class="sml" style="line-height:0px;letter-spacing:0px;color:pink;position:relative;top:-29px;font-size:18px;">Play your mix songs</small></h1>
    </div>
        <div class="box mymusic" style="clear: both;" >
           
            <div class="row mb-4"  id="addmusic" style="margin-right:0px !important;margin-left:0px !important;">
               
               
                </div>
                <h5 class="plus" style="margin-left:10px;">
                  <i class="fa fa-plus-square more" aria-hidden="true">&nbsp;See Playlists</i>
              </h5>
        
        
            </div>
        
        </div>
</div>

</div>

<!----==Main Music Intro end==-->

<!----==footer==-->
<div class="foot">
    <div id="outer">
    <div id="inner" style="float:left;">     
    </div>
    <div id="cir" style="width:10px;height:10px;background-color: red;border-radius: 50%;position:relative;margin-top: -3.2px;left:0px;">

    </div>
    </div>
<div class="time">
    <small id="current">
     00:00
    </small>
    
    <small id="duration">
        02:22
    </small>
</div>
    <div id="rou">
    <div id="pic" alt="..." style="border-radius: 50%;width: 100px;
    height: 100px;background-color: #4D5257;"></div>
    </div>
    <div class="title">
    <h6 id="maintitle"></h6>
    <small id="artist">Ankit tiwari,Palak Mucchal</small>
    </div>
    <div class="playpause">
        <div class="previous" >
        </div>
        <div class="contain" data-song="none">
        </div>
        <div class="next" style="cursor:pointer;">
        </div>
    </div>
    <div class="wrapper">
    <div class="volume" >
    </div>
    <span id="rng"><input type="range" class="form-range vol" id="customRange1" min="0" max="100" value="100" style="z-index: 4;cursor: pointer;"></span>
    </div>
    
    <div class="speed">
       

    <div id="muteunmute" style="cursor: pointer;">

    </div>
    <div class="speedo"></div>
    <select class="mb-3" style="background:black;" id="playbackspeed">
        <option value="0.5">0.5x</option>
        <option value="1" selected>Normal</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>

    </select>
    </div>
    <div id="elab">
        <span style="color:white;" id="ot"><i class="fa fa-chevron-circle-up" aria-hidden="true" id="ic"> view less</i></span>
    </div>
</div>
<!----==footer_end==-->

 <!-- JavaScript and dependencies cdns -->
<!--<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
<!--<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>-->
<script src="jsmedia/dist/jsmediatags.min.js"></script>
<script src="jquery/jq.js"></script>
<script src="jquery/jquery-3.5.1.min.map"></script>
<script src="bootstrap5/js/bootstrap.min.js"></script>
<!--==cdn==-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.3/jsmediatags.min.js" integrity="sha512-gQ6HBTG0fuB5lRb4v9YJtFPyKUBGlaK1o6cmzqt6umBCyi4S1XdCg/hVptb1XLs1MTkUtCH6rZSI0a+eJJLkXQ==" crossorigin="anonymous"></script>-->
<script type="text/javascript" src="js/app.js"></script>   
</body>
</html>