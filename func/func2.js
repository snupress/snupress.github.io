
function func2(){

  for(var inx in dict2){
    //금칙어 행렬에서 원래 단어와 축약어 행렬로 받아오기
    var thisWord = dict2[inx];
    //원래 단어(축약어)를 정규표현식으로
    //따옴표가 붙어도 인정

    var abbrFst = new RegExp("(‘?)"+thisWord[0]+"(’?)\\("+thisWord[1]+"\\)","g");
    var arrayAbbrFst = article.match(abbrFst);
    //원래단어를 정규표현식으로
    //따옴표가 붙어도 인정, 뒤에 장이 붙으면 인정 안함
    var notAbbr = new RegExp("(‘?)"+thisWord[0]+"(?!(’?)\\("+thisWord[1]+"\\))(?!장)","g");
    var arrayNotAbbr = article.match(notAbbr);
    //축약어를 정규표현식으로
    //원래 단어에 축약어가 포함된 경우 인정 안함
    var splittedByAbbr = thisWord[0].split(thisWord[1]);

    var abbrStr = thisWord[1];
    //축약어가 원래 단어에 포함되고, 원래 단어 속 축약어 앞에 글자가 있는 경우

    if(!!splittedByAbbr[0]&&(splittedByAbbr[1]!=undefined)){
      //   중요! IE, MS EDGE, 안드로이드 인터넷에서 전방탐색이 지원되지 않음

      abbrStr = "(?<!"+splittedByAbbr[0]+")"+abbrStr;
    }
    //축약어가 원래 단어에 포함되고, 원래 단어 속 축약어 뒤에 글자가 있는 경우
    if(!!splittedByAbbr[1]){
      abbrStr += ("(?!"+splittedByAbbr[1]+")");
    }
    //뒤에 괄호가 오는 경우
    abbrStr+="(?!\\))";

    var abbr = LbRegExp(abbrStr);
    var arrayAbbr;
    if(abbrStr[1].length>0)
      arrayAbbr = article.match2(abbr[0],abbr[1]);
    else
      arrayAbbr = article.match(abbr[0]);


    if(arrayAbbrFst != null){
      //축약을 두 번 한 경우
      if(arrayAbbrFst.length >1){
        updateOutput(article,abbrFst,"축약은 한 번씩만 이뤄져야 합니다.","blue")
      }
      //축약을 했는데 비축약어를 쓴 경우
      if(arrayNotAbbr!=null){
        updateOutput(article,notAbbr,"축약을 했다면 줄임말만 사용해야 합니다.","blue")
      }
      //축약을 하기 전에 축약어를 쓴 경우
      //축약한 곳을 기준으로 기사를 앞뒤로 나눠 앞을 처리한 뒤 다시 합친다
      if(arrayAbbr!=null){
        var tabbrFst = new RegExp("(‘?)"+thisWord[0]+"(’?)\\("+thisWord[1]+"\\)");
        var tarrayAbbrFst = article.match(tabbrFst);
        var tabbr = new RegExp(abbrStr);
        var tarrayAbbr = article.match(tabbr);
        if(tarrayAbbr.index<tarrayAbbrFst.index){
          var errorText = article.split(arrayAbbrFst[0]);
          updateOutput2(errorText[0],abbr,"축약을 하기 전에 줄임말을 사용하면 안 됩니다.","blue");
          article += (arrayAbbrFst[0] + errorText[1]);
          updateOutput(article,abbrFst,"축약을 하기 전에 줄임말을 사용하면 안 됩니다.","blue");
        }
      }
    }
    //축약을 하지 않은 경우
    else{
      if(arrayAbbr !=null){
        updateOutput2(article,abbr,"축약을 하지 않고 줄임말을 사용하면 안 됩니다. 원래 명칭은 \'"+thisWord[0]+"\'입니다.","blue");
      }
    }
  }
}
