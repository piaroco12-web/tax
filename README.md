# 연금저축·IRP 세액공제 계산기

인주초 AI 경제교육 연수용 정적 웹 앱입니다. 입력값은 브라우저에서 계산하며 서버로 보내거나 저장하지 않습니다.

## 실행과 검산

`public/index.html`을 브라우저에서 열고 예시 버튼으로 확인합니다. 입력 단위는 만원입니다.

| 예시 | 총급여 | 연금저축 | IRP | 예상 절세액 |
| --- | ---: | ---: | ---: | ---: |
| ① | 5,000 | 600 | 300 | 1,485,000원 |
| ② | 6,000 | 700 | 0 | 792,000원 |
| ③ | 5,000 | 300 | 700 | 1,485,000원 |

ISA 전환 예시는 예시 ①에 IRP 전환액 3,000만원을 더합니다. 기본 공제대상 900만원과 전환 추가 공제대상 300만원에 16.5%를 적용하면 1,980,000원입니다.

근로소득만 있는 경우에 총급여 5,500만원 이하에는 소득세 공제율 15%, 초과에는 12%를 적용합니다. 지방소득세 효과를 포함한 추정에는 각각 16.5%, 13.2%를 적용합니다. 금액은 원 단위로 표시하며 원 미만은 버립니다. [국세청 안내](https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7875&mi=2238)

## GitHub와 Vercel

1. 이 계산기 폴더의 내용만 새 GitHub 저장소 루트에 올립니다.
2. Vercel에서 **Add New → Project**로 저장소를 가져옵니다.
3. Root Directory는 저장소 루트, Framework Preset은 **Other**, Output Directory는 **public**으로 설정합니다. `vercel.json`에 해당 설정이 들어 있습니다. 빌드 명령과 환경변수는 필요 없습니다.
4. Deploy 후 발급된 URL에서 위 세 가지 예시를 확인합니다. [Vercel 정적 사이트 빌드 안내](https://vercel.com/docs/builds#skipping-the-build-step)

## AI Studio

<div align="center">

<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <h1>Built with AI Studio</h2>

  <p>The fastest path from prompt to production with Gemini.</p>

  <a href="https://aistudio.google.com/apps">Start building</a>

</div>
