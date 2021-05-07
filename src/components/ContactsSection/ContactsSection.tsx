import React from 'react';
import './ContactsSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';

function ContactsSection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );

  return (
    <section className={'contacts-section'}>
      <div className={'contacts-section__row'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://github.com/Ferri0/completed-projects'}
          target={'_blank'}
          className={'contacts-section__icon contacts-section__icon--linkedin'}
          rel="noreferrer"
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://www.facebook.com/profile.php?id=100021945720608'}
          target={'_blank'}
          className={'contacts-section__icon contacts-section__icon--fb'}
          rel="noreferrer"
        />
      </div>
      <div className={'contacts-section__row'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://github.com/Ferri0/completed-projects'}
          target={'_blank'}
          className={'contacts-section__icon contacts-section__icon--skype'}
          rel="noreferrer"
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href={'https://github.com/Ferri0/completed-projects'}
          target={'_blank'}
          className={'contacts-section__icon contacts-section__icon--telegram'}
          rel="noreferrer"
        />
      </div>
    </section>
  );
}

export default ContactsSection;
