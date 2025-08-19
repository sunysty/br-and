// generate_reviews.js
// 모든 업종 × 상황 × 말투 × 길이 조합으로 리얼톤 후기 생성 → reviews_all.json

const fs = require("fs");

// ----------------------------
// 설정(필요 시 조절)
// ----------------------------
const COUNT_PER_COMBO = 10; // 각 조합당 후기 개수
const OUTPUT = "reviews_all.json";
const RNG_SEED = 19; // 재현가능성(원하면 바꿔도 OK)

// ----------------------------
// 유틸: 의사난수(seed 고정)
// ----------------------------
let _seed = RNG_SEED;
function rand() {
  // xorshift32
  _seed ^= _seed << 13;
  _seed ^= _seed >>> 17;
  _seed ^= _seed << 5;
  // 0~1
  return ((_seed >>> 0) / 0xffffffff);
}
function choice(arr) { return arr[Math.floor(rand() * arr.length)]; }

// ----------------------------
// 스키마 정의
// ----------------------------
const industries = [
  // 교육·상담
  { id: "tutor",          name: "과외" },
  { id: "career-adult",   name: "성인진로상담" },
  { id: "psychology",     name: "심리상담" },
  { id: "job-consulting", name: "취업컨설팅" },
  { id: "branding",       name: "퍼스널브랜딩" },
  // 공방·클래스
  { id: "ceramic",        name: "도예공방" },
  { id: "baking",         name: "베이킹클래스" },
  { id: "flower",         name: "플라워클래스" },
  { id: "calligraphy",    name: "캘리그라피" },
  // 뷰티·헬스
  { id: "hair",           name: "미용실" },
  { id: "nail",           name: "네일" },
  { id: "skin",           name: "피부관리" },
  { id: "pilates",        name: "필라테스" },
  { id: "pt",             name: "PT" },
  // 생활 서비스
  { id: "cleaning",       name: "청소" },
  { id: "moving",         name: "이사" },
  { id: "laundry",        name: "세탁" },
  { id: "pet",            name: "반려동물서비스" },
  { id: "cafe",           name: "카페" },
  { id: "restaurant",     name: "음식점" }
];

const situations = [
  { id: "first",       name: "첫 방문" },
  { id: "regular",     name: "단골" },
  { id: "special",     name: "특별한 날" },
  { id: "referral",    name: "지인 추천" },
  { id: "promotion",   name: "프로모션" },
  { id: "improvement", name: "성과 변화" },
  { id: "problem",     name: "문제 해결" },
  { id: "longterm",    name: "장기 이용" },
  { id: "comparison",  name: "비교 선택" },
  { id: "online",      name: "비대면 이용" }
];

const tones = [
  { id: "friendly",     name: "친근한" },
  { id: "polite",       name: "정중한" },
  { id: "casual",       name: "캐주얼한" },
  { id: "enthusiastic", name: "열정적인" },
  { id: "calm",         name: "차분한" }
];

const lengths = [
  { id: "short",  name: "짧게",  lines: 2 },
  { id: "medium", name: "중간",  lines: 4 },
  { id: "long",   name: "길게",  lines: 6 }
];

// ----------------------------
// 업종 그룹별 어휘(리얼톤 다양화 핵심)
// ----------------------------
const groupByIndustry = {
  // 교육·상담
  tutor: "edu",
  "career-adult": "edu",
  psychology: "edu",
  "job-consulting": "edu",
  branding: "edu",
  // 공방·클래스
  ceramic: "craft",
  baking: "craft",
  flower: "craft",
  calligraphy: "craft",
  // 뷰티·헬스
  hair: "beauty",
  nail: "beauty",
  skin: "beauty",
  pilates: "fitness",
  pt: "fitness",
  // 생활 서비스
  cleaning: "service",
  moving: "service",
  laundry: "service",
  pet: "service",
  cafe: "fnb",
  restaurant: "fnb"
};

