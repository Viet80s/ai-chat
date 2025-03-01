export interface Item {
  id: number;
  name: string;
  ingredients?: string;
  allergens?: string;
}

export interface Profile {
  id: number;
  combination: number[];
  name: string;
  description: string;
  startersCombo: number[];
  mainCombo: number[];
  drinkCombo: number[];
}

export const starters: Item[] = [
  {
    // ID has to be unique and get the same ID as the item in the menu on SQUARE MENU
    id: 1,
    name: "Vegan Salad",
    ingredients:
      "Lettuce, tomatoes, cucumbers, carrots, and vinaigrette dressing",
    allergens: "Contains nuts",
  },
  { id: 2, name: "Beer bathed Prawns" },
  { id: 3, name: "Summer rolls" },
  { id: 4, name: "Chicken Salad" },
  { id: 5, name: "Chicken in Fishsauce" },
  { id: 6, name: "Betel Beef" },
  { id: 7, name: "Rare beef salad" },
  { id: 8, name: "Fried Tofu" },
  { id: 9, name: "Salted Chicken" },
  { id: 10, name: "Grilled chicken with honey" },
  { id: 11, name: "Belly Pork" },
  { id: 12, name: "Spring rolls" },
  { id: 13, name: "Chicken wings" },
  { id: 14, name: "King Grilled Prawns" },
  { id: 15, name: "Side Pork sesame" },
  { id: 16, name: "Stir fried Beef" },
  { id: 17, name: "Beef Pepper" },
  { id: 18, name: "Water Spinach" },
  { id: 19, name: "Chicken Mac Khen" },
  { id: 20, name: "Golden prawns" },
  { id: 21, name: "Steamed Rice rolls" },
  { id: 22, name: "Beef tongue" },
  { id: 23, name: "Mushroom tofu salted" },
  { id: 24, name: "Shaking Beef" },
  { id: 25, name: "Stir fried Whelk" },
  { id: 26, name: "Stir fried Goat" },
  { id: 27, name: "Pork cartilage" },
];

export const drinks: Item[] = [
  { id: 1, name: "Juice" },
  { id: 2, name: "Soul Hanoi" },
  { id: 3, name: "Milk coffee" },
  { id: 4, name: "Salted Apricot" },
  { id: 5, name: "Lime Juice" },
  { id: 6, name: "Hanoi Beer" },
  { id: 7, name: "Coffee" },
  { id: 8, name: "Red Berry" },
  { id: 9, name: "Vietnamese Beer" },
  { id: 10, name: "Red Wine" },
  { id: 11, name: "Avocado" },
  { id: 12, name: "Salted Coffee" },
  { id: 13, name: "Coconut Coffee" },
];

export const mainCourses: Item[] = [
  { id: 1, name: "Prawn bun soup" },
  { id: 2, name: "Egg fried rice" },
  { id: 3, name: "Beef shin Pho" },
  { id: 4, name: "Stir fried noodles" },
  { id: 5, name: "Stir fried Beefshin" },
  { id: 6, name: "Salmon Fried Rice" },
  { id: 7, name: "Brisket Beef Pho" },
  { id: 8, name: "Grilled pork bun" },
  { id: 9, name: "Stir fried Beef Bun" },
  { id: 10, name: "Stir fried noodles prawn" },
  { id: 11, name: "Beef Fried Rice" },
  { id: 12, name: "Grilled Pork Bun" },
  { id: 13, name: "Prawn Rice" },
  { id: 14, name: "Grilled Eels Bun" },
  { id: 15, name: "Spring rolls grilled pork bun" },
  { id: 16, name: "Duck bamboo shoot" },
  { id: 17, name: "Glass noodles" },
  { id: 18, name: "Salmon Bun Soup" },
  { id: 19, name: "Spicy Beef Bun" },
  { id: 20, name: "House special fried rice" },
  { id: 21, name: "Vegan fried Rice" },
  { id: 22, name: "Cha ca la vong" },
  { id: 23, name: "Apple snail" },
  { id: 24, name: "Claypot Rice" },
];

export const questions = [
  "When you crave Vietnamese food, what drives your choice the most?",
  "How do you usually decide where to eat?",
  "What type of meal experience do you prefer the most?",
  "When you’re stressed or tired, what kind of food do you crave the most?",
  "What’s most important to you when choosing a dish?",
  "How do you feel about trying new dishes you’ve never had before?",
  "If you could improve one thing about your dining experiences, what would it be?",
];

