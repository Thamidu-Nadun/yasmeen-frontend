import {useContext, useEffect, useState} from 'react';
import {LanguageContext} from '../../context/Language';
import {getLogs} from '../../services/logsService';

const content = {
  header: {en: 'Execution Logs', jp: '実行ログ'},
  description: {
    en: 'Monitor and audit script executions across your workspace. Detailed telemetry for automated workflows and API integrations.',
    jp: 'ワークスペース全体のスクリプト実行を監視および監査します。自動化されたワークフローとAPI統合の詳細なテレメトリ。',
  },
  table: {
    recipient: {en: 'Recipient', jp: '受信者'},
    timestamp: {en: 'Timestamp', jp: 'タイムスタンプ'},
    type: {en: 'Type', jp: 'タイプ'},
    status: {en: 'Status', jp: 'ステータス'},
  },
};

// const logData = [
//   {
//     id: 1,
//     recipient: 'john-doe@x.com',
//     timestamp: '1776603589206',
//     type: 'Automated Email',
//     status: true,
//   },
//   {
//     id: 2,
//     recipient: 'leehang@example.com',
//     timestamp: '1776603589206',
//     type: 'Automated Email',
//     status: false,
//   },
//   {
//     id: 3,
//     recipient: 'elon@example.com',
//     timestamp: '1776603589206',
//     type: 'Report Generation',
//     status: true,
//   },
//   {
//     id: 4,
//     recipient: 'musk@x.com',
//     timestamp: '1776603589206',
//     type: 'Automated Email',
//     status: false,
//   },
// ];

const colors = [
  'bg-red-400/80',
  'bg-green-400/80',
  'bg-blue-400/80',
  'bg-yellow-400/80',
  'bg-purple-400/80',
  'bg-pink-400/80',
  'bg-indigo-400/80',
  'bg-teal-400/80',
];

const Logs = () => {
  const {language} = useContext (LanguageContext);
  const [logData, setLogData] = useState ([]);

  useEffect (() => {
    const fetchedLogs = getLogs ();
    fetchedLogs
      .then (data => setLogData (data))
      .catch (error => console.error ('Error fetching logs:', error));
  }, []);
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            {language === 'en' ? content.header.en : content.header.jp}
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {language === 'en'
              ? content.description.en
              : content.description.jp}
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                <tr>
                  {Object.entries (content.table).map (([key, value]) => (
                    <th key={key} className="px-6 py-3">
                      {language === 'en' ? value.en : value.jp}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {logData.length > 0
                  ? logData.map (log => (
                      <tr
                        key={log.id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        {/* Recipient */}
                        <td className="px-6 py-4 flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold ${colors[Math.floor (Math.random () * colors.length)]}`}
                          >
                            {log.user.charAt (0).toUpperCase ()}
                          </div>
                          <span className="font-medium text-gray-700">
                            {log.user}
                          </span>
                        </td>

                        {/* Timestamp */}
                        <td className="px-6 py-4 text-gray-500">
                          {new Date (
                            parseInt (log.timestamp)
                          ).toLocaleDateString ('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                          })}
                        </td>

                        {/* Type */}
                        <td className="px-6 py-4">
                          <span className="wrap-break-word px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700
                          ">
                            {log.type}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${log.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
                          >
                            {log.status ? 'Success' : 'Failure'}
                          </span>
                        </td>
                      </tr>
                    ))
                  : <tr>
                      <td
                        colSpan="4"
                        className="text-center py-10 text-gray-400"
                      >
                        No logs available
                      </td>
                    </tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
