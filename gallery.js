function ColImg()
{
    var Img=document.images;
    for(i=0;i<Img.length;i++)
    {
        Img[i].src=`${i}.jpg`;
    }
}
ColImg()
function openWindow(imgUrl)
{
    document.getElementById("ImgCon").style.backgroundImage=`url(${imgUrl})`
}