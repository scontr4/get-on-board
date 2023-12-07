public class Singleton {
    // La única instancia de la clase Singleton
    private static Singleton instance;

    // Constructor privado 
    private Singleton() {
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("¡Hola! Soy una instancia Singleton.");
    }
}
