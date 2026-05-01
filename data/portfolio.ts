export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const portfolioData = {
  profile: {
    name: "양이수(Isu Yang)",
    role: "AI Engineer & Computational Thinker",
    introduction:
      "이론적 이해를 실제 시스템으로 구현하는 AI 엔지니어입니다. LLM 최적화, 데이터 기반 자동화, 알고리즘 설계를 중심으로 문제를 해결하며, 성능과 구조를 동시에 개선하는 시스템을 구축합니다.",
    stack: [
      "Python",
      "TypeScript",
      "OpenAI API",
      "LLM Fine-tuning",
      "Prompt Optimization",
      "Selenium",
    ],
    experience: "3+ years of applied AI and software engineering",
  },
  about: {
    description:
      "데이터 구조 설계, 모델 동작 분석, 알고리즘 최적화부터 실제 서비스로의 구현까지 이어지는 AI 시스템의 전 과정을 다룹니다. 특히 구조적 이해를 기반으로 재현 가능하고 확장 가능한 시스템을 만드는 것을 중요하게 생각합니다.",
    workStyle: [
      "문제를 구조적으로 분석하고 목표와 제약 조건을 기반으로 최적의 시스템을 설계합니다",
      "재현 가능성과 실제 유저 경험을 고려한 설계를 지향합니다",
      "실패 사례를 분석하여 모델과 시스템 구조를 함께 개선합니다",
    ],
    strengths: [
      "LLM 프롬프트 구조 설계 및 파인튜닝 데이터 구축을 통한 성능 최적화",
      "자동화 시스템부터 AI 기반 서비스까지 폭넓은 개발 경험",
    ],
    values: ["Precision", "Scalability", "Insight", "Execution"],
  },
  skillGroups: [
    {
      title: "AI Engineering",
      skills: [
        "LLM Fine-tuning",
        "Prompt Optimization",
        "RAG Systems",
        "Evaluation Design",
        "AI System Architecture",
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        "Python",
        "Data Processing Pipelines",
        "Automation (Selenium)",
        "Excel Data Engineering",
        "Algorithm Design",
      ],
    },
    {
      title: "Product & Delivery",
      skills: [
        "System Prototyping",
        "Web Integration",
        "API Design",
        "Workflow Automation",
        "Performance Optimization",
      ],
    },
  ],
  experiences: [
    {
      period: "2026 - Present",
      title: "AI Engineer",
      company: "Independent Research & Development",
      summary:
        "LLM 최적화, 개인정보 처리방침 분석 모델, 자동화 시스템 등 실제 활용 가능한 AI 시스템을 설계하고 개발하고 있습니다. 성능을 정량적으로 개선하는 데 초점을 맞추고 있습니다.",
    },
    {
      period: "2024 - 2026",
      title: "Full-Stack & AI Developer",
      company: "Academic & Personal Projects",
      summary:
        "데이터 기반 애플리케이션과 AI 시스템을 개발하며, 이론적 개념을 실제 문제 해결에 적용하는 경험을 축적했습니다.",
    },
    {
      period: "2022 - 2024",
      title: "Algorithm & System Developer",
      company: "Project-Based Work",
      summary:
        "게임 엔진, 최적화 알고리즘, 실험적 AI 모델 등을 개발하며 효율성과 구조적 완성도를 중심으로 시스템을 설계했습니다.",
    },
  ],
  projects: [
  {
    title: "EvalBuddy (edu_sim)",
    description:
      "강의 내용을 기반으로 학생의 이해도와 교육 효과를 사전에 예측하는 AI 교육 평가 시스템입니다. 강의 목표를 자동 추출하고, 학습된 학생 시뮬레이터를 통해 다양한 학습 반응을 생성한 뒤, AI 면접 평가를 통해 이해도를 정량화하여 리포트로 제공합니다. 데이터 파이프라인부터 모델 학습, API 서버, 웹 인터페이스까지 전체 시스템을 직접 설계 및 구현했습니다.",
    tags: ["Python", "LLM", "Simulation", "Evaluation", "Vercel"],
    githubUrl: "https://github.com/yangisu/edu-sim_",

  },    
  {
    title: "Risk Analyzer Extension",
    description:
      "사용자의 개인정보 선호도와 서비스 약관을 비교하여 독소 조항을 자동으로 탐지하고 위험도를 평가하는 크롬 브라우저 확장형 AI 시스템을 설계했습니다. 약관 문장을 조항 단위로 구조화한 뒤, 개인정보 수집 범위, 제3자 제공, 국외 이전, 권리 포기 조항 등을 추출하고 사용자 설정과 충돌 여부를 분석하여 통합 위험도를 산출합니다. LLM 기반 파싱과 규칙 기반 검증을 결합하여 실제 사용 가능한 수준의 분석 정확도와 일관성을 확보했습니다.",
    tags: ["Python", "LLM", "Fine-Tuning", "Prompt Engineering", "Data Structuring"],

  },

] as Project[],

  caseStudy: {
    title: "Case Study: EvalBuddy (edu_sim)",
    context:
      "기존 교육 평가 방식은 강의 이후에만 이루어지며, 실제 교육 효과를 사전에 예측하거나 정량적으로 분석하는 데 한계가 있었습니다. 이를 해결하기 위해 강의 설계 단계에서 학습 결과를 시뮬레이션할 수 있는 시스템을 구축하고자 했습니다.",
    challenge:
      "강의 내용을 기반으로 학생의 이해도를 예측하기 위해서는 단순 요약이 아닌, 학습자의 반응을 생성하는 시뮬레이션 모델과 이를 평가할 수 있는 기준이 동시에 필요했습니다. 또한 평가 결과를 정량화하고 일관되게 유지하는 것이 핵심 과제였습니다.",
    approach: [
      "강의 텍스트에서 학습 목표를 구조적으로 추출하는 파이프라인 설계",
      "AI-Hub 데이터를 활용하여 학생 시뮬레이터 모델 학습",
      "Whisper 기반 ASR을 통해 음성 강의 데이터까지 확장 가능한 구조 설계",
      "면접관 역할의 LLM을 파인튜닝하여 학습 결과를 평가하는 시스템 구축",
      "시뮬레이션 결과를 정량화하여 리포트로 생성하는 평가 로직 구현",
    ],
    outcome: [
      "강의 단계에서 교육 효과를 사전에 예측할 수 있는 구조 확보",
      "학생 반응 시뮬레이션과 평가를 통합한 end-to-end 시스템 구현",
      "정량적 지표 기반 교육 평가 가능성 검증",
    ],
    stack: ["Python", "LLM", "Whisper", "Simulation Model", "Vercel API"],
  },
};

