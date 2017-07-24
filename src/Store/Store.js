class Store{
    constructor(){
        this.events = {};
        this.history = [];
        this.historyId = -1;
    }
    
    on(type, listener){
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type){
        if (this.events[type]){
            this.events[type].forEach(function(listener) {
                listener();
            });
        }
    }
    
    removeEventListener(type, listener){
        if (this.events[type]){
            this.events[type].splice(this.events[type].indexOf(listener), 1);
        }
    }

    addToHistory(state){
        this.history.splice(this.historyId + 1, this.history.length - 1 - this.historyId);
        this.history.push(this.state);
        this.historyId = this.history.length - 1;
    }

    stateForward(){
        if (this.historyId < this.history.length - 1){
            this.historyId++;
            this.state = this.history[this.historyId];
            this.emitChange();
        }
    }

    stateBackward(){
        if (this.historyId > 0){
            this.historyId--;
            this.state = this.history[this.historyId];
            this.emitChange();
        }
    }
}

export default Store;