const LEX = {
  edu: {
    core: ["강점", "전문성", "경험", "메시지", "포지셔닝", "로드맵", "목표", "피드백", "적성", "역량"],
    scenes: ["자기소개", "인터뷰", "포트폴리오", "링크드인", "면접", "발표", "블로그 글", "과제", "계획표", "실행 단계"],
    metrics: ["확신", "집중도", "실행률", "응답률", "합격 가능성", "만족도"]
  },
  craft: {
    core: ["작업 과정", "완성도", "색감", "마감", "구성", "재료", "디테일", "동선", "시연", "샘플"],
    scenes: ["원데이", "체험 수업", "도안", "굽기", "시연 시간", "클래스 진행", "사진 촬영", "전시", "패키징", "포장"],
    metrics: ["완성 속도", "만족도", "재참여 의사", "추천 의사", "몰입도", "난이도 체감"]
  },
  beauty: {
    core: ["디자인", "컬", "모발", "케어", "큐티클", "컬러", "결 정리", "윤기", "마감", "컨설팅"],
    scenes: ["컷", "염색", "펌", "케어", "연장", "젤", "드릴케어", "두피 진단", "스타일링", "홈케어 안내"],
    metrics: ["유지력", "손상도", "재방문 의사", "만족도", "추천 의사", "관리 난이도"]
  },
  fitness: {
    core: ["자세", "호흡", "코어", "정렬", "유연성", "밸런스", "컨디션", "체력", "통증", "리커버리"],
    scenes: ["기구 수업", "개인 레슨", "소도구", "매트", "체형 분석", "스트레칭", "하체 안정", "어깨 이완", "호흡 패턴", "일상 자세"],
    metrics: ["통증 지수", "가동 범위", "피로도", "수면 질", "지구력", "회복 속도"]
  },
  service: {
    core: ["일정", "마감", "동선", "정리", "약속", "안전", "케어", "가성비", "소통", "결과물"],
    scenes: ["입주", "이사 당일", "사전 방문", "현장 점검", "예약", "추가 요청", "사후 안내", "사진 공유", "견적", "포장"],
    metrics: ["시간 준수", "마감 퀄리티", "재이용 의사", "추천 의사", "스트레스 지수", "만족도"]
  },
  fnb: {
    core: ["맛", "식감", "재료", "시그니처", "풍미", "온도", "밸런스", "비주얼", "동선", "친절도"],
    scenes: ["피크 시간", "웨이팅", "예약", "테이크아웃", "라스트오더", "디저트 쇼케이스", "원두", "에스프레소 샷", "브런치", "셰프 추천"],
    metrics: ["재방문 의사", "가성비", "추천 의사", "만족도", "대기 시간", "분위기 점수"]
  }
};

// 상황별 스켈레톤(산문형 문장 뼈대, 업종무관)
const SKELETONS = {
  first: [
    "처음이라 조심스러웠는데 {role}이(가) 끝까지 들어줘서 마음이 놓였어요.",
    "첫 만남이었는데 제 상황을 정확히 파악해줘서 놀랐어요.",
    "첫 방문인데 분위기가 편안해서 솔직하게 이야기할 수 있었어요.",
    "처음이라 긴장했는데 흐름이 자연스럽게 이어져서 부담이 없었어요.",
    "첫 안내에서 제 {core}를 짚어줘서 방향이 보였어요."
  ],
  regular: [
    "몇 번 이어오다 보니 제 변화를 같이 기록해주는 느낌이에요.",
    "갈 때마다 한 단계씩 진전이 보입니다.",
    "처음보다 지금은 고민의 결이 완전히 달라졌어요.",
    "꾸준히 받으니 작은 습관들이 쌓여서 체감이 큽니다.",
    "정기적으로 피드백을 받으니 흔들릴 틈이 없네요."
  ],
  special: [
    "오늘은 꼭 소식을 전하고 싶었어요. 준비하던 결과가 드디어 나왔습니다.",
    "중요한 날을 앞두고 마지막 점검을 받았고, 덕분에 마음이 단단해졌어요.",
    "기념일 같은 하루였어요. 스스로가 자랑스러웠습니다.",
    "작은 성취가 아니라 확실한 변화를 만들었다는 확신이 들었어요.",
    "오랫동안 바라던 목표를 하나 체크했습니다."
  ],
  referral: [
    "지인 소개로 왔는데 왜 추천했는지 알겠더라고요.",
    "친구가 강력 추천해서 왔는데 제 스타일과 정말 잘 맞습니다.",
    "회사 동료가 여기만큼은 믿으라고 해서 방문했어요.",
    "리뷰만 보고 온 게 아니라, 지인의 변화가 증명해줬어요.",
    "가까운 지인이 추천해줘서 반신반의했는데 결과가 말해줍니다."
  ],
  promotion: [
    "체험으로 가볍게 시작했는데 생각보다 밀도 있는 경험이었어요.",
    "프로모션으로 한 번 경험해보고 바로 추가 신청했습니다.",
    "할인으로 시작했지만 가치는 전혀 가벼운 게 아니었어요.",
    "이벤트 덕분에 첫 문턱을 쉽게 넘을 수 있었습니다.",
    "가격보다 남는 게 확실한 시간이었어요."
  ],
  improvement: [
    "가장 큰 변화는 제 {core}를 언어로 설명할 수 있게 됐다는 점이에요.",
    "전과 비교하면 {metric}에서 확실히 달라졌습니다.",
    "기록을 보니 작은 변화가 모여 선명해졌어요.",
    "예전엔 감이었는데, 이제는 지표로 확인됩니다.",
    "{metric}이 눈에 띄게 올라가면서 자신감이 붙었어요."
  ],
  problem: [
    "막혔던 부분이 무엇이었는지 정확히 알게 됐고, 풀리는 실마리를 잡았습니다.",
    "혼자서는 계속 제자리였는데 방향을 바꾸니 움직입니다.",
    "원인을 짚고 우선순위를 재배치하니 답이 보였어요.",
    "감정이 아니라 구조로 바라보니 훨씬 수월했어요.",
    "겉 증상이 아니라 뿌리를 건드리니 달라집니다."
  ],
  longterm: [
    "몇 달 꾸준히 하다 보니 제 언어와 습관이 바뀌었어요.",
    "처음엔 낯설었는데 지금은 제 리듬이 생겼습니다.",
    "길게 보니 급한 변화보다 안정적인 변화가 더 크게 느껴져요.",
    "오래 가져갈 수 있는 방식이라는 확신이 듭니다.",
    "지속할수록 ‘왜 하는지’가 선명해졌어요."
  ],
  comparison: [
    "여러 곳 비교해보고 선택했는데, 여기만의 강점이 분명해요.",
    "가격보다 소통과 결과가 중요하다는 걸 깨달았습니다.",
    "몇 군데 받아보니 접근법의 깊이가 다르더라고요.",
    "‘나에게 맞는가’를 기준으로 보면 선택은 명확해요.",
    "처음엔 망설였지만 결과를 보고 나니 고민이 사라졌어요."
  ],
  online: [
    "비대면이라 걱정했는데 흐름이 매끄러웠어요.",
    "줌으로 진행했는데 집중도가 떨어지지 않아요.",
    "온라인이어도 기록과 피드백이 탄탄해서 만족스러웠습니다.",
    "이동 시간을 아끼면서도 밀도는 그대로였어요.",
    "원격이어도 충분히 깊게 다루어졌습니다."
  ]
};

