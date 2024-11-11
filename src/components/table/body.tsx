import { TableProps } from './table';
import React from 'react';

export const TableBody: React.FC<Pick<TableProps, 'content'>> = ({
  content,
}) => (
  <tbody>
    {content.map((row, i) => (
      <tr
        key={i}
        className="even:bg-blue-gray-50/50 border-b border-slate-200 hover:bg-slate-50"
      >
        {row.map((elem, i) => (
          <td key={i} className="p-4 py-5">
            <p className="text-sm text-slate-500">{elem}</p>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
