import React, {useEffect} from 'react';
import './ContactsSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import img1 from '../../assets/icons/contacts/facebook.svg';
import img2 from '../../assets/icons/contacts/facebook_hover.svg';
import img3 from '../../assets/icons/contacts/linkedin_hover.svg';
import img4 from '../../assets/icons/contacts/linkedin.svg';
import img5 from '../../assets/icons/contacts/skype_hover.svg';
import img6 from '../../assets/icons/contacts/skype.svg';
import img7 from '../../assets/icons/contacts/telegram_hover.svg';
import img8 from '../../assets/icons/contacts/telegram.svg';
import img9 from '../../assets/icons/contacts/hexagon_empty_hover.svg';
import img10 from '../../assets/icons/contacts/hexagon_empty.svg';
import img11 from '../../assets/icons/contacts/light-theme/facebook_light.svg';
import img12 from '../../assets/icons/contacts/light-theme/telegram_light.svg';
import img13 from '../../assets/icons/contacts/light-theme/linkedin_light.svg';
import img14 from '../../assets/icons/contacts/light-theme/skype_light.svg';
import img15 from '../../assets/icons/contacts/light-theme/facebook_hover_light.svg';
import img16 from '../../assets/icons/contacts/light-theme/telegram_hover_light.svg';
import img17 from '../../assets/icons/contacts/light-theme/linkedin_hover_light.svg';
import img18 from '../../assets/icons/contacts/light-theme/skype_hover_light.svg';
import img19 from '../../assets/icons/contacts/light-theme/hexagon_empty_hover_light.svg';
import img20 from '../../assets/icons/contacts/light-theme/hexagon_empty_light.svg';

function ContactsSection() {
  // preload images
  useEffect(() => {
    const preloadedImgs = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
    ];
    preloadedImgs.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );

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
