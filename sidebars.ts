import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // 설명서
  manualSidebar: [
    "intro",
    {
      type: "category",
      label: "작동하기",
      items: ["operation/safety-warnings", "operation/booting", "operation/driving", "operation/charging"],
    },
    {
      type: "category",
      label: "탑재장비",
      items: [
        {
          type: "category",
          label: "AIDIN CAMS",
          items: [
            "payloads/aidin-cams/intro",
            "payloads/aidin-cams/mounting",
            {
              type: "category",
              label: "작동하기",
              items: ["payloads/aidin-cams/operation/safety-warnings", "payloads/aidin-cams/operation/control"],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "관리하기",
      items: ["maintenance/battery", "maintenance/leg"],
    },
    {
      type: "category",
      label: "문제해결",
      items: ["troubleshooting/error-codes"],
    },
  ],
};

export default sidebars;
