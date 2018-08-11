function func2(){
  var wordArray = dict2.split('    ');

  for(var inx in wordArray){
    //금칙어 행렬에서 원래 단어와 축약어 행렬로 받아오기
    var thisWord = getWordFromArrayLine(wordArray[inx]);
    //원래 단어(축약어)를 정규표현식으로
    //따옴표가 붙어도 인정
    var abbrFst = new RegExp("(‘?)"+thisWord[0]+"(’?)\\("+thisWord[1]+"\\)","g");
    var arrayAbbrFst = article.match(abbrFst);
    //원래단어를 정규표현식으로
    //따옴표가 붙어도 인정, 뒤에 장이 붙으면 인정 안함
    var notAbbr = new RegExp("(‘?)"+thisWord[0]+"(?!(’?)\\("+thisWord[1]+"\\))(?=[^장])","g");
    var arrayNotAbbr = article.match(notAbbr);
    //축약어를 정규표현식으로
    //원래 단어에 축약어가 포함된 경우 인정 안함
    var splittedByAbbr = thisWord[0].split(thisWord[1]);

    var abbrStr = thisWord[1];
    if(!!splittedByAbbr[0]&&(splittedByAbbr[1]!=undefined)){
      abbrStr = "(?<!"+splittedByAbbr[0]+")"+abbrStr;
    }
    if(!!splittedByAbbr[1]){
      abbrStr += ("(?!"+splittedByAbbr[1]+")");
    }
    abbrStr+="(?=[^\\)])";
    var abbr = new RegExp(abbrStr,"g");
    console.log(abbr);
    var arrayAbbr = article.match(abbr);
    if(arrayAbbrFst != null){
      if(arrayAbbrFst.length >1){
        //축약을 두 번 한 경우
        article = article.replace(abbrFst,function(x){return '<b title ="축약은 한 번씩만 이뤄져야 합니다." style ="background-color:blue; text-decoration: underline">'+x+'</b>';});
        for(var x in arrayAbbrFst) {
            errorConsole += (arrayAbbrFst[x]+' : 축약은 한 번씩만 이뤄져야 합니다.<br>');
        }
      }
      //축약을 했는데 비축약어를 쓴 경우
      if(arrayNotAbbr!=null){
        article = article.replace(notAbbr,function(x){return '<b title ="축약을 했다면 줄임말만 사용해야 합니다." style ="background-color:blue; text-decoration: underline">'+x+'</b>';});
        for(var x in arrayNotAbbr) {
            errorConsole += (arrayNotAbbr[x]+' : 축약을 했다면 줄임말만 사용해야 합니다.<br>');
        }
      }
      //축약을 하기 전에 축약어를 쓴 경우
      if(arrayAbbr!=null){
        var tabbrFst = new RegExp("(‘?)"+thisWord[0]+"(’?)\\("+thisWord[1]+"\\)");
        var tarrayAbbrFst = article.match(tabbrFst);
        var tabbr = new RegExp(abbrStr);
        var tarrayAbbr = article.match(tabbr);
        if(tarrayAbbr.index<tarrayAbbrFst.index){
          var errorText = article.split(arrayAbbrFst[0]);
          errorArrayAbbr = errorText[0].match(abbr);
          article = errorText[0].replace(abbr,function(x){return '<b title ="축약을 하기 전에 줄임말을 사용하면 안 됩니다." style ="background-color:blue; text-decoration: underline">'+x+'</b>';})+arrayAbbrFst[0] + errorText[1];
          article = article.replace(abbrFst,function(x){return '<b title ="축약을 하기 전에 줄임말을 사용하면 안 됩니다." style ="background-color:blue; text-decoration: underline">'+x+'</b>';});
          for(var x in errorArrayAbbr) {
              errorConsole += (arrayAbbr[x]+' : 축약을 하기 전에 줄임말을 사용하면 안 됩니다.<br>');
          }
          errorConsole += (arrayAbbrFst[0]+' : 축약을 하기 전에 줄임말을 사용하면 안 됩니다.<br>');
        }
      }
    }
    //축약을 하지 않은 경우
    else{
      if(arrayAbbr !=null){
        alert(arrayAbbr);
        article = article.replace(abbr,function(x){return '<b title ="축약을 하지 않고 줄임말을 사용하면 안 됩니다." style ="background-color:blue; text-decoration: underline">'+x+'</b>';});
        for(var x in arrayAbbr) {
            errorConsole += (arrayAbbr[x]+' : 축약을 하지 않고 줄임말을 사용하면 안 됩니다. 원래 명칭은 \''+thisWord[0]+'\'입니다.<br>');
        }
      }
    }
  //  // 메시지
  //   var errMsg = thisWord[1];
  //   //정규표현식으로 검색한 결과 행렬
  //   searchArray = article.match(wrdSrch);
  //   //결과출력에서 붉은줄로 표현
  //   article = article.replace(wrdSrch,'<b title ="'+errMsg+'" style ="background-color:/*#F26968*/red; text-decoration: underline">'+thisWord[0]+'</b>');
  //   //메시지 출력
  //   for(var x in searchArray) {
  //     if(errMsg != undefined)
  //       errorConsole += (thisWord[0]+" : " +errMsg+ '<br>');
  //   }
  // }
  // article = article.replace(/(\n|\r\n)/g, '<br>');
  }
}
