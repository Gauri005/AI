function getBotResponse(input) {
    input = input.toLowerCase();

    // Greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("who are you") || input.includes("what is your name")) {
        return "Hello! I'm your personal AI Hydration Coach 💧. I'm here to guide you on staying hydrated based on your lifestyle, health, and activity levels. Ask me anything about water, hydration, or how it affects your body!";
    }

    // Dehydration Effects
    if (input.includes("not drinking water") || input.includes("dehydration effects") || input.includes("what happens if")) {
        return "When you don’t drink enough water, your body suffers silently. Initially, you might feel tired, get frequent headaches, or struggle to concentrate. Over time, dehydration can lead to dry skin, constipation, kidney stones, and even UTIs. Your joints may ache due to reduced lubrication, and your brain performance can slow down. Chronic dehydration may affect your blood pressure, heart rate, and increase the risk of heat stroke in summer. So always listen to your body’s thirst cues and keep that water bottle close! 🚰🔥";
    }

    // Personalized profession + weight-based recommendation
    let professionWeightMatch = input.match(/(\d{2,3})\s*kg.*(gym|athlete|office|job|sportsperson|working professional)/);
    if (professionWeightMatch) {
        let weight = parseFloat(professionWeightMatch[1]);
        let profession = professionWeightMatch[2];
        let baseIntake = weight * 0.033;
        let extra = 0;

        if (profession.includes("gym")) {
            extra = 0.7;
            return `As a gym enthusiast weighing ${weight} kg, your ideal water intake is approximately **${(baseIntake + extra).toFixed(2)} liters per day**, including extra for sweat loss. 🏋️‍♂️💧`;
        }

        if (profession.includes("athlete") || profession.includes("sportsperson")) {
            extra = 1.0;
            return `As an athlete or sportsperson weighing ${weight} kg, your recommended water intake is about **${(baseIntake + extra).toFixed(2)} liters per day**. Stay hydrated to perform at your peak! 🏃‍♂️⚽💧`;
        }

        if (profession.includes("office") || profession.includes("job") || profession.includes("working professional")) {
            extra = 0.3;
            return `As a working professional weighing ${weight} kg, aim for about **${(baseIntake + extra).toFixed(2)} liters of water daily** to stay focused and energized in your office environment. 💼💧`;
        }
    }

    // Weight-based intake
    let weightMatch = input.match(/(\d{2,3})\s*kg/);
    if (weightMatch) {
        let weight = parseFloat(weightMatch[1]);
        let waterIntake = weight * 0.033;
        return `Based on your weight of ${weight} kg, you should drink about **${waterIntake.toFixed(2)} liters** of water per day. Adjust it upward if you're active, in a hot climate, or pregnant. 🚰📏`;
    }

    // Working Professionals
    if (input.includes("job") || input.includes("office") || input.includes("working professional")) {
        return "As a working professional, especially in desk jobs, it's easy to forget drinking water. But air-conditioned environments and long hours in front of screens can dehydrate you without you realizing it. Aim for **2.5 to 3 liters daily**, more if you're in a warm climate. Hydration helps maintain focus, reduce eye strain, prevent fatigue, and even enhance mood and productivity. 💼🖥️💧";
    }

    // Gym-goers
    if (input.includes("gym") || input.includes("bodybuilding") || input.includes("strength training")) {
        return "Hydration is a critical part of your gym routine. When you sweat, you lose essential fluids and electrolytes. For gym-goers, **3 to 3.5 liters per day** is a good baseline, and you should add another **500ml to 1L** during workouts. 💪💦🏋️‍♀️";
    }

    // Athletes
    if (input.includes("athlete") || input.includes("sports") || input.includes("cricket") || input.includes("football") || input.includes("sportsperson")) {
        return "Athletes and sportspersons need to take hydration seriously. Aim for **4 to 5 liters or more daily** depending on training intensity. Hydrate before, during, and after activity. Dehydration of even 2% can affect performance. 🏃‍♂️⚽🥤";
    }

    // Pregnancy and Breastfeeding
    if (input.includes("pregnancy") || input.includes("pregnant") || input.includes("breastfeeding")) {
        return "During pregnancy or while breastfeeding, your water needs increase. Aim for at least **2.5 to 3 liters daily**, more if you're active or live in a warm climate. 🤰💧";
    }

    // Exercise / Sweating
    if (input.includes("exercise") || input.includes("workout") || input.includes("sweat")) {
        return "If you’re exercising, always drink **500ml - 1L extra** during and after your session. Consider sports drinks or coconut water for long/intense workouts. 🏋️‍♂️💦";
    }

    // Alcohol
    if (input.includes("alcohol") || input.includes("beer") || input.includes("wine") || input.includes("hangover")) {
        return "Alcohol increases urine output, leading to dehydration. Drink at least **one glass of water per alcoholic drink**, and hydrate before sleep to reduce hangover effects. 🍷🚱";
    }

    // Cold Weather
    if (input.includes("cold weather") || input.includes("winter")) {
        return "In winter, we feel less thirsty, but your body still loses water through breath and urine. Drink warm herbal teas or room-temp water to stay hydrated. ❄️🥶";
    }

    // Diet/Nutrition
    if (input.includes("diet plan") || input.includes("nutrition") || input.includes("healthy food")) {
        return "Hydration and nutrition go hand in hand. Eat water-rich foods like watermelon, cucumber, and oranges. Avoid salty, sugary, and caffeinated drinks. 🥗🍉";
    }

    // Salt / Sodium
    if (input.includes("salt") || input.includes("sodium")) {
        return "Too much salt increases thirst and can cause bloating. Drink plenty of water and reduce salty, processed foods. 💦🧂";
    }

    // Fiber / Constipation
    if (input.includes("fiber") || input.includes("digestion") || input.includes("constipation")) {
        return "Fiber needs water to move through the digestive system. Drink more water to avoid constipation when eating high-fiber foods. 🍎💧";
    }

    // Smartwatch / Apps
    if (input.includes("smartwatch") || input.includes("fitness tracker") || input.includes("hydration app")) {
        return "Smartwatches and hydration apps are great for tracking water intake and getting reminders. Sync your device and stay on track! 📲💧";
    }

    // Sleep
    if (input.includes("before bed") || input.includes("sleep") || input.includes("thirsty at night")) {
        return "Drinking a small glass of water before bed helps avoid dehydration. But avoid drinking too much or it might disrupt your sleep. 🛌🕗";
    }

    // Skin Health
    if (input.includes("skin") || input.includes("acne") || input.includes("glowing skin")) {
        return "Drinking water keeps your skin elastic, reduces acne, and adds a healthy glow. Eat water-rich fruits like oranges and berries too! 🧖‍♀️🍊";
    }

    // Diabetes
    if (input.includes("diabetes")) {
        return "For people with diabetes, water helps regulate blood sugar and offsets dehydration from frequent urination. Stick to plain water—avoid sugary drinks. 🩺💧";
    }

    // Kidney Stones
    if (input.includes("kidney stones")) {
        return "To prevent kidney stones, drink at least **2.5 to 3 liters** of water daily. Adding lemon to your water may help prevent certain stone types. 🍋💦";
    }

    // Symptoms of Dehydration
    if (input.includes("headache") || input.includes("fatigue") || input.includes("cramps") || input.includes("dizzy") || input.includes("tired")) {
        return "These could be signs of dehydration. Try sipping water regularly throughout the day. Even mild dehydration affects energy and focus. 💢💧";
    }

    // Hydration Myths
    if (input.includes("8 glasses")) {
        return "The '8 glasses a day' is a general rule. A better method is to drink **0.033 liters per kg** of body weight. 📏💧";
    }

    if (input.includes("coffee dehydrates")) {
        return "Coffee has a mild diuretic effect but doesn’t cause dehydration in moderate amounts. Just don’t use it as your main hydration source. ☕👍";
    }

    if (input.includes("tea dehydrates")) {
        return "Tea, especially herbal, contributes to hydration. Most teas are over 90% water. 🍵💙";
    }

    // Fun Facts
    if (input.includes("fun fact") || input.includes("interesting fact")) {
        const facts = [
            "Your body is about **60% water**! 💧",
            "Your brain is nearly **75% water**—stay hydrated for better thinking. 🧠💦",
            "Water helps flush out toxins and transport nutrients. 🚰",
            "Drinking water can increase metabolism by **30%** for an hour. 🔥",
            "Even 1-2% dehydration affects mood, focus, and memory. 🧠💢"
        ];
        return facts[Math.floor(Math.random() * facts.length)];
    }

    // Default fallback
    return "I'm here to guide you on hydration, fitness, and wellness. Ask me how much water you need, or what happens if you skip it! 💙💧";
}
