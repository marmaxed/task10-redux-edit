import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  const handleEdit = service => {
    dispatch(editService(service.id, service.name, service.price));
  };

  return (
    <ul>
      {items.map(service => (
        <li key={service.id}>
          {service.name} {service.price}
          <button onClick={() => handleEdit(service)}>Edit</button>
          <button onClick={() => handleRemove(service.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
