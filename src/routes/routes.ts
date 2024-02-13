import { Router, Request, Response } from "express";
import {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from "../controller/tasks";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.json(getAllTasks());
  res.end();
});

// buscar pelo ID
routes.get("/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const task = getTaskById(taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found!");
  }
});

// Adicionar uma nova tarefa, nescessario passar um titulo apenas
routes.post("/newTask", (req: Request, res: Response) => {
  const { title } = req.body;
  if (title) {
    const newTask = addTask(title);
    res.status(201).json(newTask);
  } else {
    res.status(400).send("Title is required!");
  }
});

// Atualizar os campos title ou completed de alguma tarefa
routes.put("/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;
  const updatedTask = updateTask(taskId, { title, completed });

  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).send("Task not found");
  }
});

// Deletar alguma tarefa por completa
routes.delete("/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const deletedTask = deleteTask(taskId);
  if (deletedTask) {
    res.status(201).json(deletedTask);
  } else {
    res.status(404).send("Task not found");
  }
});

export { routes };
