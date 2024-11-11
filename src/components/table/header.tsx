import { TableProps } from './table';
import React from 'react';

export const TableHeader: React.FC<Pick<TableProps, 'header'>> = ({
  header,
}) => (
  <thead>
    <tr>
      {header.map(h => (
        <th key={h} className="border-b border-slate-200 bg-slate-50 p-4">
          <p className="text-b text-sm font-extrabold uppercase leading-none text-slate-500">
            {h}
          </p>
        </th>
      ))}
    </tr>
  </thead>
);
