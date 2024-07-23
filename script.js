document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();

    if (todoText) {
        var listItem = document.createElement('li');
        listItem.textContent = todoText;
        document.getElementById('todoList').appendChild(listItem);
        todoInput.value = '';
    }
});
