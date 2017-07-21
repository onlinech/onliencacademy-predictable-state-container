class Dispatcher{
    constructor(){
        this.lastId = 0;
        this.callbacks = {};
    }

    register(callback){
        var id = 'CID_' + this.lastId++;
        this.callbacks[id] = callback;
        return id;
    }

    dispatch(action){
        for (var id in this.callbacks){
            this.callbacks[id](action);
        }
    }
}

export default new Dispatcher();