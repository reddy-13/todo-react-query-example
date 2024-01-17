import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodo: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo) => {
      const previousTodo =
        queryClient.getQueryData<Todo[]>(CACHE_KEYS_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEYS_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      //   if (ref.current) ref.current.value = '';
      onAdd();
      return { previousTodo };
    },
    onSuccess: (savedTodo, newTodo) => {
      console.log(savedTodo);
      queryClient.setQueryData<Todo[]>(["todo"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? newTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEYS_TODOS, context.previousTodo);
    },
  });
};

export default useAddTodo;
