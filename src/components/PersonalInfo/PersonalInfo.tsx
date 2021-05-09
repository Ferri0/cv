import React from 'react';
import './PersonalInfo.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as personalInfo from '../../data/personalInfo.json';

function PersonalInfo() {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={`personal-info personal-info--${theme}`}>
      {personalInfo.text.map((blockInfo) => {
        return (
          <div key={blockInfo.en.title} className={'personal-info__block'}>
            <div
              className={`personal-info__block--title personal-info__block--title-${theme}`}>
              {blockInfo[lang].title}
            </div>

            {blockInfo[lang].url ? (
              <a
                href={blockInfo[lang].url}
                target={'_blank'}
                rel={'noreferrer'}
                className={`personal-info__block--link personal-info__block--link-${theme}`}>
                {blockInfo[lang].value}
              </a>
            ) : (
              <div
                className={`personal-info__block--value personal-info__block--value-${theme}`}>
                {blockInfo[lang].value}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default PersonalInfo;
