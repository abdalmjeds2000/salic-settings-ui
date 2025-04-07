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
import { getFieldTitle, inputType } from '../../../utils/form-builder';


export type FieldsListProps = {
  fields: FormField[];
  onChange?: any;
}

export const FieldsList: React.FC<FieldsListProps> = ({ fields, onChange }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const dotIcon = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12.1" cy="12.1" r="1"/></svg>

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
            {fields.map((field, index) => (
              <SortableItem key={field.name} id={field.name}>
                <RowCard
                  title={field.label || field.name}
                  icon={<></>}
                  description={
                    <div className='field-description'>
                      <p>
                        <span>Field Type</span>
                        {dotIcon} 
                        <span>{getFieldTitle(field.type as inputType)}</span>
                      </p>
                      <p>
                        {field.rules?.[0]?.required ? 'Required' : 'Optional'}
                      </p>
                      {/* {field.props?.placeholder && <p>
                        <span>Placeholder</span>
                        {dotIcon} 
                        <span>{field.props.placeholder}</span>
                      </p>} */}
                    </div>
                  }
                  collapsable
                  collapsedDefaultValue={index === fields.indexOf(fields.find(f => !!extraContent(f)) || fields[0])} /* default open the first field have extra options, or the fields of index 0 */
                >
                  <div className='extra-content'>
                    <div className='content' hidden={!extraContent(field)}>
                      {extraContent(field)}
                    </div>
                    <div className='manage-row'>
                      <p className='title'>{/* Edit Field */}</p>
                      <div>
                        {/* <button type='button' className='btn danger-btn sm-btn'>Delete Field</button> */}
                        <button type='button' className='btn secondary-btn sm-btn'>Edit Field</button>
                      </div>
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

const extraContent = (field: FormField) => {
  switch (field.type as inputType) {
    case 'select':
    case 'multiSelect':
    case 'radio':
      return <RenderOptions options={field.options||[]} />
    case 'radiobuttons':
      return <RenderOptions options={field.options?.map((o, i) => ({ label: o.text || `Option ${i+1}`, value: o.optionProps.value }))||[]} />
    default:
      return null
  }
}

const RenderOptions: React.FC<{ options: { value: string; label: string }[] }> = ({ options }) => {
  return (
    <table className='options'>
      {options.map((_, index) => (
        <tr className='option-item' key={index}>
          <td className='label'>Options {index+1}</td>
          <td className='value'>{_.label}</td>
        </tr>
      ))}
    </table>
  )
}