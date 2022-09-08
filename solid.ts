// SOLID PRINCIPLES
// S -> Single Responsbility Principle
        // A class should have only one reason for change
// O -> Open-Close Principle
    // A class should be open for extension but
    // closed for modification
// L -> Liskov Substitution Principle
    // T <-- S
// I -> Interface Segregation Principle
// D -> Dependency Inversion Principle

// The Computer Analogy
/**
     * Computer
     * - inputing data from the keyboard
     * - inputing data from the mouse
     * - process data using the central processing unit (cpu)
     * - store / retrieve data into and from the internal memory
     * - store / retrieve data into and from the external memory
     * - display information on a monitor
     * - project information on an external screen
**/


class Keyboard{
    //Data

    // Methods
    input(data:string){
        console.log("Picking data from the Keyboard...");
        
    }
}

class Mouse{
    // Data

    // Methods
    input(data:string){
        console.log("Picking data from the Mouse...");
    }
}

class InternalMemory{
    // Data

    // Methods
    store(data){
        console.log("Storing data in internal memory...");
    }
    retrieve(){
        console.log("Retrieving data from internal memory...");
    }

}

class ExternalMemory{
    // Data

    // Methods
    store(data){
        console.log("Storing data in External memory...");
    }

    retrieve(){
        console.log("Retrieving data from External memory...");
    }
}

class CPU{
    // Data 

    // Methods
    process(data:string){
        console.log("Processing data using the CPU...");       
    }
}

class Monitor{
    // Data 

    // Methods
    displayInformation(data:string){
        console.log("Displaying inofrmation on a Monitor...");
    }
}

class Projector{
    // Data 

    // Methods
    project(data:string){
        console.log("Projecting Information...");
    }
}


// Controller class
class Computer{
    // Data / Attributes

    // Methods / Operations
    inputDataFromKeyboard(data:string){
        let keyboard = new Keyboard();
        keyboard.input(data)
    }

    inputDataFromMouse(data:string){
        let mouse = new Mouse();
        mouse.input(data);
        
    }

    storeDataInInternalMemory(data){
        let memory = new InternalMemory();
        memory.store(data)
    }
    retrievingDataFromInternalMemory(){
        let memory = new InternalMemory();
        memory.retrieve()
    }

    storeDataInExternalMemory(data){
        let memory = new ExternalMemory();
        memory.store(data);
    }

    retrievingDataFromExternalMemory(){
        let memory = new ExternalMemory();
        memory.retrieve()
    }


    process(data:string){
        let processor = new CPU();
        processor.process(data)       
    }

    displayInformationOnMonitor(){
        let monitor = new Monitor();
        monitor.displayInformation('We need visual')
    }

    projectInformation(){
        let projector = new Projector();
        projector.project('I am projecting')
    }

}
