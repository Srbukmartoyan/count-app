import "./headerCounter.css";
import { useGlobalContext } from '../../context/useContext';

const HeaderCounter = () => {
    const { items } = useGlobalContext();
 
    const count = items.reduce((acc, item) => acc + (item.number !== 0 ? 1 : 0), 0);

    return (
        <div className='header-counter'>
            <div className="logo">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div className="logo-count-container">
                <div className="logo-count">{count}</div>
                <span>Items</span>
            </div>
        </div>
    )
}

export default HeaderCounter;
