export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}

export async function getContentBySlug<T>(
  _category: 'blog' | 'products' | 'legal',
  _slug: string,
): Promise<ContentItem<T> | null> {
  // Phase 1 loader stub - populated in Phase 6 with MDX loaders
  return null;
}

export async function getAllContent<T>(
  _category: 'blog' | 'products' | 'legal',
): Promise<ContentItem<T>[]> {
  // Phase 1 loader stub - populated in Phase 6 with MDX loaders
  return [];
}
