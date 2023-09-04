"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRelationalFieldsMapper = exports.academicDepartmentRelationalFields = exports.academicDepartmentSearchableFields = exports.academicDepartmentFilterableFields = void 0;
exports.academicDepartmentFilterableFields = [
    'searchTerm',
    'categoryId',
    'maxPrice',
    'minPrice',
];
exports.academicDepartmentSearchableFields = [
    'title',
    'author',
    'genre',
];
exports.academicDepartmentRelationalFields = ['categoryId'];
exports.academicDepartmentRelationalFieldsMapper = {
    categoryId: 'category',
};
