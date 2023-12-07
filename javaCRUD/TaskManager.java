import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class TaskManager {

    private Map<UUID, Task> tasks;

    public TaskManager() {
        this.tasks = new HashMap<>();
    }

    public void addTask(Task task) {
        UUID taskId = UUID.randomUUID();
        task.setId(taskId);
        tasks.put(taskId, task);
    }

    public List<Task> getAllTasks() {
        return new ArrayList<>(tasks.values());
    }

    public void updateTask(UUID taskId, Task updatedTask) {
        if (tasks.containsKey(taskId)) {
            updatedTask.setId(taskId);
            tasks.put(taskId, updatedTask);
        } else {
            throw new IllegalArgumentException("La tarea no existe");
        }
    }

    public void deleteTask(UUID taskId) {
        tasks.remove(taskId);
    }

    public Task getTaskById(UUID taskId) {
        return tasks.get(taskId);
    }
}