import { Pagination } from './Pagination';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
};

export default meta;

export const Default = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const MiddlePage = {
  args: {
    currentPage: 3,
    totalPages: 10,
  },
};
