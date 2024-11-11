import { createFileRoute } from '@tanstack/react-router';
import { Table } from '../../components/table/table';
import { usersQueryOption } from '../../api/users';
import { useMemo } from 'react';

type UserSearchParams = {
  limit: number;
  offset: number;
};

export const Route = createFileRoute('/_dashboard/users')({
  validateSearch: (search: Record<string, unknown>): UserSearchParams => ({
    limit: Number(search?.limit) || 10,
    offset: Number(search?.offset) || 0,
  }),
  loaderDeps: ({ search: { limit, offset } }) => ({ limit, offset }),
  loader: ({ context: { client }, deps: { limit, offset } }) =>
    client.ensureQueryData(usersQueryOption({ limit, offset })),
  component: RouteComponent,
});

const header = ['id', 'name', 'email', 'created at'];

function RouteComponent() {
  const response = Route.useLoaderData();
  const content = useMemo(
    () =>
      response?.payload.map(user => [
        user.id,
        user.name,
        user.email,
        user.created_at.toISOString(),
      ]),
    [response],
  );

  return (
    <div>
      <Table header={header} content={content} />
    </div>
  );
}
