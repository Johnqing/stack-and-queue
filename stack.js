(function(win){
    var Stack = function(){
        this.arr = [];
    }
    Stack.prototype = {
        push: function(){
            var arg = arguments;
            if(arg.length <= 0){
                return this;
            }
            if(arg.length === 1 &&  arg[0] === "Array"){
                this.arr = arg[0];
                return;
            }
            for(var i = 0, len = arg.length; i < len; i++){
                this.arr.push(arg[i]);
            }
        },
        pop: function(){
            if(this.arr.length <= 0){
                return;
            }
            return this.arr.pop();
        },
        getSize: function(){
            return this.arr.length;
        },
        getArr: function(){
            return this.arr;
        },
        setEmpty: function(){
            this.arr.length = 0;
        }
    }
    win.stack = new Stack();
}(this))
stack.push(1,2,3,4)
console.log(stack.getArr());
var x = stack.pop();
console.log(x);
console.log(stack.getArr());
