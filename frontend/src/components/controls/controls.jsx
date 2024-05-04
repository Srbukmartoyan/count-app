import axios from "axios"
import "./controls.css";
import { useGlobalContext } from '../../context/useContext';

const Controls = () => {
    const { items, setItems, isRestoreDisabled } = useGlobalContext();
    const onRefresh = async () => {
        try {
            const response = await axios.put('/refresh');
            setItems(response.data);
        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    }

    const onRestore = async () => {
        try {
            const response = await axios.get('/restore');
            setItems(response.data);
        } catch (error) {
            console.error("Error Restoring data:", error);
        }
    }

    return (
        <div className='controls-container'>
            <button className="refresh-items count" onClick={onRefresh}>
                Refresh numbers
                <i className="fa fa-retweet" aria-hidden="true"></i>
            </button>
            <button className="restore count" onClick={onRestore} disabled={isRestoreDisabled}>
                Restore
                <i className="fa fa-recycle" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Controls;
