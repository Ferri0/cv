import React from 'react';
import './SectionTitle.scss';

type sectionTitleProps = {
  titleText: string;
};

function SectionTitle({titleText}: sectionTitleProps) {
  return <div className={'section-title'}>{titleText}</div>;
}

export default SectionTitle;
