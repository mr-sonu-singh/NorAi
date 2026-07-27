import { BlogCardProps } from '../../cards/BlogCard/BlogCard.types';
import { PaginationProps } from '@/components/molecules/Pagination/Pagination.types';

export type BlogPostItem = Omit<BlogCardProps, 'variant' | 'pending'>;

export type BlogPreviewSectionVariant = 'Preview' | 'Hub';

export interface BlogPreviewSectionProps {
  heading: string;
  posts: BlogPostItem[];
  showSearch?: boolean;
  pagination?: Omit<PaginationProps, 'className'>;
  variant?: BlogPreviewSectionVariant;
  pending?: boolean;
}
