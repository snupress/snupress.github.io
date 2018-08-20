
  var errCnt=0;

  //기사를 가져온 뒤 겹따옴표와 띄어쓰기를 변환합니다.
  function getArticle(){
    var article = document.getElementById("article").value;
    article = article.replace(/ /g, "&nbsp;");
    article = article.replace(/"/g, "&quot;");
    return article;
  }

//결과값과 에러 콘솔을 업데이트합니다.
  function updateOutput(text,searchWord,msg,color){
    var searchArray = text.match(searchWord);
    if(searchArray!=null)
      errCnt++;
    article = text.replace(searchWord,function(x){return '<b title =\"'+msg+'\" style ="background-color:'+color+'; text-decoration: underline">'+x+'</b>';});
    for(var x in searchArray) {
        errorConsole += (searchArray[x]+' : '+msg+'<br>');
    }
  }
  function updateOutput2(text,searchWord,msg,color){
    var searchArray;
    if( searchWord[1]!=undefined && searchWord[1].length>0) searchArray = text.match2(searchWord[0],searchWord[1]);
    else{
      searchArray=text.match(searchWord[0]);
    }
    if(searchArray!=null)
      errCnt++;
    if(searchWord[1]!=undefined &&searchWord[1].length>0){
      article = text.replace2(searchWord[0],function(x){return '<b title =\"'+msg+'\" style ="background-color:'+color+'; text-decoration: underline">'+x+'</b>';},searchWord[1]);
    } else article = text.replace(searchWord[0],function(x){return '<b title =\"'+msg+'\" style ="background-color:'+color+'; text-decoration: underline">'+x+'</b>';});
    for(var x in searchArray) {
        errorConsole += (searchArray[x]+' : '+msg+'<br>');
    }
  }
  //금칙어를 정규표현식으로 바꿉니다
    function wordToRegExp(str){
      //금칙어에서 특수문자 이스케이프
      var strEscaped = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      //금칙어를 정규표현식으로
      var strRegExp = new RegExp(strEscaped,"g");
      return strRegExp;
    }

  //금칙어와 에러메시지를 나눕니다
    function getWordFromArrayLine(wordArrayLine){
      //탭을 기준으로 금칙어와 에러메시지 나누기
      var thisWord =wordArrayLine.split('\t');
      return thisWord;
    }

  //에러화면을 출력할 변수
  var errorConsole;
  //기사 결과를 출력할 변수
  var article;


  function LbRegExp(str){
    var wrdSrch2 =[];
    var lbEnd = str.indexOf(")");
    if(str.indexOf("?<")!=-1){
    wrdSrch2[0] = new RegExp(str.substring(lbEnd+1,str.length),"g");
      wrdSrch2[1] = str.substring(0,lbEnd+1);
    }
    else{
      wrdSrch2[0] = new RegExp(str,"g");
      wrdSrch2[1]= "";
    }
    return wrdSrch2;
  }

  //칼을 봅니다
  function karl(){
    //변수 초기화
  	article = getArticle();
    errorConsole='';
    article = article.replace(/(\n|\r\n)/g, '<br>');
    func1();
    func2();
    func3();
    func4(dict4,0);
    func4(dict4_1,1)
    article = '<b title="틀린 이유가 나옵니다.">틀린 부분 위에 마우스를 올려놓으세요.<br></b><b>발견된 오류: '+errCnt+'개<br><br>'+ article;
    document.getElementById("output").innerHTML = article;
		document.getElementById("errorConsole").innerHTML = errorConsole;
    errCnt =0;
	}
  //글상자 내용을 지웁니다
  function deleteText(){
    document.getElementById("article").value ='';
    document.getElementById("output").innerHTML = outputDft;
		document.getElementById("errorConsole").innerHTML = errorConsoleDft;
  }

  function fillExmp(){
    document.getElementById("article").value = articleDft;
    document.getElementById("output").innerHTML = outputDft
    document.getElementById("errorConsole").innerHTML = errorConsoleDft;
  }
  //디폴트
  //deleteText();
