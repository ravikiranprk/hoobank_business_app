import styles, { layout } from '../style';
import Button from './Button';
import { card } from '../assets';


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>Find a better card deal <br className="sm:block hidden" /> in a few steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsum nulla nobis repellat obcaecati, ratione sunt id inventore unde harum beatae praesentium est natus impedit amet labore facilis temporibus aliquam.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal
