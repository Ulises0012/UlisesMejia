var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo has logrado"; messageTime="Se acabo el tiempo."; messageError="Vuelve a intentarlo."; messageErrorG="Vuelve a intentarlo."; messageAttempts="Lo intentaste la veces maximas permitidas."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RnJhc2VzbWF0ZQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["bGEgc3VtYSBkZSB1bm8gbWFzIHVubyBlcyAyLg==","TGEgcmV0c2EgZGUgc2lldGUgY29uIHVubyBlcyBzZWlzLg==","","",""];imaW=["_109349062_gettyimages-838845564.jpg","descarga.jpg","","",""];queW=["","","","",""]; c=[28,34,0,0,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="Frasesmate_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
