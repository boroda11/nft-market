
import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Приветствую тебя в нашем NFT магазине."
        description="Покупай, продавай, и зарабатывай на NFT.
        К нашей платформе ProNef присоединилось 25+ миллионов людей."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Торговая площадка c умным UI"
        description="Испытайте маслянистый пользовательский интерфейс. Плавные цвета, плавный дизайн, плавный UI интерфейс."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Установка"
        description="ProNef создан с использованием Expo, который изначально работает на всех пользовательских устройствах. Вы можете легко и быстро пользоваться нашим приложением на смартфоне, планшете или ПК"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Творческий подход к созданию маркетплейса"
        description="Приложение состоит из двух экранов. На первом список всех NFT, а на втором экране вы увидите детали конкретного NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Artem Borodenko</span>
        </p>
      </div>
    </>
  );
}

export default App;
