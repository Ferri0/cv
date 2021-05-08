import React from 'react';
import './ContactsSection.scss';
// import {RootStateOrAny, useSelector} from 'react-redux';
import {preloadImgs} from '../../utils/preloadImgs';
import {RootStateOrAny, useSelector} from 'react-redux';

const imgUrls = [
  '../../assets/icons/contacts/facebook.svg',
  '../../assets/icons/contacts/facebook_hover.svg',
  '../../assets/icons/contacts/linkedin_hover.svg',
  '../../assets/icons/contacts/linkedin.svg',
  '../../assets/icons/contacts/skype_hover.svg',
  '../../assets/icons/contacts/skype.svg',
  '../../assets/icons/contacts/telegram_hover.svg',
  '../../assets/icons/contacts/telegram.svg',
  '../../assets/icons/contacts/hexagon_empty_hover.svg',
  '../../assets/icons/contacts/hexagon_empty.svg',
  '../../assets/icons/contacts/light-theme/facebook_light.svg',
  '../../assets/icons/contacts/light-theme/telegram_light.svg',
  '../../assets/icons/contacts/light-theme/linkedin_light.svg',
  '../../assets/icons/contacts/light-theme/skype_light.svg',
  '../../assets/icons/contacts/light-theme/facebook_hover_light.svg',
  '../../assets/icons/contacts/light-theme/telegram_hover_light.svg',
  '../../assets/icons/contacts/light-theme/linkedin_hover_light.svg',
  '../../assets/icons/contacts/light-theme/skype_hover_light.svg',
  '../../assets/icons/contacts/hexagon_empty_hover_light.svg',
  '../../assets/icons/contacts/hexagon_empty_light.svg',
];

function ContactsSection() {
  // TODO implement theme change
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );

  preloadImgs(imgUrls);

  return (
    <section className={'contacts-section'}>
      <div className={'contacts-section__row'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://www.linkedin.com/in/yaroslav-abrasimov-3aa422210/'}
          target={'_blank'}
          className={`contacts-section__icon contacts-section__icon--linkedin-${theme}`}
          rel="noreferrer"
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://www.facebook.com/profile.php?id=100021945720608'}
          target={'_blank'}
          className={`contacts-section__icon contacts-section__icon--fb-${theme}`}
          rel="noreferrer"
        />
      </div>
      <div className={'contacts-section__row'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://join.skype.com/invite/nVgndFEKAqH6'}
          target={'_blank'}
          className={`contacts-section__icon contacts-section__icon--skype-${theme}`}
          rel="noreferrer"
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://t.me/yabrasimov'}
          target={'_blank'}
          className={`contacts-section__icon contacts-section__icon--telegram-${theme}`}
          rel="noreferrer"
        />
      </div>
    </section>
  );
}

export default ContactsSection;
