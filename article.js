  //기사를 가져온 뒤 겹따옴표와 띄어쓰기를 변환합니다.
  function getArticle(){
    var article = document.getElementById("article").value;
    article = article.replace(/ /g, "&nbsp;");
    article = article.replace(/"/g, "&quot;");
    return article;
  }

  //에러화면을 출력할 변수
  var errorConsole;
  //기사 결과를 출력할 변수
  var article;

  //칼을 봅니다
  function karl(){
    //변수 초기화
  	article = '<b title="틀린 이유가 나옵니다.">틀린 부분 위에 마우스를 올려놓으세요.<br><br></b>'+getArticle();
    errorConsole='';
    //기능 1//
    func1();

    func3();
    document.getElementById("hltd").innerHTML = article;
		document.getElementById("output").innerHTML = errorConsole;
	}