// 업종 그룹별 직함/역할 단어
function roleWord(industryId) {
  const g = groupByIndustry[industryId];
  if (g === "fitness") return "코치님";
  if (g === "beauty") return "디자이너";
  if (g === "craft") return "강사님";
  if (g === "service") return "기사님";
  if (g === "fnb") return "직원분";
  return "컨설턴트"; // edu default
}

// 상황 스켈레톤 문장에 업종 어휘 삽입
function fillSkeleton(industryId, sitId) {
  const g = groupByIndustry[industryId];
  const lex = LEX[g];
  let line = choice(SKELETONS[sitId]);
  line = line.replace("{role}", roleWord(industryId));
  line = line.replace("{core}", choice(lex.core));
  line = line.replace("{metric}", choice(lex.metrics));
  return line;
}

// 업종 그룹별 추가 문장(진짜 후기 같은 디테일)
function buildClause(industryId) {
  const g = groupByIndustry[industryId];
  const lex = LEX[g];
  const core = choice(lex.core);
  const scene = choice(lex.scenes);

  if (g === "edu") {
    const pool = [
      `${scene} 기준으로 ${core}를 정리하니 이야기 흐름이 깔끔해졌어요.`,
      `${core}와 제 경험을 묶으니 메시지가 또렷해졌습니다.`,
      `${scene} 피드백을 반영했더니 반응이 달라졌어요.`,
      `막연하던 부분이 ${core} 하나로 정리되니 확신이 생겼습니다.`,
      `대화 녹취를 글로 옮기며 ${core}를 구체화했어요.`
    ];
    return choice(pool);
  }
  if (g === "craft") {
    const pool = [
      `${scene}에서 ${core}를 배운 뒤 완성도가 눈에 띄게 올라갔어요.`,
      `처음엔 서툴렀는데 ${core} 팁을 적용하니 결과가 달라집니다.`,
      `수업 사진을 보니 ${core} 디테일이 살아났어요.`,
      `샘플을 따라가며 ${core}를 익히니 과정이 재밌어졌습니다.`,
      `${scene} 동선을 잡아주셔서 집중이 훨씬 잘 됐어요.`
    ];
    return choice(pool);
  }
  if (g === "beauty") {
    const pool = [
      `${scene} 후에 ${core}이(가) 자연스럽게 정돈됐어요.`,
      `제가 원하는 느낌을 말로 설명하니 ${core} 방향을 바로 잡아주셨어요.`,
      `사진으로 보니 ${core} 유지력이 훨씬 좋아졌습니다.`,
      `관리 팁 덕분에 집에서도 ${core} 컨디션이 안정적이에요.`,
      `시술 내내 소통이 부드러워서 ${core} 결과가 더 만족스러웠습니다.`
    ];
    return choice(pool);
  }
  if (g === "fitness") {
    const pool = [
      `${scene}로 접근하니 ${core} 컨트롤이 쉬워졌어요.`,
      `수업 후 일상에서 ${core}을(를) 의식하니 통증이 줄었습니다.`,
      `지난주와 비교하면 ${core} 체감이 확실히 올라왔어요.`,
      `호흡을 맞추니 ${core} 안정이 바로 느껴졌습니다.`,
      `작은 수정 한 번에 ${core} 느낌이 달라졌어요.`
    ];
    return choice(pool);
  }
  if (g === "service") {
    const pool = [
      `${scene} 일정 조율이 정확해서 스트레스가 적었어요.`,
      `현장에서 ${core} 기준을 먼저 설명해줘서 안심했습니다.`,
      `사진으로 ${core} 전후를 공유해줘서 믿음이 갔어요.`,
      `추가 요청도 바로 반영해줘서 ${core} 결과가 깔끔했습니다.`,
      `약속 시간과 ${core} 마감 모두 정확했습니다.`
    ];
    return choice(pool);
  }
  // fnb
  const pool = [
    `${scene}에 맞춘 ${core} 밸런스가 좋아서 만족스러웠어요.`,
    `시그니처 메뉴에서 ${core}가 분명하게 느껴졌습니다.`,
    `분위기와 ${core}가 잘 맞아서 재방문 의사 있어요.`,
    `테이크아웃인데도 ${core} 컨디션이 깔끔했어요.`,
    `작은 디테일까지 ${core} 신경 쓴 게 보였습니다.`
  ];
  return choice(pool);
}

