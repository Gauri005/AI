function getBotResponse(input) {
    input = input.toLowerCase();

    // Greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("who are you") || input.includes("what is your name")) {
        return "Hello! I'm your personal AI Hydration Coach 💧. I'm here to guide you on staying hydrated based on your lifestyle, health, and activity levels. Ask me anything about water, hydration, or how it affects your body!";
    }

    // Dehydration / Not drinking enough water
    if (input.includes("not drinking water") || input.includes("dehydration effects") || input.includes("what happens if")) {
        return "When you don’t drink enough water, your body suffers silently. Initially, you might feel tired, get frequent headaches, or struggle to concentrate. Over time, dehydration can lead to dry skin, constipation, kidney stones, and even UTIs. Your joints may ache due to reduced lubrication, and your brain performance can slow down. Chronic dehydration may affect your blood pressure, heart rate, and increase the risk of heat stroke in summer. So always listen to your body’s thirst cues and keep that water bottle close! 🚰🔥";
    }

    // Personalized profession + weight calculation
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
            return `As an athlete/sportsperson weighing ${weight} kg, your recommended water intake is about **${(baseIntake + extra).toFixed(2)} liters per day**. Stay hydrated to perform at your peak! 🏃‍♂️⚽💧`;
        }

        if (profession.includes("office") || profession.includes("job") || profession.includes("working professional")) {
            extra = 0.3;
            return `As a working professional weighing ${weight} kg, aim for about **${(baseIntake + extra).toFixed(2)} liters of water daily** to stay focused and energized in your office environment. 💼💧`;
        }
    }

    // Working professionals
    if (input.includes("job") || input.includes("office") || input.includes("working professional")) {
        return "As a working professional, especially in desk jobs, it's easy to forget drinking water. But air-conditioned environments and long hours in front of screens can dehydrate you without you realizing it. Aim for **2.5 to 3 liters daily**, more if you're in a warm climate. Hydration helps maintain focus, reduce eye strain, prevent fatigue, and even enhance mood and productivity. Try setting hourly reminders or using a hydration tracking app. Keep a reusable bottle near your workstation—out of sight is out of sip! 💼🖥️💧";
    }

    // Gym-goers
    if (input.includes("gym") || input.includes("bodybuilding") || input.includes("strength training")) {
        return "Hydration is a critical part of your gym routine. When you sweat, you lose essential fluids and electrolytes. For gym-goers, **3 to 3.5 liters per day** is a good baseline, and you should add another **500ml to 1L** during workouts. Proper hydration boosts energy, improves endurance, helps with protein absorption, reduces the risk of cramps, and accelerates muscle recovery. Consider drinking electrolyte water if your workouts are intense or last over an hour. 💪💦🏋️‍♀️";
    }

    // Athletes / Sportspersons
    if (input.includes("athlete") || input.includes("sports") || input.includes("cricket") || input.includes("football") || input.includes("sportsperson")) {
        return "Athletes and sportspersons need to take hydration very seriously. Physical exertion and heat can lead to major fluid loss, impacting performance. Depending on the sport and intensity, aim for **4 to 5 liters or more daily**. Hydrate **before**, **during**, and **after** training or matches. Dehydration of even 2% can lead to reduced stamina, delayed reaction time, and greater risk of cramps or injury. Coconut water, ORS, and hydration tablets can help replenish lost electrolytes. 🏃‍♂️⚽🥤";
    }

    // Weight-only based intake (fallback)
    if (!professionWeightMatch) {
        let weightMatch = input.match(/(\d{2,3})\s*kg/);
        if (weightMatch) {
            let weight = parseFloat(weightMatch[1]);
            let waterIntake = weight * 0.033;
            return `Based on your weight of ${weight} kg, you should drink about **${waterIntake.toFixed(2)} liters** of water per day. Adjust it upward if you're active, in a hot climate, or pregnant. 🚰📏`;
        }
    }

    // Pregnancy/Breastfeeding
    if (input.includes("pregnancy") || input.includes("pregnant") || input.includes("breastfeeding")) {
        return "During pregnancy or while breastfeeding, your water needs increase. Aim for at least **2.5 to 3 liters daily**, more if you're active or live in a warm climate. Staying hydrated supports your baby’s development, maintains amniotic fluid, and helps with digestion. 🤰💧";
    }

    // Exercise/Sweating
    if (input.includes("exercise") || input.includes("workout") || input.includes("sweat")) {
        return "If you’re exercising, you lose fluids through sweat and faster breathing. Always drink **500ml - 1L extra** during and after your session. Sweating also depletes sodium, so consider sports drinks or coconut water for longer workouts. 🏋️‍♂️💦";
    }

    // Alcohol-related dehydration
    if (input.includes("alcohol") || input.includes("beer") || input.includes("wine") || input.includes("hangover")) {
        return "Alcohol acts as a diuretic and increases urine output. That’s why hangovers often come with headaches and fatigue. Drink at least **one glass of water per alcoholic drink**, and hydrate well before bed to reduce hangover effects. 🍷🚱";
    }

    // Cold Weather
    if (input.includes("cold weather") || input.includes("winter")) {
        return "In winter, we tend to feel less thirsty, but your body still loses water through breath and urine. Dehydration in cold climates is common. Try warm herbal teas or room-temperature water to stay hydrated. ❄️🥶";
    }

    // Diet/Nutrition
    if (input.includes("diet plan") || input.includes("nutrition") || input.includes("healthy food")) {
        return "Hydration and nutrition go hand in hand! Include water-rich foods like watermelon, cucumber, oranges, and soups. Avoid salty snacks, sugar, and caffeine-heavy drinks. A clean, balanced diet supports hydration naturally. 🥗🍉";
    }

    // Sodium / Salt intake
    if (input.includes("salt") || input.includes("sodium")) {
        return "Too much salt increases the body’s need for water and can cause bloating. Avoid overly salty snacks and processed foods, and make sure to drink plenty of water. 💦🧂";
    }

    // Fiber / Digestion
    if (input.includes("fiber") || input.includes("digestion") || input.includes("constipation")) {
        return "Fiber absorbs water in your gut, so it’s important to drink more water when eating a high-fiber diet. Hydration prevents constipation and keeps your digestion smooth. 🍎💧";
    }

    // Smartwatch / App tracking
    if (input.includes("smartwatch") || input.includes("fitness tracker") || input.includes("hydration app")) {
        return "Using a smartwatch or hydration app is a smart way to track intake and get reminders. Many devices even calculate sweat loss and adjust hydration goals. Sync your device and stay on track! 📲💧";
    }

    // Sleep
    if (input.includes("before bed") || input.includes("sleep") || input.includes("thirsty at night")) {
        return "Drinking a small glass of water before bed can prevent nighttime dehydration. But avoid large amounts, or you might wake up for bathroom trips. Balance is key! 🛌🕗";
    }

    // Skin Health
    if (input.includes("skin") || input.includes("acne") || input.includes("glowing skin")) {
        return "Hydration is your skin’s best friend. Drinking enough water helps reduce acne, keeps skin elastic, and gives it a natural glow. Also, include water-rich fruits like berries and oranges. 🧖‍♀️🍊";
    }

    // Diabetes
    if (input.includes("diabetes")) {
        return "For people with diabetes, water helps regulate blood sugar and prevents dehydration due to frequent urination. Avoid sugary drinks—plain water is your best ally. 🩺💧";
    }

    // Kidney Stones
    if (input.includes("kidney stones")) {
        return "To prevent kidney stones, drink at least **2.5 to 3 liters** of water daily. Adding lemon to your water may also help dissolve certain types of stones. 🍋💦";
    }

    // Symptoms of dehydration
    if (input.includes("headache") || input.includes("fatigue") || input.includes("cramps") || input.includes("dizzy") || input.includes("tired")) {
        return "These are common signs of dehydration! Your body might be signaling you to drink up. Try sipping water regularly throughout the day—even mild dehydration impacts brain function and energy. 💢💧";
    }

    // Hydration Myths
    if (input.includes("8 glasses")) {
        return "The '8 glasses a day' rule is a rough estimate. Your actual needs depend on weight, activity, and climate. A better measure is around **0.033 liters per kg** of body weight. 📏💧";
    }

    if (input.includes("coffee dehydrates")) {
        return "Coffee has a slight diuretic effect, but in moderate amounts, it does not significantly dehydrate you. Just don’t rely on it for hydration. ☕👍";
    }

    if (input.includes("tea dehydrates")) {
        return "Tea, especially herbal varieties, can contribute to hydration. In fact, most teas are over 90% water. 🍵💙";
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
