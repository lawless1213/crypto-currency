import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import BadgesGrid from "../../components/UIPreviewSections/BadgesGrid";
import ButtonsGrid from "../../components/UIPreviewSections/ButtonsGrid";
import LinksGrid from "../../components/UIPreviewSections/LinksGrid";

import s from './UI.module.scss';



const UI = () => {
  return (
    <div className={s.UI}>
      <div className={`${s.SectionTitle} t-h1`}>THEME TOGGLER</div>
      <ThemeToggler/>
      <div className={`${s.SectionTitle} t-h1`}>TYPOGRAPHY</div>
      <div>
        <div className="t-h1">t-h1. Example</div>
        <div className="t-h2">t-h2. Example</div>
        <div className="t-h3">t-h3. Example</div>
        <div className="t-h4">t-h4. Example</div>
        <div className="t-h5">t-h5. Example</div>
        <div className="t-h6">t-h6. Example</div>
        <div className="t-lead">t-lead. Example</div>
        <div className="t-body">t-body. Example</div>
        <div className="t-caption">t-caption. Example</div>
        <div className="t-small">t-small. Example</div>
      </div>
      <div className={`${s.SectionTitle} t-h1`}>BADGES</div>
      <BadgesGrid/>
      <div className={`${s.SectionTitle} t-h1`}>LINKS</div>
      <LinksGrid/>
      <div className={`${s.SectionTitle} t-h1`}>BUTTONS</div>
      <ButtonsGrid/>
    </div>
  )
}

export default UI;