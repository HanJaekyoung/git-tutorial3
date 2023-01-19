//class에서 함수를 작성할때는 꼭 fuction이라고 작성할 필요는 없다.
class Counter{
    constructor(){
        this.counter = 0;
    }

    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 == 0){
            runIf5Times(this.counter);
        }
    }
}

const coolCounter = new Counter();
function printSomething(num){
    console.log(`Wow! ${num}`);
}
function alertNum(num){
    alert(`Wow! ${num}`);
}
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum);