import BadgesGrid from "../../components/UISections/BadgesGrid";
import ButtonsGrid from "../../components/UISections/ButtonsGrid";
import LinksGrid from "../../components/UISections/LinksGrid";

import s from './UI.module.scss';



const UI = () => {
  return (
    <div className={s.UI}>
      <div className={`${s.SectionTitle} t-h1`}>Links</div>
      <LinksGrid/>
      <div className={`${s.SectionTitle} t-h1`}>Badges</div>
      <BadgesGrid/>
      <div className={`${s.SectionTitle} t-h1`}>Buttons</div>
      <ButtonsGrid/>
    </div>
  )
}

export default UI;