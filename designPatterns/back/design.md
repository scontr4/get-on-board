# 💻 Back

# Funcionalidad 1: Crear un tarea
    Give: Una listat vacía de tareas.
    When: Se ingresa una nueva tarea.
    Then: Se debe agregar correcttamente con todas sus propiedades.

# Funcionalidad 2: Leer las tareas
    Dado: Una lista de tareas existentes.
    Cuando: Se recuperan todas las tareas.
    Entonces: El sistema debería devolver la lista de tareas en el formato esperado. Las tareas recuperadas deberían coincidir con las creadas previamente.

# Funcionalidad 3: Actualización de una tarea
    Dado: Una tarea existente en la lista.
    Cuando: Se actualizan los detalles de la tarea.
    Entonces: La tarea debería ser actualizada con la nueva información proporcionada. La tarea actualizada debería conservar su identificador único y tener las propiedades modificadas.

# Funcionalidad 4: Eliminación de una tarea
    Dado: Una tarea dentro de la lista de tareas.
    Cuando: La tarea es eliminada.
    Entonces: La tarea debería ser removida de la lista, y los intentos de recuperarla deberían resultar en una respuesta de no encontrada o en una lista vacía sin la tarea eliminada.