export const options = [
  [
    {
      value: "A",
      label:
        "I need something comforting that reminds me of home or past travels.",
    },
    {
      value: "B",
      label: "I want something healthy and balanced—light but nutritious.",
    },
    {
      value: "C",
      label:
        "I look for bold flavors and spice to satisfy my adventurous palate.",
    },
    {
      value: "D",
      label: "I just need something quick and filling—I eat for convenience.",
    },
  ],
  [
    {
      value: "A",
      label: "I look at online reviews and ratings before making a decision.",
    },
    {
      value: "B",
      label: "I rely on word-of-mouth recommendations from friends or family.",
    },
    {
      value: "C",
      label: "I walk past a place, and if it looks/smells good, I try it.",
    },
    {
      value: "D",
      label: "I stick to my usual spots where I know I’ll enjoy the food.",
    },
  ],
  [
    {
      value: "A",
      label: "A sit-down, immersive experience—I enjoy slow, enjoyable dining.",
    },
    {
      value: "B",
      label: "A grab-and-go meal—I prefer something quick and easy.",
    },
    {
      value: "C",
      label: "A family-style meal where I can share food with others.",
    },
    {
      value: "D",
      label:
        "A meal that feels authentic and transports me to a different culture.",
    },
  ],
  [
    {
      value: "A",
      label: "A rich, hot bowl of soup that soothes and warms me.",
    },
    {
      value: "B",
      label: "A protein-heavy meal to refuel and energize my body.",
    },
    { value: "C", label: "Something spicy and tangy to wake up my senses." },
    {
      value: "D",
      label: "Something light and refreshing that won’t weigh me down.",
    },
  ],
  [
    { value: "A", label: "Authenticity—I want something true to its roots." },
    {
      value: "B",
      label:
        "Health & nutrition—I want something balanced and good for my body.",
    },
    {
      value: "C",
      label:
        "Portion size & value—I want something filling and worth the price.",
    },
    {
      value: "D",
      label:
        "Flavor adventure—I love exploring bold, spicy, or unique flavors.",
    },
  ],
  [
    {
      value: "A",
      label: "I love it! I always try something new when I eat out.",
    },
    {
      value: "B",
      label: "I’ll try something new occasionally, but I have my favorites.",
    },
    {
      value: "C",
      label: "I prefer familiar dishes, but I might taste a friend’s food.",
    },
    {
      value: "D",
      label: "I stick to what I know—I don’t like taking risks with food.",
    },
  ],
  [
    {
      value: "A",
      label: "Faster service & convenience—I don’t want to wait too long.",
    },
    {
      value: "B",
      label: "More customization—I like adjusting ingredients to fit my diet.",
    },
    {
      value: "C",
      label:
        "More interactive experiences—I enjoy watching food being prepared.",
    },
    {
      value: "D",
      label:
        "Better ambiance & atmosphere—I care about the environment as much as the food.",
    },
  ],
];

