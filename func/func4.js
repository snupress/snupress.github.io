function func4(dictGiven,flag){
  //탭 두번을 기준으로 각 건물들을 나눈 행렬

  for(var inx in dictGiven){
    //금칙어 행렬에서 건물 번호와 건물 이름 행렬로 받아오기
    var thisBld = dictGiven[inx];

    var bldInf = new RegExp(thisBld[1]+"\\("+thisBld[0]+"\\)","g");
    var bldInfArray = article.match(bldInf);

    //건물 이름(건물 번호)을 두 번 이상 표기
    if(bldInfArray!=null){
      if(bldInfArray.length > 1){
        updateOutput(article,bldInf,"건물 번호를 두 번 이상 표기했습니다.","purple");
      } else {
        var tbldInf = new RegExp(thisBld[1]+"\\("+thisBld[0]+"\\)");
        var tBldInfArray = article.match(tbldInf);
        var tonlyBldNm = new RegExp(thisBld[1]);
        var tonlyBldNo = new RegExp("[^0-9]"+thisBld[0]);
        var tonlyBldNmArray = article.match(tonlyBldNm);
        var tonlyBldNoArray = article.match(tonlyBldNo);
        if(flag==0){
          if(tonlyBldNmArray.index<tBldInfArray.index){
            var errorText = article.split(tBldInfArray[0]);
            var onlyBldNm = new RegExp(thisBld[1],"g");
            updateOutput(errorText[0],onlyBldNm,"건물을 이름으로 표시했는데 뒤에서 건물 이름과 건물 번호를 표시하고 있습니다.","purple");
            article += (bldInfArray[0] + errorText[1]);
            updateOutput(article,bldInf,"건물을 이름으로 표시했는데 뒤에서 건물 이름과 건물 번호를 표시하고 있습니다.","purple");
          }
        }
        if(tonlyBldNoArray.index<tBldInfArray.index){
          var errorText = article.split(tBldInfArray[0]);
          var onlyBldNo = LbRegExp("(?<![0-9])"+thisBld[0]);
          updateOutput2(errorText[0],onlyBldNo,"건물을 번호로 표시했는데 뒤에서 건물 이름과 건물 번호를 표시하고 있습니다.","purple");
          article += (bldInfArray[0] + errorText[1]);
          updateOutput(article,bldInf,"건물을 번호로 표시했는데 뒤에서 건물 이름과 건물 번호를 표시하고 있습니다.","purple");
        }
      }
    }
    //건물 이름(건물 번호를 한 번도 표기 안 함)
    else{
      if(flag==0){
        var onlyBldNm = new RegExp(thisBld[1],"g");
        updateOutput(article,onlyBldNm,thisBld[1]+"의 건물 번호는 "+thisBld[0].split("동")[0]+"입니다.","purple");
      }
      var onlyBldNo = LbRegExp("(?<![0-9])"+thisBld[0]);
      updateOutput2(article,onlyBldNo,thisBld[0]+"의 건물 이름은 "+thisBld[1]+"입니다.","purple");
    }

    var bldNm = new RegExp(thisBld[1],"g");

  }

}
