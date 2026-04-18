import {Category, Class, Position, School, Type} from "./PlayerData";

export type FiltersType = {
  categories: Category[];
  schools: School[];
  positions: Position[];
  types: Type[];
  classes: Class[];
};
