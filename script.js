const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tarefas = [];

addTaskBtn.addEventListener("click", () => {
    const texto = taskInput.value.trim();
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push({ texto, concluida: false });
    taskInput.value = "";
    renderizarTarefas();
});

function renderizarTarefas() {
    taskList.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.classList.toggle("completed", tarefa.concluida);
        li.textContent = tarefa.texto;

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");

        const concluirBtn = document.createElement("button");
        concluirBtn.textContent = tarefa.concluida ? "Desfazer" : "Concluir";
        concluirBtn.className = "complete-btn";
        concluirBtn.addEventListener("click", () => {
            tarefas[index].concluida = !tarefas[index].concluida;
            renderizarTarefas();
        });

        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.className = "remove-btn";
        removerBtn.addEventListener("click", () => {
            tarefas.splice(index, 1);
            renderizarTarefas();
        });

        actionsDiv.appendChild(concluirBtn);
        actionsDiv.appendChild(removerBtn);

        li.appendChild(actionsDiv);
        taskList.appendChild(li);
    });
}
