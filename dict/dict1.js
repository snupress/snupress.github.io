    var dict1 = [
    ["\&quot\;","잘못된 겹따옴표입니다. 끝이 뾰족한 겹따옴표(“”)를 써주세요."],
    ["'","잘못된 홑따옴표입니다. 끝이 뾰족한 홑따옴표(‘’)를 써주세요."],
    ["<br>’","홑따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["‘<br>","홑따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["&nbsp;’","홑따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["‘&nbsp;","홑따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["<br>”","겹따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["“<br>","겹따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["&nbsp;”","겹따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["“&nbsp;","겹따옴표가 뒤집혔습니다. 올바르게 고쳐주세요."],
    ["&nbsp;&nbsp;","띄어쓰기를 두 번 했습니다. 조판할 때 실수로 이어질 수 있으니 지워주세요."],
    ["<br>&nbsp;","띄어쓰기로 들여쓰기를 하지는 않았나요? 조판할 때 실수로 이어질 수 있으니 지워주세요."],
    ["·&nbsp;","가운뎃점을 뒷말과 붙여쓰십시오."],
    ["&nbsp;·","가운뎃점을 앞말과 붙여쓰십시오."],
    ["하여(?!가)","어미 '~하여'는 '~해'로 줄여 씁니다."],
    ["하였","어미 '~하였'은 '~했'으로 줄여 씁니다."],
    ["히어","어미 '~히어'는 '~혀'로 줄여 씁니다."],
    ["히었","어미 '~히었'은 '~혔'으로 줄여 씁니다."],
    ["되어","어미 '~되어'는 '~돼'로 줄여 씁니다."],
    ["되었","어미 '~되었'은 '~됐'로 줄여 씁니다."],
    ["리어(?!카)","어미 '~리어'는 '~려'로 줄여 씁니다."],
    ["리었","어미 '~리었'은 '~렸'로 줄여 씁니다."],
    ["\\.\\(","대학신문 기사를 인용했나요? 마침표와 괄호 사이를 띄어 씁시다."],
    ["서울대학교","'서울대학교'라는 말을 최대한 안 쓰는 게 좋지만, 쓰더라도 '서울대'로 줄여 씁니다."],
    ["우리 대학","학교를 지칭하지 않는 게 좋지만, 쓰더라도 '서울대'로 씁니다."],
    ["우리 학교","학교를 지칭하지 않는 게 좋지만, 쓰더라도 '서울대'로 씁니다."],
    ["법과대(학?)","'법과대학'은 '법대'로 줄여씁니다."],
    ["인문대학","'인문대학'은 '인문대'로 줄여씁니다."],
    ["미술대(학?)","'미술대학'은 '미대'로 줄여씁니다."],
    ["자연과학대(학?)","'자연과학대학'은 '자연대'로 줄여씁니다."],
    ["사회과학대(학?)","'사회과학대학'은 '사회대'로 줄여씁니다."],
    ["수의과대(학?)","'수의과대학'은 '수의대'로 줄여씁니다."],
    ["사범대학","'사범대학'은 '사범대'로 줄여씁니다."],
    ["약학대(학?)","'약학대학'은 '약대'로 줄여씁니다."],
    ["(?<!수)의과대(학?)","'의과대학'은 '의대'로 줄여씁니다."],
    ["농업생명과학대(학?)","'농업생명과학대학'은 '농생대'로 줄여씁니다."],
    ["간호대학","'간호대학'은 '간호대'로 줄여씁니다."],
    ["공과대(학?)","'공과대학'은 '공대'로 줄여씁니다."],
    ["음악대(학?)","'음악대학'은 '음대'로 줄여씁니다."],
    ["경영대학","'경영대학'은 '경영대'로 줄여씁니다."],
    ["생활과학대(학?)","'생활과학대학'은 '생활대'로 줄여씁니다."],
    ["조선해양공학부","2018년도 1학기 기준 '조선해양공학과'가 옳습니다."],
    ["경제학과","2018년도 1학기 기준 '경제학부'가 옳습니다."],
    ["정치학과","2018년도 1학기 기준 '정치외교학부'가 옳습니다."],
    ["외교학과","2018년도 1학기 기준 '정치외교학부'가 옳습니다."],
    ["화학과","2018년도 1학기 기준 '화학부'가 옳습니다."],
    ["천문학과","2018년도 1학기 기준 '물리·천문학부'가 옳습니다."],
    ["물리학과","2018년도 1학기 기준 '물리·천문학부'가 옳습니다."],
    ["물리천문학부","2018년도 1학기 기준 가운뎃점을 붙여 '물리·천문학부'가 옳습니다."],
    ["자유전공학과","2018년도 1학기 기준 '자유전공학부'가 옳습니다."],
    ["화학생물공학과","2018년도 1학기 기준 '화학생물공학부'가 옳습니다."],
    ["화학·생물공학","2018년도 1학기 기준 가운뎃점 없이 '화학생물공학부'가 옳습니다."],
    ["컴퓨터공학과","2018년도 1학기 기준 '컴퓨터공학부'가 옳습니다."],
    ["&nbsp;대학신문은","대학신문에서 대학신문을 지칭할 때는 겹낫표를 사용해 『대학신문』으로 씁니다."],
    ["&nbsp;대학신문이","대학신문에서 대학신문을 지칭할 때는 겹낫표를 사용해 『대학신문』으로 씁니다."],
    ["‘대학신문’","대학신문에서 대학신문을 지칭할 때는 겹낫표를 사용해 『대학신문』으로 씁니다."],
    ["총장&nbsp;선출","62대 취재부장은 '총장 선출'을 붙여쓰기로 통일했습니다."],
    ["구성&nbsp;비율","62대 취재부장은 '구성 비율'을 붙여쓰기로 통일했습니다."],
    ["참여&nbsp;비율","62대 취재부장은 '참여 비율'을 붙여쓰기로 통일했습니다."],
    ["학생참여","62대 취재부장은 '학생참여'를 띄어쓰기로 통일했습니다."],
    ["했다”라고","맞춤법에는 어긋나지만, 관행상 대학신문에서는 '했다”고'로 씁니다."],
    ["했다”라며","맞춤법에는 어긋나지만, 관행상 대학신문에서는 '했다”며'로 씁니다."],
    ["대학본부","'본부'로 씁니다."],
    ["대학 본부","'본부'로 씁니다."],
    ["일&nbsp;\\(","날짜와 요일은 붙여씁니다."],
    ["가운뎃점","가운뎃점 찾기가 귀찮았다면 여기 드리겠습니다. '·'"],
    ["가운데점","가운뎃점 찾기가 귀찮았다면 여기 드리겠습니다. '·'"],
    ["관정도서관","'중앙도서관 관정관'이 정식 명칭입니다."],
    ["(?<![1-9])60동","62대 데스크는 행정관의 동수를 표기하지 않기로 했습니다."],
    ["(?<![1-9])62동","62대 데스크는 중앙도서관의 동수를 표기하지 않기로 했습니다."],
    ["(?<![1-9])62-1동","62대 데스크는 중앙도서관 관정관의 동수를 표기하지 않기로 했습니다."],
    ["(?<![1-9])63동","62대 데스크는 학생회관의 동수를 표기하지 않기로 했습니다."],
    ["대&nbsp;학생회장","'사회대 홍길동 학생회장'과 같이 써야 합니다."],
    ["대&nbsp;학장","'사회대 홍길동 학장'과 같이 써야 합니다."],
    [",[0-2][0-9]\\)","학과와 학번 사이에는 가운뎃점을 써야 합니다."]
    ];
