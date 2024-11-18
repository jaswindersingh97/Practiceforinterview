import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragAndDropList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ]);

  // Handle drag and drop events
  const moveItem = (draggedId, droppedId) => {
    const draggedItemIndex = items.findIndex(item => item.id === draggedId);
    const droppedItemIndex = items.findIndex(item => item.id === droppedId);
    const updatedItems = [...items];

    // Remove the dragged item and place it at the new index
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(droppedItemIndex, 0, draggedItem);

    setItems(updatedItems); // Update state with new order
  };

  const DraggableItem = ({ item }) => {
    const [, drag] = useDrag({
      type: 'ITEM',
      item: { id: item.id },
    });

    return (
      <div ref={drag} style={styles.item} className="draggable-item">
        {item.text}
      </div>
    );
  };

  const DroppableList = () => {
    const [, drop] = useDrop({
      accept: 'ITEM',
      drop: (draggedItem) => {
        moveItem(draggedItem.id, draggedItem.id);
      },
    });

    return (
      <div ref={drop} style={styles.list}>
        {items.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return <DroppableList />;
};

const styles = {
  list: {
    padding: '10px',
    margin: '20px',
    border: '2px solid black',
    borderRadius: '8px',
    minHeight: '200px',
  },
  item: {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'move',
  },
};

export default DragAndDropList;
