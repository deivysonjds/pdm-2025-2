import axios from "axios";

const headerJson = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "https://aos-2025-2-4uak.vercel.app",
  timeout: 1000,
});

export async function getTarefas() {
  const {data} = await instance.get("/tasks");
  console.log(data);
  
  return data;
}

export async function updateTarefa(tarefa) {
  const {data} = await instance.put(
    `/tasks/${tarefa.objectId}`,
    { descricao: tarefa.descricao, concluida: tarefa.concluida },
    { headers: headerJson }
  );
  return data;
}

export async function addTarefa({ descricao }) {
  const {data} = await instance.post(
    `/tasks`,
    {descricao: descricao, concluida: false},
    { headers: headerJson}
  );
  console.log(data);
  
  return data;
}

export async function deleteTarefa(tarefa) {
  const {data} = await instance.delete(`/tasks/${tarefa.objectId}`);
  return data;
}
