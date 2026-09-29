// ==========================================
// 1. BASE CLASS & ENCAPSULATION
// ==========================================
class Waste {
  #id; // Private variable (Encapsulation)

  constructor(id, name, category) {
    this.#id = id;
    this.name = name;
    this.category = category;
  }

  getId() {
    return this.#id;
  }

  getDisposalInfo() {
    return `Segregate ${this.name} properly.`;
  }
}

// ==========================================
// 2. INHERITANCE & POLYMORPHISM
// ==========================================
class BiodegradableWaste extends Waste {
  constructor(id, name) {
    super(id, name, 'Biodegradable');
  }

  // Method Overriding (Polymorphism)
  getDisposalInfo() {
    return `Put ${this.name} in the GREEN compost bin.`;
  }
}

class RecyclableWaste extends Waste {
  constructor(id, name) {
    super(id, name, 'Recyclable');
  }

  // Method Overriding (Polymorphism)
  getDisposalInfo() {
    return `Clean ${this.name} and put it in the BLUE recycling bin.`;
  }
}

// ==========================================
// 3. USER MANAGEMENT CLASS
// ==========================================
class EcoUser {
  #points;

  constructor(username) {
    this.username = username;
    this.#points = 0;
  }

  addPoints(pts) {
    this.#points += pts;
    return `${this.username} now has ${this.#points} Eco-Points!`;
  }

  getPoints() {
    return this.#points;
  }
}

// Exporting instances for application usage
const defaultUser = new EcoUser('EcoWarrior');
