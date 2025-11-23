const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
require('dotenv').config();

const indianCities = [
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
    { name: 'Surat', lat: 21.1702, lng: 72.8311 },
    { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
    { name: 'Kanpur', lat: 26.4499, lng: 80.3319 },
    { name: 'Nagpur', lat: 21.1458, lng: 79.0882 },
    { name: 'Indore', lat: 22.7196, lng: 75.8577 },
    { name: 'Thane', lat: 19.2183, lng: 72.9781 },
    { name: 'Bhopal', lat: 23.2599, lng: 77.4126 },
    { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185 },
    { name: 'Patna', lat: 25.5941, lng: 85.1376 },
    { name: 'Vadodara', lat: 22.3072, lng: 73.1812 },
    { name: 'Ghaziabad', lat: 28.6692, lng: 77.4538 },
];

const productTemplates = [
    { name: 'MacBook Pro 16"', category: 'laptops', pricePerDay: 500, description: 'High-performance laptop for professionals', images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800'] },
    { name: 'Dell XPS 15', category: 'laptops', pricePerDay: 400, description: 'Premium Windows laptop with stunning display', images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800'] },
    { name: 'HP Pavilion Gaming', category: 'laptops', pricePerDay: 350, description: 'Gaming laptop with powerful graphics', images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800', 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800'] },
    { name: 'Lenovo ThinkPad X1', category: 'laptops', pricePerDay: 450, description: 'Business laptop with excellent keyboard', images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800'] },
    { name: 'ASUS ROG Strix', category: 'laptops', pricePerDay: 550, description: 'High-end gaming laptop', images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800', 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800'] },
    { name: 'Canon EOS R5', category: 'cameras', pricePerDay: 800, description: 'Professional mirrorless camera', images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800'] },
    { name: 'Sony A7 III', category: 'cameras', pricePerDay: 700, description: 'Full-frame mirrorless camera', images: ['https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800'] },
    { name: 'Nikon Z6 II', category: 'cameras', pricePerDay: 650, description: 'Versatile full-frame camera', images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800'] },
    { name: 'Canon EOS 90D', category: 'cameras', pricePerDay: 500, description: 'DSLR camera for enthusiasts', images: ['https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800', 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800'] },
    { name: 'GoPro Hero 11', category: 'cameras', pricePerDay: 200, description: 'Action camera for adventures', images: ['https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'] },
    { name: 'Sony WH-1000XM5', category: 'audio', pricePerDay: 100, description: 'Premium noise-canceling headphones', images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800'] },
    { name: 'Bose QuietComfort 45', category: 'audio', pricePerDay: 90, description: 'Comfortable noise-canceling headphones', images: ['https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800', 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800'] },
    { name: 'JBL PartyBox 310', category: 'audio', pricePerDay: 250, description: 'Powerful party speaker', images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800', 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800'] },
    { name: 'Shure SM7B', category: 'audio', pricePerDay: 150, description: 'Professional studio microphone', images: ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800', 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800'] },
    { name: 'Audio-Technica AT2020', category: 'audio', pricePerDay: 80, description: 'Studio condenser microphone', images: ['https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800', 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800'] },
    { name: 'PlayStation 5', category: 'gaming', pricePerDay: 300, description: 'Latest generation gaming console', images: ['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800', 'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800'] },
    { name: 'Xbox Series X', category: 'gaming', pricePerDay: 280, description: 'Powerful gaming console', images: ['https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800', 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800'] },
    { name: 'Nintendo Switch OLED', category: 'gaming', pricePerDay: 200, description: 'Portable gaming console', images: ['https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800', 'https://images.unsplash.com/photo-1585857018254-4e9e8a4e3e6d?w=800'] },
    { name: 'Steam Deck', category: 'gaming', pricePerDay: 250, description: 'Handheld PC gaming device', images: ['https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800'] },
    { name: 'Meta Quest 3', category: 'gaming', pricePerDay: 350, description: 'VR headset for immersive gaming', images: ['https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800', 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800'] },
    { name: 'iPhone 15 Pro Max', category: 'smartphones', pricePerDay: 200, description: 'Latest flagship iPhone', images: ['https://images.unsplash.com/photo-1592286927505-b7e2e0f7b5b1?w=800', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800'] },
    { name: 'Samsung Galaxy S24 Ultra', category: 'smartphones', pricePerDay: 180, description: 'Premium Android flagship', images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800'] },
    { name: 'Google Pixel 8 Pro', category: 'smartphones', pricePerDay: 150, description: 'Best camera phone', images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800'] },
    { name: 'OnePlus 12', category: 'smartphones', pricePerDay: 120, description: 'Fast charging flagship', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800', 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800'] },
    { name: 'Xiaomi 14 Pro', category: 'smartphones', pricePerDay: 100, description: 'Value flagship phone', images: ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800'] },
];

async function seedProducts() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        let owner = await User.findOne({ role: 'owner' });
        if (!owner) owner = await User.findOne();
        if (!owner) {
            console.error('No users found. Please create a user first.');
            process.exit(1);
        }

        console.log(`Using owner: ${owner.name} (${owner.email})`);

        const products = [];
        for (let i = 0; i < 100; i++) {
            const template = productTemplates[i % productTemplates.length];
            const city = indianCities[i % indianCities.length];

            products.push({
                name: `${template.name} #${Math.floor(i / productTemplates.length) + 1}`,
                description: template.description,
                category: template.category,
                pricePerDay: Math.round(template.pricePerDay + (Math.random() * 100 - 50)),
                owner: owner._id,
                images: template.images,
                location: {
                    type: 'Point',
                    coordinates: [city.lng, city.lat],
                    address: `${city.name}, India`
                },
                availability: Math.random() > 0.2,
                specs: new Map([
                    ['brand', ['Apple', 'Dell', 'HP', 'Lenovo', 'Sony', 'Canon', 'Nikon'][Math.floor(Math.random() * 7)]],
                    ['model', `Model ${i + 1}`],
                    ['year', String(2020 + Math.floor(Math.random() * 4))]
                ])
            });
        }

        const result = await Product.insertMany(products);
        console.log(`✅ Successfully created ${result.length} products!`);

        const summary = {};
        result.forEach(p => summary[p.category] = (summary[p.category] || 0) + 1);

        console.log('\n📊 Products by category:');
        Object.entries(summary).forEach(([cat, count]) => console.log(`   ${cat}: ${count}`));

        console.log('\n📍 Products by city:');
        const citySummary = {};
        result.forEach(p => {
            const city = p.location.address.split(',')[0];
            citySummary[city] = (citySummary[city] || 0) + 1;
        });
        Object.entries(citySummary).forEach(([city, count]) => console.log(`   ${city}: ${count}`));

        mongoose.connection.close();
        console.log('\n✨ Database seeding completed!');
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

seedProducts();
