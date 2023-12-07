
public class Main {
    public static void main(String[] args) {
        Singleton singletonInstance = Singleton.getInstance();
        singletonInstance.showMessage();
        
        Singleton anotherInstance = Singleton.getInstance();
        anotherInstance.showMessage();
        
        if (singletonInstance == anotherInstance) {
            System.out.println("Ambas hacen referencia a la misma instancia Singleton!");
        }
    }
}
