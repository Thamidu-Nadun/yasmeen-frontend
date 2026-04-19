import React, {Fragment, useState} from 'react';
import {LabelSM} from '../../Components/Labels/Labels';
import {Lightbulb} from 'lucide-react';

const Composer = () => {
  const [data, setData] = useState ({
    recipient: '',
    subject: '',
    mail_type: 'Newsletter',
    email_body: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setData (prev => ({...prev, [name]: value}));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (data);
  };

  const handleDelete = () => {
    setData ({
      recipient: '',
      subject: '',
      mail_type: 'Newsletter',
      email_body: '',
    });
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-10 bg-gray-100">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="mt-16">
          <LabelSM name="New Draft" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Compose Automation
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
            Design your automated email script. Use double brackets{' '}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {'{{ variable_name }}'}
            </span>{' '}
            to inject variable data from your Google Sheet.
          </p>
        </div>

        {/* Form */}
        <div id="form" className="space-y-6">

          {/* Recipient */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Recipient
            </label>
            <input
              type="email"
              name="recipient"
              placeholder="john@gmail.com"
              defaultValue={data.recipient}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject Line"
              defaultValue={data.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Mail Type */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Mail Type
            </label>
            <select
              name="mail_type"
              defaultValue={data.mail_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="Newsletter">Newsletter</option>
              <option value="Promotion">Promotion</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Confirmation">Confirmation</option>
            </select>
          </div>

          {/* Body */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Body
            </label>
            <textarea
              name="email_body"
              placeholder="Start writing..."
              defaultValue={data.email_body}
              rows={6}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none resize-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Save Draft
          </button>
          <button
            onClick={handleDelete}
            className="w-full sm:w-auto px-5 py-3 text-red-500 border border-red-500 rounded-xl hover:bg-red-500 hover:text-white transition"
          >
            Delete Draft
          </button>
        </div>

      </div>

      {/* PRO TIP */}
      <div className="w-lg bg-gray-300/40 flex items-center gap-3 px-4 py-2 rounded">
        <Lightbulb
          className="text-blue-500 bg-gray-100 px-2 py-1 rounded"
          size={50}
        />
        <div>
          <h5 className="font-bold text-sm">Pro Tip</h5>
          <p className="text-xs text-gray-600">
            Use double brackets{' '}
            <span className="font-mono bg-gray-100 text-blue-400 px-2 py-1 rounded">
              {'{{ variable_name }}'}
            </span>{' '}
            to inject dynamic data from your Google Sheet into the email body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Composer;
