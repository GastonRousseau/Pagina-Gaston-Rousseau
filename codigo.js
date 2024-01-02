document.addEventListener('DOMContentLoaded', function (){

    const ContenedorInfo = document.getElementById('CInformacion');
    const ContenedorC = document.getElementById('CCatalogo');
    const ContenedorImg = document.getElementById('Imagenes');
    const ContenedorS = document.getElementById('Soporte');

    const BTNClose=document.getElementById('BTNCerrar');
    const LinkInfo = document.getElementById('LInfo');
    const LinkC=document.getElementById('LC');
    const LinkImg=document.getElementById('LImg');
    const LinkS=document.getElementById('LS');
    let PanelAbierto=null;
    let LinkAbierto=null;
    LinkInfo.addEventListener("click",function(){
        if(PanelAbierto!=null){
            PanelAbierto.style.display="None";
            LinkAbierto.style.color="Black";
        }
        ContenedorInfo.style.display="Block";
        PanelAbierto=ContenedorInfo;
        LinkAbierto=LinkInfo;
        LinkAbierto.style.color="#8B0000";
        
    });
    LinkC.addEventListener("click",function(){
        if(PanelAbierto!=null){
            PanelAbierto.style.display="None";
            LinkAbierto.style.color="Black";
        }
        LinkAbierto=LinkC;
        ContenedorC.style.display="Block";
        PanelAbierto=ContenedorC;
        LinkAbierto.style.color="#8B0000";
        
    });
    LinkImg.addEventListener("click",function(){
        if(PanelAbierto!=null){
            PanelAbierto.style.display="None";
            LinkAbierto.style.color="Black";
        }
        ContenedorImg.style.display="Block";
        PanelAbierto=ContenedorImg;
        LinkAbierto=LinkImg;
        LinkAbierto.style.color="#8B0000";
        
    });
    LinkS.addEventListener("click",function(){
        if(PanelAbierto!=null){
            PanelAbierto.style.display="None";
            LinkAbierto.style.color="Black";
        }
        ContenedorS.style.display="Block";
        PanelAbierto=ContenedorS;
        LinkAbierto=LinkS;
        LinkAbierto.style.color="#8B0000";
        
    });
    BTNClose.addEventListener("click",function(){
        if(PanelAbierto!=null){
            PanelAbierto.style.display="None";
            LinkAbierto.style.color="Black";
        }
    });
});