export const profiles: Profile[] = [
  {
    id: 1,
    combination: [0, 0, 0, 0],
    name: "Bà Nội Trợ Trên Mạng (Social Media Mom)",
    description:
      "The social media-savvy mom who shares comforting, traditional recipes on YouTube, keeping the whole family (and her followers) happy with simple, delicious meals.",
    startersCombo: [1, 2, 3],
    mainCombo: [1, 2, 3],
    drinkCombo: [1, 2, 3],
  },
  {
    id: 2,
    combination: [0, 0, 0, 1],
    name: "Chị Đại Khu Phố (Neighborhood Auntie)",
    description:
      "The stylish, respected neighborhood auntie who throws elaborate dinners with traditional dishes that make everyone go 'wow' while sharing the latest gossip.",
    startersCombo: [4, 5, 6],
    mainCombo: [4, 5, 6],
    drinkCombo: [4, 5, 6],
  },
  {
    id: 3,
    combination: [0, 0, 1, 0],
    name: "Thầy Giáo Làng (Village Teacher)",
    description:
      "The cheerful village teacher who always has a smile and a banh mi for lunch, spreading joy with every bite of his simple, nostalgic meals.",
    startersCombo: [7, 8, 9],
    mainCombo: [7, 8, 9],
    drinkCombo: [6, 4, 2],
  },
  {
    id: 4,
    combination: [0, 0, 1, 1],
    name: "Phượt Thủ Xịn (Pro Backpacker)",
    description:
      "The seasoned backpacker who’s been everywhere from Sapa to the Mekong, never afraid to try new dishes, but always comes back to a bowl of phở.",
    startersCombo: [10, 11, 12],
    mainCombo: [10, 11, 3],
    drinkCombo: [7, 8, 9],
  },
  {
    id: 5,
    combination: [0, 1, 0, 0],
    name: "Nhà Thám Hiểm Cần Thơ (Cần Thơ Explorer)",
    description:
      "The explorer who’s always looking for the next big food trend in Vietnam, from street vendors to hidden countryside gems, enjoying the flavorful journey.",
    startersCombo: [13, 14, 21],
    mainCombo: [5, 12, 13],
    drinkCombo: [5, 9, 2],
  },
  {
    id: 6,
    combination: [0, 1, 0, 1],
    name: "Đầu Bếp Đỉnh (Master Chef)",
    description:
      "The chef who’s always pushing the boundaries of Vietnamese cuisine, creating complex dishes that make even his grandma ask for the recipe.",
    startersCombo: [6, 12, 15],
    mainCombo: [12, 1, 14],
    drinkCombo: [6, 4, 2],
  },
  {
    id: 7,
    combination: [0, 1, 1, 0],
    name: "Tín Đồ Ăn Vặt (Street Food Fanatic)",
    description:
      "The street food enthusiast who knows all the best spots for bánh tráng nướng and is always the first to suggest trying something new and tasty.",
    startersCombo: [16, 17, 18],
    mainCombo: [15, 8, 17],
    drinkCombo: [7, 8, 9],
  },
  {
    id: 8,
    combination: [0, 1, 1, 1],
    name: "Blogger Ẩm Thực (Food Blogger)",
    description:
      "The food blogger with a refined palate, always in search of the most joyful and flavorful experiences, making followers drool over every post.",
    startersCombo: [17, 19, 20],
    mainCombo: [18, 19, 20],
    drinkCombo: [9, 10, 8],
  },
  {
    id: 9,
    combination: [1, 0, 0, 0],
    name: "Nhà Sư Thanh Tịnh (Zen Monk)",
    description:
      "The peaceful monk who sticks to simple, calming vegetarian meals, but is open to exploring a new tea flavor during his morning meditation.",
    startersCombo: [21, 2, 8],
    mainCombo: [13, 3, 1],
    drinkCombo: [9, 10, 8],
  },
  {
    id: 10,
    combination: [1, 0, 0, 1],
    name: "Chủ Quán Trà Chanh (Lemon Tea Shop Owner)",
    description:
      "The young entrepreneur who’s always coming up with new twists on traditional drinks, keeping things simple but with a surprising kick.",
    startersCombo: [3, 4, 15],
    mainCombo: [16, 15, 21],
    drinkCombo: [11, 12, 2],
  },
  {
    id: 11,
    combination: [1, 0, 1, 0],
    name: "Nghệ Sĩ Hài (Comedian)",
    description:
      "The comedian who brings joy and laughter to every meal, preferring simple, feel-good foods that match his lively personality.",
    startersCombo: [3, 9, 13],
    mainCombo: [22, 4, 9],
    drinkCombo: [3, 9, 4],
  },
  {
    id: 12,
    combination: [1, 0, 1, 1],
    name: "Nhà Khoa Học Điên (Mad Scientist)",
    description:
      "The 'mad scientist' of the kitchen, always experimenting with weird food combos that somehow work, leaving friends wondering, 'How did you come up with that?'",
    startersCombo: [22, 19, 23],
    mainCombo: [18, 1, 23],
    drinkCombo: [8, 9, 1],
  },
  {
    id: 13,
    combination: [1, 1, 0, 0],
    name: "Chị Chủ Vườn (Garden Enthusiast)",
    description:
      "The garden-loving sister who whips up fresh, calming meals straight from her backyard, always in harmony with nature and flavor.",
    startersCombo: [24, 14, 11],
    mainCombo: [5, 12, 13],
    drinkCombo: [4, 7, 13],
  },
  {
    id: 14,
    combination: [1, 1, 0, 1],
    name: "Ông Trùm Cafe (Coffee Connoisseur)",
    description:
      "The coffee shop owner who knows everything about the art of brewing, appreciating the complex layers of flavor in both his drinks and his life.",
    startersCombo: [18, 6, 15],
    mainCombo: [18, 5, 17],
    drinkCombo: [8, 9, 1],
  },
  {
    id: 15,
    combination: [1, 1, 1, 0],
    name: "Cậu Ấm Sài Gòn (Saigon Socialite)",
    description:
      "The trendy Saigon socialite who enjoys the finer things in life, from high-end dining to the latest food trends, living each day with flavor and flair.",
    startersCombo: [19, 27, 26],
    mainCombo: [18, 3, 23],
    drinkCombo: [2, 9, 8],
  },
  {
    id: 16,
    combination: [1, 1, 1, 1],
    name: "Nhạc Sĩ Phố Cổ (Old Quarter Musician)",
    description:
      "The iconic musician from Hanoi’s Old Quarter who mixes traditional sounds with modern beats, just like he loves blending complex, joyful flavors in his meals.",
    startersCombo: [20, 26, 27],
    mainCombo: [18, 24, 15],
    drinkCombo: [5, 8, 9],
  },
];
