import './styles.css';

class information {
    constructor(name, phone, role) {
        this.name = name;
        this.phone = phone;
        this.role = role;
    }

    display() {
        return `
            <div class='card'>
                <h3>${this.name}</h3>
                <p>${this.phone}</p>
                <p>${this.role}</p>
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

const contactOutput = new homeContent();

const staff1 = new information('John Smith', '123-456-7890', 'Owner');
const staff2 = new information('Little Mike', '123-456-7890', 'Head Chef');
const staff3 = new information('Lyle Goodman', '123-456-7890', 'Manager');
const staff4 = new information('Cedric Ortega', '123-456-7890', 'Waiter');

contactOutput.addItem(staff1);
contactOutput.addItem(staff2);
contactOutput.addItem(staff3);
contactOutput.addItem(staff4);

const welcome = "<h2 class='welcome'>The Roaming Fork</h2>";

const output = welcome + contactOutput.displayContent();
export default output;