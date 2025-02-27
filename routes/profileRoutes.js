const express = require('express');
const router = express.Router();
const axios = require('axios');
const md5 = require('md5');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/profile', async (req, res) => {
    const { email, fullName, username, phoneNumber, location, website, bio } = req.body;

    // Generate Gravatar hash
    const gravatarHash = md5(email.trim().toLowerCase());
    const gravatarURL = `https://www.gravatar.com/avatar/${gravatarHash}?d=identicon`;

    try {
        // Fetch Gravatar data
        const gravatarProfileURL = `https://www.gravatar.com/${gravatarHash}.json`;
        let gravatarData = {};

        try {
            const response = await axios.get(gravatarProfileURL);
            gravatarData = response.data.entry[0] || {};
        } catch (error) {
            console.warn("No Gravatar profile found, using form input instead.");
        }

        // Ensure form data takes priority, fallback to Gravatar API data if not provided
        const userProfile = {
            email,
            fullName: fullName || gravatarData.displayName || "N/A",
            username: username || gravatarData.preferredUsername || "N/A",
            phoneNumber: phoneNumber || (gravatarData.phoneNumbers?.length > 0 ? gravatarData.phoneNumbers[0].value : "No phone available"),
            location: location || gravatarData.currentLocation || "Unknown",
            websites: website 
                ? [website] 
                : (gravatarData.profileUrl ? [gravatarData.profileUrl] : []),
            bio: bio || gravatarData.aboutMe || "No bio available",
            gravatarImage: gravatarData.thumbnailUrl || gravatarURL
        };

        res.render('profile', { user: userProfile });

    } catch (error) {
        console.error("Profile processing error:", error);
        res.status(500).send("Error processing profile");
    }
});

module.exports = router;
