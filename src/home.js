import './styles.css';

class information {
    constructor(header, description) {
        this.header = header;
        this.description = description;
    }

    display() {
        return `
            <div class='card'>
                <h3>${this.header}</h3>
                <p>${this.description}</p>
            </div>
        `;
    }
}

class homeContent {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    
    displayContent() {
        return this.items.map(item => item.display()).join('');
    }
}

const homeOutput = new homeContent();

const testimonial = new information('Testimonial:', '“The Roaming Fork is hands-down the best dining experience I’ve had. The flavors are unique, the atmosphere is cozy, and the service is top-notch. I’ll definitely be back for more!” – Emma J., Local Foodie');
const story = new information('Our Story:', 'Nestled in the heart of the city, The Roaming Fork began as a small family-owned eatery with a big dream: to bring together the flavors of America’s heartland and the world’s most beloved cuisines. What started as a simple menu of comfort food classics has grown into a vibrant hub where tradition meets innovation. We pride ourselves on using locally sourced ingredients and putting a creative twist on every dish.');
const hours = new information('Hours of Operation:', 'Monday - Thursday: 11:00AM - 9:00PM<br>Friday - Saturday: 11:00AM - 10:00PM<br>Sunday: 12:00PM - 8:00PM');


homeOutput.addItem(story);
homeOutput.addItem(testimonial);
homeOutput.addItem(hours);

const welcome = "<h2 class='welcome'>The Roaming Fork</h2>";

const output = welcome + homeOutput.displayContent();

export default output;