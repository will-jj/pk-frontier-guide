import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Origins',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This guide aims to provide users with an overview of the changes Pk Frontier will make, & the teams it will include.
      </>
    ),
  },
  {
    title: 'Early Days',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Currently this is not much more than the scaffolding website, please be patient as it is built upon.
      </>
    ),
  },
  {
    title: 'Future',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Addition of more teams, box/slot information, items/tms, "generic" Pokemon for team building. 
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
