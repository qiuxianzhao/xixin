<script language="javascript">
function tips(id,str){
var l=document.getElementById(id).offsetLeft+120;
var t=document.getElementById(id).offsetTop;
document.getElementById("tips").innerHTML="提示："+str;
document.getElementById("tips").style.left=l+"px";
document.getElementById("tips").style.top=t+"px";
document.getElementById("tips").style.display="";
}
function outtips(){
    document.getElementById("tips").style.display='none';
}
		</script>