export const products = [
    {
        id: 1,
        name: "Hilsha Herring",
        shortDescription: "Premium quality Hilsha Herring",
        longDescription: "Indulge in the exquisite taste of our premium Hilsha Herring, sourced from the pristine waters of the Bay of Bengal. Known for its rich flavor and high nutritional value, this frozen delight is carefully processed to preserve its freshness. Whether grilled, fried, or cooked in your favorite curry, our Hilsha Herring promises a culinary experience that captures the essence of Bangladeshi seafood.",
        price: 12.99,
        weight: "500g",
        reviews: [
            { user: "Customer1", rating: 4.5, comment: "Delicious and fresh!" },
            { user: "Customer2", rating: 5, comment: "Best Hilsha I've ever had!" },
        ],
        pictures: ["/images/hilsa3.jpg","/images/hilsa2.jpg","/images/hilsa.jpg"],
        category: "Saltwater",
    },
    {
        id: 2,
        name: "Pangasius Fillet",
        shortDescription: "Boneless Pangasius Fillet",
        longDescription: "Experience the convenience of our boneless and skinless Pangasius Fillet, sourced from the freshwater of Bangladesh. Our fillets are carefully selected and frozen to ensure optimal taste and texture. Versatile and easy to cook, these fillets are perfect for a quick and healthy meal. Dive into the world of Bangladeshi freshwater cuisine with our premium Pangasius Fillet.",
        price: 8.99,
        weight: "400g",
        reviews: [
            { user: "Customer3", rating: 4, comment: "Great value for money!" },
            { user: "Customer4", rating: 4.2, comment: "Tastes really good!" },
        ],
        pictures: ["/images/pangasius1.jpg","/images/pangasius2.jpg"],
        category: "Freshwater",
    },
    {
        id: 3,
        name: "Rohu Steaks",
        shortDescription: "Fresh Rohu Fish Steaks",
        longDescription: "Elevate your dining experience with our carefully cut and frozen Rohu Fish Steaks. Sourced from the freshwater regions of Bangladesh, these steaks offer a perfect blend of flavor and tenderness. Ideal for grilling, frying, or baking, our Rohu Steaks make every meal special. Indulge in the richness of Bangladeshi freshwater fish with this premium frozen delight.",
        price: 9.99,
        weight: "600g",
        reviews: [
            { user: "Customer5", rating: 4.7, comment: "Excellent quality steaks!" },
            { user: "Customer6", rating: 5, comment: "Perfect for grilling!" },
        ],
        pictures: ["/images/rohu.jpg"],
        category: "Freshwater",
    },
    {
        id: 4,
        name: "Bangladeshi Shrimp",
        shortDescription: "Premium Bangladeshi Black Tiger Shrimp",
        longDescription: "Immerse yourself in the succulent taste of our premium Black Tiger Shrimp, harvested from the crystal-clear waters of Bangladesh. Known for their sweet and juicy flavor, these shrimp are perfect for a variety of culinary creations. Whether grilled, sautéed, or added to your favorite curry, our Bangladeshi Shrimp promises a delightful seafood experience that reflects the essence of Bangladeshi coastal cuisine.",
        price: 14.99,
        weight: "750g",
        reviews: [
            { user: "Customer7", rating: 4.8, comment: "Sweet and juicy shrimp!" },
            { user: "Customer8", rating: 4.5, comment: "Great for seafood lovers!" },
        ],
        pictures: ["/images/shrimp.png","/images/shrimp2.jpg","/images/shrimp3.jpg"],
        category: "Saltwater",
    },
    {
        id: 5,
        name: "Pabda Fish Fillet",
        shortDescription: "Tender Pabda Fish Fillet",
        longDescription: "Delight your taste buds with the delicate flavor of our boneless and skinless Pabda Fish Fillet. Sourced from the freshwater regions of Bangladesh, these fillets are carefully processed to preserve their tenderness. Whether pan-fried, steamed, or cooked in a curry, our Pabda Fish Fillet offers a versatile and delicious addition to your culinary repertoire. Experience the freshness of Bangladeshi freshwater fish with every bite.",
        price: 11.99,
        weight: "500g",
        reviews: [
            { user: "Customer9", rating: 4.3, comment: "Impressive quality fillets!" },
            { user: "Customer10", rating: 4.6, comment: "Perfect for a quick meal!" },
        ],
        pictures: ["/images/pabda3.jpeg","/images/pabda1.jpg","/images/pabda2.jpg"],
        category: "Freshwater",
    },
];

export const categories = ["Saltwater", "Freshwater", "Preserved Fish", "Fish Fillets", "Shellfish", "Whole Fish", "Seafood Blends and Mixes", "Specialty Seafood", "Organic and Sustainable\n" +
"                  Options", "Breaded and Ready-to-Cook", "Global Seafood Selection"];