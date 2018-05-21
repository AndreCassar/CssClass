var ind = 1;
var imgs = new Array();
imgs[0] = "https://www.desktopbackground.org/download/1920x1200/2011/04/07/184208_tokyo-ghoul-ken-kaneki-hd-anime-wallpapers_1920x1338_h.jpg";
imgs[1] = "http://sfwallpaper.com/images/anime-wallpaper-1366x768-2.jpg";
imgs[2] = "https://coverfiles.alphacoders.com/417/41785.jpg";

//var i = document.createElement("img");
//document.body.appendChild(i);
document.getElementById("first").src = imgs[0];
//i.onclick = "next()";
function next() 
{
    if(ind >= imgs.length)
    {
        ind = 1;
        for (var i = 1; i < imgs.length; i++) { 
            var elem = document.getElementById(i);
            elem.remove();
        }
            
        
    }
    else
    {
    var i = document.createElement("img");
    document.body.appendChild(i);
    i.src = imgs[ind];
    i.onclick = next;
    i.id = ind;
    ind++;
    }
}