function func4(){
  //탭 두번을 기준으로 각 건물들을 나눈 행렬
  var bldArray = dict4.split('    ');

  for(var inx in bldArray){
    //금칙어 행렬에서 건물 번호와 건물 이름 행렬로 받아오기
    var thisBld = getWordFromArrayLine(bldArray[inx]);

    var bldInf = new RegExp(thisBld[1]+"\\("+thisBld[0]+"\\)","g");
    var bldInfArray = article.match(bldInf);

        console.log(bldInf);
    //건물 이름(건물 번호)을 두 번 이상 표기
    if(bldInfArray!=null){
      if(bldInfArray.length > 1){
        updateOutput(article,bldInf,"건물 번호를 두 번 이상 표기했습니다.","purple");
      } else {
        
      }
    }
    //건물 이름(건물 번호를 한 번도 표기 안 함)
    else{
      var onlyBldNm = new RegExp(thisBld[1],"g");
      updateOutput(article,onlyBldNm,thisBld[1]+"의 건물 번호는 "+thisBld[0].split("동")[0]+"입니다.","purple");
      var onlyBldNo = LbRegExp("(?<![0-9])"+thisBld[0]);
      updateOutput2(article,onlyBldNo,thisBld[0]+"의 건물 이름은 "+thisBld[1]+"입니다.","purple");
    }

    var bldNm = new RegExp(thisBld[1],"g");
    //정규표현식으로 검색한 결과 행렬

  //   searchArray = article.match(wrdSrch);
     //결과출력에서 붉은줄로 표현
  //   updateOutput(article,wrdSrch,errMsg,"purple");
  }

}
