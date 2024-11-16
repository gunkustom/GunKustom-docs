import React, { useEffect } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Our Platform",
    imgSrc: require("@site/static/img/Gunkustom-Logo-Full-White-1.png").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Your Build",
    imgSrc: require("@site/static/img/Gunkustom-Logo-Full-White-1.png").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Your Parts",
    imgSrc: require("@site/static/img/Gunkustom-Logo-Full-White-1.png").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [colorMode]);

  return (
    <div className={clsx("col col--4")}>
      <div
        className="text--center"
        style={{
          backgroundColor: colorMode === "light" ? "#505040" : "#FF6B00",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          className={clsx(
            styles.featureImg,
            colorMode === "dark" && styles.darkImg
          )}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
