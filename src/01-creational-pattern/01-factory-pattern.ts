/**
 * Factory Pattern  - Creational Pattern
 * Super Class creates objects 
 * Subclass alter type of objects created 
 */

enum Mode {
    SEA = 1,
    LAND 
}

interface FactoryType {
    createTransport: (mode : Mode) => void 
}

interface TransportType {
deliver : ( ) => void 
}

class Transport implements TransportType {
        deliver() {
            console.log("Transport is delivering");
        }
}

/**
 * Concrete creator Truck
 */
class Truck  extends Transport {
    deliver() {
        console.log("Truck is delivering by land");
    }
}

/**
 * Concrete creator Ship
 */
class Ship extends Transport {
    deliver () {
        console.log("Ship is delivering by sea");
    }
}


/**
 * Creator Class 
 */
class Factory implements FactoryType {
    createTransport(mode : Mode) {
            switch(mode) {
                case Mode.SEA: 
                    return new Ship()
                case Mode.LAND:
                    return new Truck()
                default: 
                return new Transport()
            }
    }
}

const factory = new Factory()

/**
 * Calls to special factory method  called createTransport
 */
const truck = factory.createTransport(Mode.LAND)
const ship = factory.createTransport(Mode.SEA)

truck.deliver() // Truck is delivering by land
ship.deliver() // Ship is delivering by sea

/**
 * Objects returned by a factory method are often called as products - truck and  ship
 */
