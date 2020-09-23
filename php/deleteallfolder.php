<?php
$a=scandir("../playlists");
if(count($a)>2)
{
for($i=2;$i<count($a);$i++)
{
$filefol=glob("../playlists/".$a[$i]); 
for($j=0;$j<count($filefol);$j++) 
{
    $arr=glob($filefol[$j]."/*");
    for($k=0;$k<count($arr);$k++)
    {
        unlink($arr[$k]);
       
    }
    rmdir("../playlists/".$a[$i]);
}   
}
$myjsonarr=[];
file_put_contents("file.json",json_encode($myjsonarr,JSON_PRETTY_PRINT));

echo json_encode(array("message"=>"All Playlist has been deleted!","status"=>true),JSON_PRETTY_PRINT);

}
else 
{
    echo json_encode(array("message"=>"You have no playlist to delete!","status"=>false),JSON_PRETTY_PRINT);

}


?>