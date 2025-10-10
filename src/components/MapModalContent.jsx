import Map from '../sections/Map/Map';
import Filter from '../sections/MarketplaceExchangers/Filter';
import styles from './MapModal.module.css';

export default function MapModalContent({ onClose }) {
    return (
        <div className={styles.wrap}>
            <Filter />
            <Map />
        </div>
    );
}