// 톤 스타일링(과도한 반복 피함)
function styleByTone(text, toneId) {
  const base = text.replace(/\s+/g, " ").trim();
  if (toneId === "enthusiastic") {
    const bang = choice(["!", "!!", "!", "!"]);
    return base.replace(/\.$/, "") + bang;
  }
  if (toneId === "friendly") {
    const tail = choice(["ㅎㅎ", "", ":)", "", ""]);
    return tail ? `${base} ${tail}` : base;
  }
  if (toneId === "casual") {
    const tail = choice(["~", "", " :)", ""]);
    return `${base}${tail}`;
  }
  if (toneId === "polite") {
    return base.replace(/했어요/g, "했습니다").replace(/좋았어요/g, "좋았습니다");
  }
  if (toneId === "calm") {
    return base.replace(/정말\s*/g, "").replace(/!+/g, ".");
  }
  return base;
}

// 길이별 줄 수만큼 문장 구성(스켈레톤+업종문장 섞기)
function makeReview(industryId, situationId, toneId, linesTarget) {
  const lines = [];
  // 1줄째: 상황 스켈레톤
  lines.push(fillSkeleton(industryId, situationId));
  // 나머지 줄: 업종 그룹 디테일/스켈레톤 랜덤 믹스
  while (lines.length < linesTarget) {
    if (rand() < 0.6) {
      lines.push(buildClause(industryId));
    } else {
      lines.push(fillSkeleton(industryId, situationId));
    }
  }
  // 톤 스타일 적용
  const styled = lines.map(l => styleByTone(l, toneId));
  return styled.join("\n");
}

// 메인 생성기
function generateAll() {
  const dataset = {
    version: "1.0.0",
    generatedAt: new Date().toISOString(),
    schema: {
      situations: situations.map(s => ({ id: s.id, name: s.name })),
      tones:      tones.map(t => ({ id: t.id, name: t.name })),
      lengths:    lengths.map(l => ({ id: l.id, name: l.name, lines: l.lines }))
    },
    industries: []
  };

  for (const ind of industries) {
    const reviews = [];
    for (const sit of situations) {
      for (const tone of tones) {
        for (const len of lengths) {
          for (let i = 1; i <= COUNT_PER_COMBO; i++) {
            const content = makeReview(ind.id, sit.id, tone.id, len.lines);
            reviews.push({
              id: `${ind.id}-${sit.id}-${tone.id}-${len.id}-${String(i).padStart(4, "0")}`,
              situationId: sit.id,
              situationName: sit.name,
              toneId: tone.id,
              toneName: tone.name,
              length: len.id,
              content
            });
          }
        }
      }
    }
    dataset.industries.push({
      industryId: ind.id,
      industryName: ind.name,
      reviews
    });
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(dataset, null, 2), "utf8");
  console.log(`✅ Done: ${OUTPUT}`);
  console.log(`Industries: ${dataset.industries.length}`);
  console.log(`Total reviews: ${dataset.industries.reduce((a, x) => a + x.reviews.length, 0)}`);
}

generateAll();
