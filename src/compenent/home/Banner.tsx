import Image from "next/image";
import banner from '../../../public/images/bannerimage.jpg'
import { TiTick } from "react-icons/ti";
import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <div className={styles.title_container}>
                  <h1 className={styles.title}>Online Media</h1>
                </div>
                <p className={styles.desc}>
                    The best for your online success
                </p>

                <div className={styles.services}>
                    <div className={styles.serviceItem}>
                        <TiTick /> Digital marketing
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Website hosting
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Web programming
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Logo Designing
                    </div>
                </div>
            </div>
            <div className={styles.heroRight}>
                <Image 
                    src={banner} 
                    alt='banner' 
                    width={500} 
                    height={500} 
                />

            </div>
        </div>
    );
}

export default Banner;

