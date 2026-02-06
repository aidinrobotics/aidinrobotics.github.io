import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// 문서 경로 접두사
const SENSORS_PREFIX = "sensors";
const AIDIN_PREFIX = "aidin";
const HAND_PREFIX = "hand";
const ARC_PREFIX = "arc";

// 센서
const sensors: SidebarsConfig["sensors"] = [`${SENSORS_PREFIX}/intro`];

// AIDIN
const aidin: SidebarsConfig["aidin"] = [
  `${AIDIN_PREFIX}/intro`,
  {
    type: "category",
    label: "작동하기",
    items: [
      `${AIDIN_PREFIX}/operation/safety-warnings`,
      `${AIDIN_PREFIX}/operation/booting`,
      `${AIDIN_PREFIX}/operation/driving`,
      `${AIDIN_PREFIX}/operation/charging`,
    ],
  },
  {
    type: "category",
    label: "탑재장비",
    items: [
      {
        type: "category",
        label: "AIDIN CAMS",
        items: [
          `${AIDIN_PREFIX}/payloads/aidin-cams/intro`,
          `${AIDIN_PREFIX}/payloads/aidin-cams/mounting`,
          {
            type: "category",
            label: "작동하기",
            items: [
              `${AIDIN_PREFIX}/payloads/aidin-cams/operation/safety-warnings`,
              `${AIDIN_PREFIX}/payloads/aidin-cams/operation/control`,
            ],
          },
        ],
      },
    ],
  },
  {
    type: "category",
    label: "API",
    items: [
      `${AIDIN_PREFIX}/api/intro`,
      {
        type: "category",
        label: "REST API",
        items: [`${AIDIN_PREFIX}/api/rest-api/overview`, `${AIDIN_PREFIX}/api/rest-api/robots`],
      },
      {
        type: "category",
        label: "MQTT API",
        items: [`${AIDIN_PREFIX}/api/mqtt-api/overview`],
      },
      {
        type: "doc",
        id: `${AIDIN_PREFIX}/api/error-codes`,
        label: "오류 코드",
      },
      {
        type: "doc",
        id: `${AIDIN_PREFIX}/api/versioning`,
        label: "API 버전 정책",
      },
    ],
  },
  {
    type: "category",
    label: "관리하기",
    items: [`${AIDIN_PREFIX}/maintenance/battery`, `${AIDIN_PREFIX}/maintenance/leg`],
  },
  {
    type: "category",
    label: "문제해결",
    items: [`${AIDIN_PREFIX}/troubleshooting/error-codes`],
  },
];

// 로봇핸드
const hand: SidebarsConfig["hand"] = [`${HAND_PREFIX}/intro`];

// 모션제어기
const arc: SidebarsConfig["arc"] = [`${ARC_PREFIX}/intro`];

const sidebars: SidebarsConfig = {
  sensors,
  aidin,
  hand,
  arc,
};

export default sidebars;
