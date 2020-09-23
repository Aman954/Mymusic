<?php
$playlist=$_POST["songfolder"];

$myarray=json_decode(file_get_contents("file.json"),true);
$dir="../playlists/Playlist-".$playlist;

$a=glob($dir."/*");
for($i=0;$i<count($a);$i++)
{
    unlink($a[$i]);
}
rmdir($dir);  
for($i=0;$i<count($myarray);$i++)
{
$newarray=$myarray;
foreach($newarray[$i] as $key=>$value )
{
if($key==$playlist)
{      
unset($newarray[$i]);
$newarr=array_values($newarray);
echo json_encode(array("message"=>"Playlist-".$playlist." has been deleted!","status"=>true),JSON_PRETTY_PRINT);
file_put_contents("file.json",json_encode($newarr,JSON_PRETTY_PRINT));
}

}
}


?>