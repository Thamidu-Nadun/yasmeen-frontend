const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getLogs = async () => {
    try {
        const response = await fetch(`${API_URL}/log`);
        if (!response.ok) {
            throw new Error('Failed to fetch logs');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};

export { getLogs };