import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./TaskForm.module.css";

//? Interfaces.
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; //! Dispachando um evento que vai ser um setState e ele vai ta trabalhando com um array de ITASK, ao usar (?) significa que pode vim ou não.
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task?.id);
      setTitle(task?.title);
      setDifficulty(task?.difficulty);
    }
  }, [task]);

  //! Essa função realiza a inclusão de tarefas no sistema. Atrelando ao FORM.
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]); //! Ao usar (...) estou pegando toda a lista. Vou unir em um. Quando o obejto não estiver definido, o TS não entende que o setTaskList veio, para resolver uso o ponto de !, forçando-o a entender que sabemos que esse cara vai vim,

      setTitle("");
      setDifficulty(0);
    }

    //? Adicionar nova tarefa na lista de tasks
    console.log("Nova Tarefa adicionada!");
  };

  //! Essa função manusea as interações do input.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Nome da tarefa "
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
