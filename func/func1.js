

  function func1(){
    //탭 두번을 기준으로 각 금칙어들을 나눈 행렬
    var wordArray = dict1.split('    ');
    for(var inx in wordArray){
      //금칙어 행렬에서 금칙어와 에러메시지 행렬로 받아오기
      var thisWord = getWordFromArrayLine(wordArray[inx]);

        var wrdSrch2 = LbRegExp(thisWord[0]);
        updateOutput2(article,wrdSrch2,thisWord[1],"red");
    }
  }
