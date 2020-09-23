<?php
$relarr="";    
$playlist=$_POST['playlistname'];
$song=$_POST['songname'];
$newa=[];
$stat;
$getfile=json_decode(file_get_contents("file.json"),true);
for($i=0;$i<count($getfile);$i++)
{
$newarray=$getfile;
foreach($newarray[$i] as $key=>$value)
{
for($j=0;$j<count($newarray[$i][$key]);$j++)
{
if($key==$playlist)
{
if($newarray[$i][$key][$j]==$song)  
{   
    $path="../playlists/playlist-".$playlist."/".$song;
    unlink($path);
    unset($newarray[$i][$key][$j]);   
   // $relarr=$newarray[$i][$key][$j];
   $relarr=array_values($newarray[$i][$key]);

} 
   
} 
}
}
}
$arr1;
$nr=json_decode(file_get_contents("file.json"),true);
for($i=0;$i<count($nr);$i++)
{
foreach($nr[$i] as $key=>$value)
{
    for($j=0;$j<count($nr[$i][$key]);$j++)
    {
        
    if($key==$playlist)
    {
        if($nr[$i][$key][$j]==$song)  
        {   
       $a1=$nr[$i][$key];
       $nr[$i][$key] = $relarr;
       file_put_contents("file.json",json_encode($nr,JSON_PRETTY_PRINT));
        echo json_encode(array("message"=>"1 song removed from playlist","status"=>true),JSON_PRETTY_PRINT);       
        }

    }
}
}
}





?>