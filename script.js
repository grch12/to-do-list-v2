function toDoList() {
  return {
    items: [
      {
        text: "Example 1",
        done: false,
      },
      {
        text: "Example 2",
        done: false,
      },
    ],
    content: "",
    hideCompleted: false,
    get completed() {
      let result = 0;
      for(let i of this.items) {
        if(i.done) result++;
      }
      return result;
    },
    add() {
      if (this.content !== "") {
        this.items.push({
          text: this.content,
          done: false,
        });
        this.content = "";
        this.refreshLocal();
      }
    },
    remove(index) {
      this.items.splice(index, 1);
      this.refreshLocal();
    },
    toggleStatus(index) {
      this.items[index].done = !this.items[index].done;
      this.refreshLocal();
    },
    refreshLocal() {
      localStorage.setItem("localItems", JSON.stringify(this.items));
    },
    clearAll() {
      this.items = [];
      this.refreshLocal();
    },
  }
}

function loadData(dataRef) {
  let localItems = localStorage.getItem("localItems");
  if (localItems) {
    dataRef.items = JSON.parse(localItems)
  }
}