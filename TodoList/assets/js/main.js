$("#add").on("click", function(e) {
    $("#newTodo").fadeToggle()
})

$("body").on("keypress", function(e) {
    if (e.which === 13) {
        var newTodo = $("#newTodo").val();
        addTodo(newTodo)
    }
})

function addTodo(newTodo) {
    if (newTodo !== "") {
        $("#newTodo").val("");
        $("#list").prepend(`<li class="item">${newTodoContent(newTodo)}</li>`);
    }
}

function newTodoContent(newTodo) {
    return `<span><i class="delete zmdi zmdi-delete"></i></span> ${newTodo}`
}
//List

$(document).on('click', ".item", function() {
    toggleDone(this)
});


function showDelete(item) {
    $(item).animate({ marginLeft: "0%" }, 500);
}

function hideDelete(item) {
    $(item).animate({ marginLeft: "-5%" }, 500);
}

function toggleDone(item) {
    $(item).toggleClass("done")
}

//Delete
$(document).on('click', "span", function() {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
});


addTodo("Compra");
addTodo("Deporte");
addTodo("Leer");
