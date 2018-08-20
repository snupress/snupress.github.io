function func3(){

  //지난달, ~월 뒤에 요일을 적었을때
  regExpDayPstMth = /(지난달|[0-9]월)\&nbsp\;[1-3]?[0-9]일\([월화수목금토일]\)/g;
  var arrayDayPstMth = article.match(regExpDayPstMth);
  if(arrayDayPstMth!=null){
    updateOutput(article,regExpDayPstMth,"이번 달의 요일만 적어야 합니다.","green")
  }
  //요일을 두번 이상 적었을 때
  regExpDateWithDay = /[1-3]?[0-9]일\([월화수목금토일]\)/g;
  var arrayDateWithDay = article.match(regExpDateWithDay);
  if(arrayDateWithDay!=null){
    if(arrayDateWithDay.length >1){
      updateOutput(article,regExpDateWithDay,"요일을 한 번만 적어야 합니다.","green")
    }
  }
}
