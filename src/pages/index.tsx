import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

interface CardProps {
  title: string;
  description: string;
  to: string;
}

function Card({ title, description, to }: CardProps): ReactNode {
  return (
    <Link className={styles.linkCard} to={to}>
      <div>
        <Heading as="h3" className={styles.linkTitle}>
          {title}
        </Heading>
        <p className={styles.linkDescription}>{description}</p>
      </div>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <Heading as="h1" className={styles.heroTitle}>
                사람과 로봇의 안전한
                <span className={styles.heroAccent}> 공존</span>
              </Heading>
              <p className={styles.heroSubtitle}>에이딘로보틱스의 혁신적인 제품으로 손쉽게 구현하세요.</p>
              <div className={styles.heroCtas}>
                <Link className={styles.primaryCta} to="/docs/aidin/intro">
                  시작하기
                </Link>
                <Link className={styles.secondaryCta} to="/docs/aidin/api/intro">
                  API 살펴보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.linksSection}>
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              제품설명서
            </Heading>
          </div>
          <div className={styles.linkGrid}>
            <Card title="센서" description="힘/토크, 택타일, 레이더 센서" to="/docs/sensors/intro" />
            <Card title="AIDIN" description="고객 맞춤형 4족보행로봇" to="/docs/aidin/intro" />
            <Card title="로봇핸드" description="6축 힘/토크 센서가 탑재된 로봇핸드" to="/docs/hand/intro" />
            <Card title="모션제어기" description="실시간 로봇 모션 제어기" to="/docs/arc/intro" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
