export type Subcategory = {
  id: number;
  name: string;
  color: string;
};

export type Category = {
  id: number;
  name: string;
  color: string;
  icon: string;
  subcategories: Subcategory[];
};
