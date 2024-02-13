
// Cria uma estrutura de dados a ser seguido por quem a receber como tipagem Ex: tasks: Task[]
interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

// cria uma lista tasks que só pode receber objetos estruturados com a interface Task
let tasks: Task[] = [];

// cria um contador para ser os ID de cada tarefa da lista tasks[]
let nextId: number = 1;

// Mostrar Todas as tarefas na lista tasks[]
const getAllTasks = (): Task[] => tasks;

// Mostrar uma tarefa especifica da lista tasks[] pelo id
const getTaskById = (id: number): Task | undefined =>
  tasks.find((task) => task.id === id);

// Adicionar uma nova tarefa a lista tasks[] -- NESCESSARIO passar um titulo
const addTask = (title: string): Task => {
  const newTask: Task = { id: nextId++, title, completed: false };
  tasks.push(newTask);
  return newTask;
};

// Atualiza uma tarefa da lista tasks[] especificado pelo :id
const updateTask = (id: number, updatedTask: Task): Task | undefined => {
  // retorna o objeto dentro da lista
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // Verifica se o id esta dentro da lista e o atualiza com os dados de updateTask
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    return tasks[taskIndex];
  }

  return undefined;
};

// Deletar uma tarefa da lista Task[] pelo
const deleteTask = (id: number): Task | undefined => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    return deletedTask;
  }

  return undefined;
};

// exportar todas as funçoes criadas
export { getAllTasks, addTask, getTaskById, updateTask, deleteTask };