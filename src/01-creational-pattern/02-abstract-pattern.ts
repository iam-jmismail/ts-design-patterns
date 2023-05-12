
/**
 * Abstract Pattern - Creational Pattern 
 * Families of related objects 
 */



// Abstract Product - Chair 
interface Chair {
    hasLegs : () => void 
}


// Abstract Product - Table
interface Table {
    hasChairs : () => void
}

// Concrete Product - Victorian Chair
class VictorianChair implements Chair {
    hasLegs() {
        console.log("Victorian Chair has legs");
    }
}

// Concrete Product - Victorian Table
class VictorianTable implements Table {
    hasChairs() {
        console.log("Victorian Tables have chairs");
    }
}

// Concrete Product - Modenr Chair
class ModernChair implements Chair {
    hasLegs() {
        console.log("Modern Chair has legs too..");
    }
}

// Concrete Product - Modenr Chair
class ModernTable implements Table {
    hasChairs() {
        console.log("Modern tables have chair too");
    }
}

// Abstract Factory - FurnitureFactory
interface FurnitureFactory  {
    createChair : () => Chair;
    createTable : () => Table;
}

// Concrete Factory - VictorianFurnitureFactory
class VictorianFurnitureFactory implements FurnitureFactory {
    createChair ():  Chair {
            return new VictorianChair();
    }
    createTable(): Table {
            return new VictorianTable()
    }
}


// Concrete Factory - ModenFurnitureFactory
class ModenFurnitureFactory implements FurnitureFactory {
    createChair (): Chair {
            return new ModernChair()
    }
    createTable(): Table {
            return new ModernTable()
    }
}


function clientCode (factory: FurnitureFactory) {
        const chairs = factory.createChair()
        const tables = factory.createTable()

        chairs.hasLegs() 
        tables.hasChairs() 
}


const victorianFactory = new VictorianFurnitureFactory();
clientCode(victorianFactory)

const modernFactory = new ModenFurnitureFactory();
clientCode(modernFactory)
