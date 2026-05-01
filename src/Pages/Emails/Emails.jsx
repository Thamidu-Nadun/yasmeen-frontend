import {useContext, useEffect, useState} from 'react';
import {deleteMail, getMails} from '../../services/emailService';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';
import {LanguageContext} from '../../context/Language';

const content = {
  title: {
    en: 'Emails',
    jp: 'メール',
  },
  table: {
    id: {
      en: 'ID',
      jp: 'ID',
    },
    subject: {
      en: 'Subject',
      jp: '件名',
    },
    recipient: {
      en: 'Recipient',
      jp: '受信者',
    },
    action: {
      en: 'Action',
      jp: 'アクション',
    },
    view: {
      en: 'View',
      jp: '見る',
    },
    delete: {
      en: 'Delete',
      jp: '削除',
    },
  },
};

const Emails = () => {
  const [emails, setEmails] = useState ([]);
  const {language} = useContext (LanguageContext);

  useEffect (() => {
    getMails ().then (data => setEmails (data)).catch (_error => {
      toast.error ('Failed to load emails');
      console.log (_error);
    });
  }, []);

  const handleDelete = id => {
    if (window.confirm ('Are you sure you want to delete this email?')) {
      deleteMail (id)
        .then (() => {
          setEmails (emails.filter (email => email.id !== id));
          toast.success ('Email deleted successfully');
        })
        .catch (_error => {
          toast.error ('Failed to delete email');
          console.log (_error);
        });
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          {language === 'en' ? content.title.en : content.title.jp}
        </h1>

        <div className="bg-white rounded-2xl shadow-md border border-gray-200">

          <div className="w-full overflow-x-auto">
            <table className="min-w-150 w-full">
              <thead className="bg-gray-50">
                <tr className="text-xs font-semibold text-center text-gray-500 uppercase tracking-wide">
                  <th className="px-4 sm:px-6 py-3 text-left">
                    {language === 'en'
                      ? content.table.id.en
                      : content.table.id.jp}
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left">
                    {language === 'en'
                      ? content.table.subject.en
                      : content.table.subject.jp}
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left">
                    {language === 'en'
                      ? content.table.recipient.en
                      : content.table.recipient.jp}
                  </th>
                  <th className="px-4 sm:px-6 py-3">
                    {language === 'en'
                      ? content.table.action.en
                      : content.table.action.jp}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {emails.map (email => (
                  <tr
                    key={email.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-4 sm:px-6 py-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="font-bold text-blue-500">#</span>
                      {email.id}
                    </td>

                    <td className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-900 max-w-50 sm:max-w-xs truncate">
                      {email.subject}
                    </td>

                    <td className="px-4 sm:px-6 py-3 text-sm text-gray-600 max-w-45 sm:max-w-xs truncate">
                      {email.recipient}
                    </td>

                    <td className="px-4 sm:px-6 py-3 text-sm">
                      <div className="flex flex-col gap-2">
                        <Link
                          to={`/dispatch/${email.id}`}
                          className="p-1.5 text-xs text-center font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                        >
                          {language === 'en'
                            ? content.table.view.en
                            : content.table.view.jp}
                        </Link>

                        <div
                          onClick={() => handleDelete (email.id)}
                          className="p-1.5 text-xs text-center font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                        >
                          {language === 'en'
                            ? content.table.delete.en
                            : content.table.delete.jp}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {emails.length === 0 &&
            <div className="text-center py-10 text-gray-500 text-sm">
              No emails found
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Emails;
