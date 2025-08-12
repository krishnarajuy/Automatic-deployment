// import React from 'react';
// import type { PointsTableEntry } from '../types/iplTypes';

// interface PointsTableProps {
//   table: PointsTableEntry[];
// }

// const PointsTable: React.FC<PointsTableProps> = ({ table }) => {
//   if (!table || table.length === 0) {
//     return <p className="p-4">Points table is currently unavailable.</p>;
//   }

//   return (
//     <div className="p-2 sm:p-4">
//       <h2 className="text-2xl font-bold mb-4 text-ipl-blue">Points Table</h2>
//       <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Pos</th>
//               <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Team</th>
//               <th className="px-1 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Played</th>
//               <th className="px-1 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Won</th>
//               <th className="px-1 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Lost</th>
//               <th className="px-1 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">NR</th>
//               <th className="px-1 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Pts</th>
//               <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">NRR</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* The map function iterates over the 'table' data to create table rows */}
//             {table.map((entry, index) => (
//               // Each row is a <tr> element.
//               // The key is important for React's rendering.
//               // Conditional className is applied for highlighting.
//               <tr key={entry.team.shortName} className={index < 4 ? 'bg-green-50' : ''}>
//                 {/* Each cell within the row is a <td> element. */}
//                 {/* There is no whitespace between the <tr> and the first <td>, or between <td> elements, */}
//                 {/* that would render as a text node and cause the hydration error. */}
//                 <td className="px-2 py-2 sm:py-3 whitespace-nowrap text-sm font-medium text-gray-900">{entry.position}</td>
//                 <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <img className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-2" src={entry.team.logo || '/teams/default.png'} alt={entry.team.name} />
//                     <span className="text-sm font-medium text-gray-900">{entry.team.shortName}</span>
//                     <span className="text-xs text-gray-500 ml-1 hidden md:inline">({entry.team.name})</span>
//                   </div>
//                 </td>
//                 <td className="px-1 py-2 sm:py-3 whitespace-nowrap text-sm text-gray-500 text-center hidden sm:table-cell">{entry.matchesPlayed}</td>
//                 <td className="px-1 py-2 sm:py-3 whitespace-nowrap text-sm text-gray-500 text-center">{entry.wins}</td>
//                 <td className="px-1 py-2 sm:py-3 whitespace-nowrap text-sm text-gray-500 text-center">{entry.losses}</td>
//                 <td className="px-1 py-2 sm:py-3 whitespace-nowrap text-sm text-gray-500 text-center hidden sm:table-cell">{entry.noResult}</td>
//                 <td className="px-1 py-2 sm:py-3 whitespace-nowrap text-sm font-bold text-gray-900 text-center">{entry.points}</td>
//                 <td className="px-2 py-2 sm:py-3 whitespace-nowrap text-sm text-gray-500 text-center">{entry.netRunRate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PointsTable;






import React from 'react';
import type { PointsTableEntry } from '../types/iplTypes';
import './PointsTable.css'; // Import external CSS

interface PointsTableProps {
  table: PointsTableEntry[];
}

const PointsTable: React.FC<PointsTableProps> = ({ table }) => {
  if (!table || table.length === 0) {
    return <p className="pt-unavailable">Points table is currently unavailable.</p>;
  }

  return (
    <div className="pt-container">
      <h2 className="pt-title">Points Table</h2>
      <div className="pt-table-wrapper">
        <table className="pt-table">
          <thead className="pt-thead">
            <tr>
              <th className="pt-th pos">Pos</th>
              <th className="pt-th team">Team</th>
              <th className="pt-th played">Played</th>
              <th className="pt-th won">Won</th>
              <th className="pt-th lost">Lost</th>
              <th className="pt-th nr">NR</th>
              <th className="pt-th pts">Pts</th>
              <th className="pt-th nrr">NRR</th>
            </tr>
          </thead>
          <tbody>
            {table.map((entry, index) => (
              <tr
                key={entry.team.shortName}
                className={`pt-row ${index < 4 ? 'pt-top-team' : ''}`}
              >
                <td className="pt-td pos">{entry.position}</td>
                <td className="pt-td team">
                  <div className="pt-team-info">
                    <img
                      className="pt-team-logo"
                      src={entry.team.logo || '/teams/default.png'}
                      alt={entry.team.name}
                    />
                    <span className="pt-team-short">{entry.team.shortName}</span>
                    <span className="pt-team-full">{`(${entry.team.name})`}</span>
                  </div>
                </td>
                <td className="pt-td played">{entry.matchesPlayed}</td>
                <td className="pt-td won">{entry.wins}</td>
                <td className="pt-td lost">{entry.losses}</td>
                <td className="pt-td nr">{entry.noResult}</td>
                <td className="pt-td pts">{entry.points}</td>
                <td className="pt-td nrr">{entry.netRunRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
