const User = require('../models/User');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        // Add password verification logic here (e.g., bcrypt)

        if (password === user.password) { // Placeholder: replace with actual password verification
            return res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { login };
