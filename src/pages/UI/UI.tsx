import ButtonsGrid from "../../components/Test/ButtonsGrid";
import LinksGrid from "../../components/Test/LinksGrid";
import s from './UI.module.scss';



const UI = () => {
  return (
    <div className={s.UI}>
      <div className={`${s.SectionTitle} t-h1`}>Links</div>
      <LinksGrid/>
      <div className={`${s.SectionTitle} t-h1`}>Buttons</div>
      <ButtonsGrid/>
    </div>
  )
}

export default UI;