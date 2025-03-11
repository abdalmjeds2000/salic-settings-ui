import React, { CSSProperties } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform ? { x: 0, y: transform.y, scaleX: 1, scaleY: 1 } : null),
    transition,
    position: 'relative',
    touchAction: 'none',
    borderRadius: '6px',
    zIndex: isDragging ? 99 : 'auto', // Set high z-index when dragging
    boxShadow: isDragging ? '0px 8px 16px rgba(0,0,0,0.1)' : 'none', // Optional: Add shadow for better effect
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div {...attributes} {...listeners} className='handler'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
      </div>
      {children}
    </div>
  );
};
