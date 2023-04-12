import { Find, FindInput, Label } from './GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from '../redux/contactSlice';

export const ContactFind = () => {
  const dispatch = useDispatch();

  const onFilter = useSelector(getFilter);

  const onChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <Find>
      <Label htmlFor="filter">Find contacts by name</Label>
      <div>
        <FindInput
          type="text"
          name="filter"
          value={onFilter}
          onChange={onChange}
        />
      </div>
    </Find>
  );
};
