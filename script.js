function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();

    if (message === "") return;

    appendMessage("user", message);
    inputField.value = "";

    setTimeout(() => {
        let response = getBotResponse(message);
        appendMessage("bot", response);
    }, 1000);
}

function appendMessage(sender, message) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");

    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();

    // Greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("who are you") || input.includes("what is your name")) {
        return "Hi there! I'm your AI Hydration Coach. I help you stay hydrated by giving personalized advice. Ask me anything about water intake! 💧";
    }

    // Hydration Needs Based on Weight
    let weightMatch = input.match(/(\d{2,3})\s*kg/);
    if (weightMatch) {
        let weight = parseFloat(weightMatch[1]);
        let waterIntake = weight * 0.033;
        return `For your weight, you should drink about **${waterIntake.toFixed(2)} liters** of water per day. Do you track hydration with a smartwatch? ⌚💦`;
    }

    // Hydration Needs in Special Conditions
    if (input.includes("pregnancy") || input.includes("pregnant") || input.includes("breastfeeding")) {
        return "During pregnancy or breastfeeding, your water needs increase! Aim for at least **2.5 to 3 liters** of water daily. 💧🤰";
    }

    if (input.includes("exercise") || input.includes("workout") || input.includes("gym") || input.includes("sweat")) {
        return "During exercise, drink **500ml - 1L extra** water to replace sweat loss. Consider electrolytes if sweating a lot! 🏋️‍♂️💦";
    }

    if (input.includes("alcohol") || input.includes("beer") || input.includes("wine") || input.includes("hangover")) {
        return "Alcohol dehydrates you! Drink **one glass of water per alcoholic drink** to prevent dehydration. 🚰🍷";
    }

    if (input.includes("cold weather") || input.includes("winter")) {
        return "In cold weather, people often drink less water. Stay hydrated even if you don’t feel thirsty! ❄️💧";
    }

//     if (input.includes("plan") || input.includes("water intake timetable")) {
//         return "Stay Hydrated: The Perfect Daily Water Drinking Schedule 💧
// Water is essential for maintaining good health, boosting energy, and keeping your body functioning at its best. But did you know that when you drink water is just as important as how much you drink? Here's a simple and effective water drinking schedule to keep you refreshed throughout the day.

// 🌅 Morning Boost (7:00 AM - 8:00 AM): Start your day with a glass of water right after waking up. This helps to kickstart your metabolism, flush out toxins, and rehydrate your body after hours of sleep. Drinking another glass before breakfast prepares your digestive system for the day ahead.

// 🌞 Mid-Morning Refresh (10:00 AM): A mid-morning glass of water keeps you alert and energized. It helps maintain focus and prevents dehydration, especially if you're busy at work or school.

// 🥗 Pre-Lunch Hydration (12:30 PM): Drinking a glass of water about 30 minutes before lunch aids digestion and prevents overeating. It also helps your stomach prepare for food, making nutrient absorption more efficient.

// ☀️ Afternoon Recharge (3:00 PM): The afternoon slump is real! Instead of reaching for caffeine, have a glass of water to stay refreshed and maintain steady energy levels. Proper hydration keeps your body and mind sharp throughout the day.

// 🏃‍♂️ Evening Hydration (5:00 PM): Whether you're heading to the gym, finishing work, or preparing dinner, a glass of water in the early evening keeps your metabolism active and prevents dehydration.

// 🍽️ Pre-Dinner Support (7:30 PM): Drinking water before dinner helps with digestion and prevents excessive hunger. However, avoid drinking too much water during meals to ensure proper nutrient absorption.

// 🌙 Nighttime Detox (9:00 PM): A final glass of water before bed supports overnight detoxification and keeps you hydrated as you sleep. But be careful not to drink too much, as it might lead to midnight trips to the bathroom!

// 💧 Final Tip: Adjust your water intake based on your activity level, climate, and body weight. Carry a bottle with you and listen to your body’s thirst signals to stay optimally hydrated.";
//     }
    if (input.includes("desert") || input.includes("hot climate") || input.includes("heatwave")) {
        return "Hot climates increase dehydration risk. Aim for at least **3-4 liters** per day, plus electrolytes. 🌞💧";
    }

    // Hydration & Nutrition
    if (input.includes("diet plan") || input.includes("meal plan") || input.includes("nutrition") || input.includes("food") || input.includes("healthy diet")) {
        return "A balanced diet helps hydration! Eat water-rich foods like watermelon, cucumbers, and oranges. Avoid too much caffeine and alcohol. 🍉🥗";
    }

    if (input.includes("sodium") || input.includes("salt")) {
        return "High sodium (salt) intake can cause dehydration. Reduce processed foods and drink more water! 🚰🧂";
    }

    if (input.includes("fiber") || input.includes("digestion") || input.includes("constipation")) {
        return "Drinking enough water helps with digestion and prevents constipation. Eat fiber-rich foods for gut health! 🍎💦";
    }

    // Smart Tracking
    if (input.includes("smartwatch") || input.includes("fitness tracker") || input.includes("hydration app")) {
        return "Your smartwatch can track water intake, sweat loss, and activity. Sync it with a hydration app for better tracking! 📊";
    }

    // Hydration & Sleep
    if (input.includes("before bed") || input.includes("sleep quality") || input.includes("waking up thirsty")) {
        return "Drinking a small amount of water before bed helps, but too much can disrupt sleep. Balance it wisely! 💤💧";
    }

    // Hydration & Skin
    if (input.includes("clear skin") || input.includes("acne") || input.includes("glowing skin") || input.includes("dry skin")) {
        return "Drinking water keeps your skin hydrated and helps reduce acne! Include hydrating foods like cucumber and oranges. 🥒🍊";
    }

    // Health Conditions
    if (input.includes("diabetes")) {
        return "If you have diabetes, staying hydrated helps regulate blood sugar levels. Drink plenty of water and avoid sugary drinks. 🚰";
    }

    if (input.includes("kidney stones")) {
        return "Drink at least **2.5-3 liters** of water daily to prevent kidney stones. Lemon water may also help. 🏥💦";
    }

    if (input.includes("headache") || input.includes("fatigue") || input.includes("muscle cramps") || input.includes("dizzy") || input.includes("tired")) {
        return "These could be signs of dehydration! Drink water, rest, and check if you're getting enough electrolytes. 💧";
    }

    // Hydration Myths
    if (input.includes("8 glasses rule")) {
        return "The '8 glasses a day' rule is a guideline. Your needs depend on weight, activity, and climate! 💧";
    }

    if (input.includes("coffee dehydrates")) {
        return "Coffee has a mild diuretic effect, but in moderation, it does NOT significantly dehydrate you. ☕";
    }

    if (input.includes("tea dehydrates")) {
        return "Tea is mostly water! Herbal teas can even contribute to your daily hydration. 🍵💙";
    }

    // Fun Facts
    if (input.includes("fun fact") || input.includes("interesting fact")) {
        let facts = [
            "Your body is about **60% water**! 💧",
            "Your brain is nearly **75% water**—so stay hydrated for better focus. 🧠💦",
            "Water helps absorb nutrients and flush out toxins! 🚰",
            "Drinking water can boost metabolism by **30%** for about an hour. 🔥💧",
            "Even mild dehydration (1-2% loss) can impact memory and mood. Stay hydrated! 🧠"
        ];
        return facts[Math.floor(Math.random() * facts.length)];
    }

    // Default Response
    return "I'm here to help! Ask me about hydration, diet, exercise, weather, skin health, or hydration myths. 💙";
}
