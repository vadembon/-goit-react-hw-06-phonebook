import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterBox, TitleList, FilterForm, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const getFilter = useSelector(state => state.filter.value);

  const changeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <FilterBox>
      <TitleList>Contacts</TitleList>
      <FilterForm>Find contacts by name</FilterForm>
      <FilterInput type="text" value={getFilter} onChange={changeFilter} />
    </FilterBox>
  );
};
