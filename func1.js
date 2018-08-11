


  function func1(){
    //탭 두번을 기준으로 각 금칙어들을 나눈 행렬
    var wordArray = dict1.split('    ');

    for(var inx in wordArray){
      //금칙어 행렬에서 금칙어와 에러메시지 행렬로 받아오기
      var thisWord = getWordFromArrayLine(wordArray[inx]);
      //검색할 금칙어를 정규표현식으로 고치기
      var wrdSrch = wordToRegExp(thisWord[0]);
      //메시지
      var errMsg = thisWord[1];
      //정규표현식으로 검색한 결과 행렬
      searchArray = article.match(wrdSrch);
      //결과출력에서 붉은줄로 표현
      article = article.replace(wrdSrch,'<b title ="'+errMsg+'" style ="background-color:/*#F26968*/red; text-decoration: underline">'+thisWord[0]+'</b>');
      //메시지 출력
      for(var x in searchArray) {
        if(errMsg != undefined)
          errorConsole += (thisWord[0]+" : " +errMsg+ '<br>');
      }
    }
    article = article.replace(/(\n|\r\n)/g, '<br>');

  }
