import type React from 'react';
import { TableBody } from './body';
import { Pagination } from './pagination';
import { TableHeader } from './header';

export type TableProps = {
  header: string[];
  content: string[][];
};

export const Table: React.FC<TableProps> = ({ header, content }) => (
  <div className="relative flex h-full w-full flex-col overflow-scroll rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
    <table className="w-full min-w-max table-auto text-left">
      <TableHeader header={header} />
      <TableBody content={content} />
    </table>
    <Pagination />
  </div>
);
