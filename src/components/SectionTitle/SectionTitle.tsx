import React from 'react';
import './SectionTitle.scss';

type sectionTitleProps = {
  titleText: string;
  theme: string;
};

function SectionTitle({titleText, theme}: sectionTitleProps) {
  return (
    <div className={`section-title section-title--${theme}`}>{titleText}</div>
  );
}

export default SectionTitle;
