import './styles.css';
import img from './temp.png';

//this class manages the individual items of the menu
//containing only the information specific to each menu item
class menuItem {
    constructor(name, price, description = '', image = '') {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    display() {
        return `
            <div class='card'>
                <h3>${this.name}</h3>
                ${this.description ? `<p>${this.description}</p>` : ''}
                <h4 class='price'>${this.price}</h4>
                ${this.image ? `<img src="${this.image}">` : ''}
            </div>
        `;
    }
}

//subclasses for each menu category
//helpful for things such as happy hour discounts
class appetizer extends menuItem {
    constructor(name, price, description, image='') {
        super(name, price, description, image);
    }
}

class entree extends menuItem {
    constructor(name, price, description, image='') {
        super(name, price, description, image);
    }
}

class dessert extends menuItem {
    constructor(name, price, description, image='') {
        super(name, price, description, image);
    }
}

class drink extends menuItem {
    constructor(name, price, image='') {
        super(name, price, '', image);
    }
}

class menu {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }
    
    displayMenu() {
        return this.items.map(item => item.display()).join('');
    }
    
}

const currentMenu = new menu();

const appetizer1 = new appetizer('Crispy Avocado Bites', '$10', 'Golden-fried avocado wedges served with a zesty lime-cilantro dipping sauce.', img);
const appetizer2 = new appetizer('Smoky BBQ Sliders', '$12', 'Mini brioche buns filled with pulled pork, tangy BBQ sauce, and a hint of smoked gouda.', img);
const appetizer3 = new appetizer('Garlic Parmesan Knots', '$9', 'Soft, buttery knots drizzled with garlic-infused olive oil and sprinkled with parmesan cheese.', img);
const appetizer4 = new appetizer('Loaded Nacho Fries', '$11', 'Crispy fries topped with melted cheddar, sour cream, jalapeños, and house-made pico de gallo.', img);
const appetizer5 = new appetizer('Spinach Artichoke Dip', '$10', 'Creamy blend of spinach, artichokes, and cheeses served with warm tortilla chips.', img);
const appetizer6 = new appetizer('Buffalo Cauliflower Wings', '$10', 'Lightly breaded cauliflower tossed in spicy buffalo sauce and served with ranch.', img);

const entree1 = new entree('Southern Fried Chicken Plate', '$18', 'Crispy buttermilk chicken served with creamy mashed potatoes and country gravy.', img);
const entree2 = new entree('Bacon-Wrapped Meatloaf', '$19', 'Our classic meatloaf wrapped in bacon and topped with a tangy tomato glaze, paired with roasted veggies.', img);
const entree3 = new entree('Grilled Sirloin Steak', '$24', '8 oz. sirloin cooked to perfection, served with garlic butter and a baked potato.', img);
const entree4 = new entree('Lemon Herb Salmon', '$22', 'Fresh salmon fillet baked with a lemon-herb crust, accompanied by wild rice and asparagus.', img);
const entree5 = new entree('Barbecue Baby Back Ribs', '$25', 'Fall-off-the-bone ribs smothered in house BBQ sauce, served with coleslaw and fries.', img);
const entree6 = new entree('Margherita Pizza', '$16', 'Classic pizza with fresh mozzarella, vine-ripened tomatoes, and basil on a crispy crust.', img);
const entree7 = new entree('Pepperoni Explosion Pizza', '$18', 'A pepperoni lover’s dream topped with double pepperoni and extra mozzarella.', img);
const entree8 = new entree('Chicken Alfredo Pasta', '$17', 'Creamy Alfredo sauce tossed with fettuccine and grilled chicken breast.', img);
const entree9 = new entree('Spaghetti and Meatballs', '$16', 'Traditional spaghetti topped with house-made marinara and savory meatballs.', img);
const entree10 = new entree('Shrimp Scampi', '$20', 'Succulent shrimp sautéed in garlic butter and white wine, served over linguine.', img);
const entree11 = new entree('Cajun Chicken Sandwich', '$15', 'Spicy grilled chicken breast topped with pepper jack cheese and zesty aioli on a brioche bun.', img);
const entree12 = new entree('Classic Cheeseburger', '$14', 'Angus beef patty with cheddar cheese, lettuce, tomato, and onion on a toasted bun.', img);
const entree13 = new entree('Veggie Burger Deluxe', '$14', 'Plant-based patty loaded with fresh veggies and vegan aioli, served with sweet potato fries.', img);
const entree14 = new entree('Buffalo Chicken Wrap', '$13', 'Crispy chicken, buffalo sauce, lettuce, and ranch wrapped in a warm tortilla.', img);
const entree15 = new entree('Pulled Pork Mac & Cheese', '$18', 'Creamy mac & cheese topped with tender pulled pork and BBQ drizzle.', img);
const entree16 = new entree('Grilled Veggie Flatbread', '$14', 'Flatbread topped with roasted zucchini, bell peppers, onions, and feta cheese.', img);
const entree17 = new entree('Philly Cheesesteak', '$16', 'Thinly sliced steak, grilled onions, peppers, and melted provolone on a hoagie roll.', img);
const entree18 = new entree('Teriyaki Glazed Chicken', '$18', 'Grilled chicken breast topped with sweet teriyaki sauce, served with steamed broccoli and rice.', img);
const entree19 = new entree('Blackened Shrimp Tacos', '$16', 'Three tacos with blackened shrimp, cabbage slaw, and chipotle crema.', img);
const entree20 = new entree('Chicken Caesar Salad', '$14', 'Crisp romaine, grilled chicken, croutons, and parmesan tossed in Caesar dressing.', img);

const dessert1 = new dessert('Triple Chocolate Lava Cake', '$9', 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.', img);
const dessert2 = new dessert('New York Cheesecake', '$8', 'Classic cheesecake topped with a berry compote.', img);
const dessert3= new dessert('Apple Crumble Skillet', '$9', 'Baked cinnamon apples with a buttery crumble topping, served with caramel drizzle.', img);
const dessert4 = new dessert('Peanut Butter Pie', '$8', 'Rich and creamy peanut butter filling on a chocolate crust.', img);
const dessert5 = new dessert('Tiramisu', '$9', 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.', img);

const drink1 = new drink();

currentMenu.addItem(appetizer1);
currentMenu.addItem(appetizer2);
currentMenu.addItem(appetizer3);
currentMenu.addItem(appetizer4);
currentMenu.addItem(appetizer5);
currentMenu.addItem(appetizer6);

currentMenu.addItem(entree1);
currentMenu.addItem(entree2);
currentMenu.addItem(entree3);
currentMenu.addItem(entree4);
currentMenu.addItem(entree5);
currentMenu.addItem(entree6);
currentMenu.addItem(entree7);
currentMenu.addItem(entree8);
currentMenu.addItem(entree9);
currentMenu.addItem(entree10);
currentMenu.addItem(entree11);
currentMenu.addItem(entree12);
currentMenu.addItem(entree13);
currentMenu.addItem(entree14);
currentMenu.addItem(entree15);
currentMenu.addItem(entree16);
currentMenu.addItem(entree17);
currentMenu.addItem(entree18);
currentMenu.addItem(entree19);
currentMenu.addItem(entree20);

currentMenu.addItem(dessert1);
currentMenu.addItem(dessert2);
currentMenu.addItem(dessert3);
currentMenu.addItem(dessert4);
currentMenu.addItem(dessert5);

const welcome = "<h2 class='welcome'>The Roaming Fork</h2>";

const output = welcome + currentMenu.displayMenu();
export default output;