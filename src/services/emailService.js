const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getMails = async () => {
    try {
        const response = await fetch(`${API_URL}/email`);
        if (!response.ok) {
            throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching emails:', error);
        throw error;
    }
};

const getEmailById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/email/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch email');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching email:', error);
        throw error;
    }
};

const createMail = async (recipient, subject, body, mailType, language) => {
    try {
        const response = await fetch(`${API_URL}/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipient, subject, body, mail_type: mailType, language }),
        });
        if (!response.ok) {
            throw new Error('Failed to create email');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating email:', error);
        throw error;
    }
};

const deleteMail = async (id) => {
    try {
        const response = await fetch(`${API_URL}/email/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete email');
        }
        return true;
    } catch (error) {
        console.error('Error deleting email:', error);
        throw error;
    }
};

const sendMailToClient = async (id) => {
    try {
        const response = await fetch(`${API_URL}/email/send/${id}`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error('Failed to send email to client');
        }
        return true;
    } catch (error) {
        console.error('Error sending email to client:', error);
        throw error;
    }
};

export { getMails, getEmailById, createMail, deleteMail, sendMailToClient };