interface Props {
  query: string;
  variables?: Record<string, any>;
}

export async function strapiGraphQL({ query, variables = {} }: Props) {
  const endpoint = import.meta.env.STRAPI_URL || 'http://localhost:1337/graphql';
  const token = import.meta.env.STRAPI_TOKEN;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      throw new Error('Failed to fetch from Strapi');
    }

    return data;
  } catch (error) {
    console.error('Strapi Fetch Error:', error);
    return null;
  }
}
