import React from 'react';
import s from './cover.module.scss'
const Cover = () => {
  return (
    <section className={s.cover}>
      <h1 className={s.cover__title}>Что в мире творится?</h1>
      <p className={s.cover__text}>Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за
        прошедшую неделю.</p>
    </section>
  )
}
export default Cover;