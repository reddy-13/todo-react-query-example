import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEYS_TODOS,
    queryFn: todoService.getAll,
  });
};

export default useTodos;
