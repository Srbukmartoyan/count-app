import { useGlobalContext } from "../../context/useContext";
import axios from "axios";
import "./list.css";
import Row from "./row/Row";

const List = () => {
  const { items, setItems, setRestoreDisabled } = useGlobalContext();

  const handleIncrement = async (index, itemId) => {
    try {
      const response = await axios.put(`/items/increment/${itemId}`);
      const updatedItem = response.data;
      
      const updatedItems = [...items];
      updatedItems[index] = updatedItem;
      setItems(updatedItems);
    } catch (error) {
      console.error('Error incrementing item:', error);
    }
  };

  const handleDecrement = async (index, itemId) => {
    try {
      const response = await axios.put(`/items/decrement/${itemId}`);
      const updatedItem = response.data;

      const updatedItems = [...items];
      updatedItems[index] = updatedItem;
      setItems(updatedItems);
    } catch(error){
      console.error('Error decrementing item:', error);
    }
  }

  const handleRemove = async (index, itemId) => {
    try {
      const response = await axios.delete(`/remove/${itemId}`);

      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      if (!updatedItems.length) {
        setRestoreDisabled(false);
      }
      setItems(updatedItems);
    } catch(error) {
      console.log('Error deleting item:', error);
    }
  }

  return (
    <div className ="counter-container">
      {items.map((item, index) => {
        return (
          <Row 
            key={index}
            count={item.number} 
            onIncrement={() => handleIncrement(index, item.id)}
            onDecrement={() => handleDecrement(index, item.id)}
            onRemove={() => handleRemove(index, item.id)}
          />
        )
      })}
    </div>
  )
}

export default List;
