function func3(){

  //지난달, ~월 뒤에 요일을 적었을때
  var dayOfPastMonth = article.match(/(지난달|[0-9]월)\&nbsp\;[1-3]?[0-9]일\([월화수목금토일]\)/g);
  if(dayOfPastMonth!=null){
    article = article.replace(/(지난달|[0-9]월)\&nbsp\;[1-3]?[0-9]일\([월화수목금토일]\)/g,function(x){return '<b title ="이번 달의 요일만 적어야 합니다." style ="background-color:green; text-decoration: underline">'+x+'</b>';});
    for(var x in dayOfPastMonth) {
        errorConsole += (dayOfPastMonth[x]+' : 이번 달의 요일만 적어야 합니다.<br>');
    }
  }
  //요일을 두번 이상 적었을 때
  var dateWithDay = article.match(/[1-3]?[0-9]일\([월화수목금토일]\)/g);
  if(dateWithDay!=null){
    if(dateWithDay.length >1){
      article = article.replace(/[1-3]?[0-9]일\([월화수목금토일]\)/g,function(x){return '<b title ="요일은 한 번씩만 적어야 합니다." style ="background-color:green; text-decoration: underline">'+x+'</b>';});
      for(var x in dateWithDay) {
          errorConsole += (dateWithDay[x]+' : 요일은 한 번씩만 적어야 합니다.<br>');
      }
    }
  }
}
