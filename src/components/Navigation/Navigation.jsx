import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <nav>
      <NavLink to="/about-us">Про нас</NavLink>
      <a
        href="https://www.google.com.ua/maps/place/Sucheff+-+%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0+%D1%81%D1%83%D1%88%D0%B8%2F%D1%80%D0%BE%D0%BB%D0%BB%D1%8B%2F/@48.4012757,35.0307038,18z/data=!4m15!1m7!3m6!1s0x40dbfb420ca2e19f:0x6365b0eb833aa474!2z0YPQuy4g0J_QsNC90LjQutCw0YXQuCwgMTcsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!3b1!8m2!3d48.3986095!4d35.0346437!3m6!1s0x40dbfbf1457ad18d:0xaf3c4ba981312969!8m2!3d48.4012757!4d35.0313932!9m1!1b1?hl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Відгуки
      </a>
      <NavLink to="/delivery">Доставка по Дніпру</NavLink>
      <NavLink to="/news">Акції та новини</NavLink>
    </nav>
    <hr />
  </div>
);

export default Navigation;
