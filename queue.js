
(function(win){
    var Queue = function(){
        this.arr = [];
    }
    Queue.prototype = {
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
        shift: function(){
            if(this.arr.length <= 0){
                return;
            }
            return this.arr.shift();
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
    win.queue = new Queue();
}(this))
queue.push(1,2,3,4)
console.log(queue.getArr());
var x = queue.shift();
console.log(x);
console.log(queue.getArr());
