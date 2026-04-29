const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Get PDF path for a given email ID
 * @param {int} emailId 
 */
const getPdf = async (emailId) => {
    if (!emailId || Number.isNaN(emailId)) {
        throw new Error('Invalid email ID');
    }

    try {
        const response = await fetch(`${API_URL}/pdf/${emailId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch PDF');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching PDF:', error);
        throw error;
    }
};

export { getPdf };