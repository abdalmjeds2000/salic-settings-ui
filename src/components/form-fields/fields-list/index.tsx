import React from 'react'
import { FormField } from '../../../types'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './sortable-item';
import { RowCard } from '../../row-card';


export type FieldsListProps = {
  fields: FormField[];
  onChange?: any;
}

export const FieldsList: React.FC<FieldsListProps> = ({ fields, onChange }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // const orderedFields = fields.sort((a, b) => a.order > b.order ? 1 : -1)

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      onChange(() => {
        const oldIndex = fields.findIndex((item) => item.name === active.id);
        const newIndex = fields.findIndex((item) => item.name === over.id);
        const sortedList = arrayMove(fields, oldIndex, newIndex);
        const orderedList = sortedList.map((item, index) => {
          item.order = index;
          return item
        })
        return orderedList;
      });
    }
  };
  
  return (
    <div className='salic-settings-item fields-list'>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={fields.map((field) => field.name)} strategy={verticalListSortingStrategy}>
          <div className='list-wrapper'>
            {fields.map((field) => (
              <SortableItem key={field.name} id={field.name}>
                <RowCard
                  title={field.label || field.name}
                  description={`Field Type - ${field.type}`}
                  collapsable
                >
                  <div className='manage-row'>
                    <p className='title'>Customize Field</p>
                    <div className='flex'>
                      <button type='button' className='edit'>Edit</button>
                      <button type='button' className='delete'>Delete</button>
                    </div>
                  </div>
                </RowCard>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}