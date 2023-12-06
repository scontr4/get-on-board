import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TaskManagerTest {

    private TaskManager taskManager;

    @BeforeEach
    public void setUp() {
        taskManager = new TaskManager();
    }

    @Test
    public void givenEmptyTaskList_whenTaskAdded_thenTaskCreated() {
        // Given
        TaskManager taskManager = new TaskManager();
        Task newTask = new Task("Task 1", "Descripción 1");

        // When
        taskManager.addTask(newTask); 

        // Then
        assertTrue(taskManager.getAllTasks().contains(newTask));
    }


    @Test
    public void givenExistingTasks_whenRetrievingAllTasks_thenAllTasksReturned() {
        // Given
        TaskManager taskManager = new TaskManager();
        Task task1 = new Task("Task 1", "Descripción 1");
        Task task2 = new Task("Task 2", "Descripción 2");
        taskManager.addTask(task1);
        taskManager.addTask(task2);

        // When
        List<Task> retrievedTasks = taskManager.getAllTasks();

        // Then
        assertEquals(2, retrievedTasks.size()); 
        assertTrue(retrievedTasks.contains(task1)); 
        assertTrue(retrievedTasks.contains(task2));
    }


    @Test
    public void givenExistingTask_whenUpdatingTask_thenTaskUpdated() {
        // Given
        TaskManager taskManager = new TaskManager();
        Task task = new Task("Task 1", "Descripción 1");
        taskManager.addTask(task);

        // When
        Task updatedTask = new Task("Task actualizada", "Descripción actualizada");
        taskManager.updateTask(task.getId(), updatedTask);

        // Then
        assertEquals(updatedTask.getTitle(), taskManager.getTaskById(task.getId()).getTitle());
        assertEquals(updatedTask.getDescription(), taskManager.getTaskById(task.getId()).getDescription());
    }

    @Test
    public void givenExistingTask_whenDeletingTask_thenTaskDeleted() {
        // Given
        TaskManager taskManager = new TaskManager();
        Task task = new Task("Task 1", "Descripción 1");
        taskManager.addTask(task);

        // When
        taskManager.deleteTask(task.getId());

        // Then
        assertNull(taskManager.getTaskById(task.getId()));
    }
}