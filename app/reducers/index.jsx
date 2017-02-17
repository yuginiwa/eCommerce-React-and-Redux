import {combineReducers} from 'redux';

import ItemsReducer from "ItemsReducer";
import CategoriesReducer from "CategoriesReducer";
import ShowSelectedCategoryItem from "ShowSelectedCategoryItem";

const AllReducers = combineReducers({
  items: ItemsReducer,
  categories: CategoriesReducer,
  activeCategory: ShowSelectedCategoryItem
});

export default AllReducers;
