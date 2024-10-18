import { createClient, QueryParams } from 'next-sanity';
import { dataset, projectId } from '@/sanity/lib/env';
export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-11',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return client.fetch(query, params, {
    next: {
      revalidate,
      tags,
    },
  });
}
