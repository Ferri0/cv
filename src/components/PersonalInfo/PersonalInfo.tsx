import React from 'react';
import './PersonalInfo.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as personalInfo from '../../data/personalInfo.json';

function PersonalInfo() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'personal-info'}>
      {personalInfo.text.map((blockInfo) => {
        return (
          <div key={blockInfo.en.title} className={'personal-info__block'}>
            <div className={'personal-info__block--title'}>
              {blockInfo[lang].title}
            </div>

            {blockInfo[lang].url ? (
              <a
                href={blockInfo[lang].url}
                target={'_blank'}
                rel={'noreferrer'}
                className={'personal-info__block--link'}>
                {blockInfo[lang].value}
              </a>
            ) : (
              <div className={'personal-info__block--value'}>
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