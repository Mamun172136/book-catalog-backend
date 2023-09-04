export const academicDepartmentFilterableFields: string[] = [
  'searchTerm',
  'categoryId',
  'maxPrice',
  'minPrice',
];

export const academicDepartmentSearchableFields: string[] = [
  'title',
  'author',
  'genre',
];

export const academicDepartmentRelationalFields: string[] = ['categoryId'];
export const academicDepartmentRelationalFieldsMapper: {
  [key: string]: string;
} = {
  categoryId: 'category',
};
