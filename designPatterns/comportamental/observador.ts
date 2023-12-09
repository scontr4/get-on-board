// Interfaz Observador
interface Observador {
    actualizar(notificacion: string): void;
}

// Clase Observable (sujeto)
class Observable {
    private observadores: Observador[] = [];

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }
    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs != observador);
        console.log(`Se ha eliminado un observador`)
    }

    notificarObservadores(notificacicon: string): void {
        this.observadores.forEach(observador => {
            observador.actualizar(notificacicon);
        })
    }

    realizarCambio(): void {
        this.notificarObservadores('Se ha realizado un cambio');
    }
}

// Clase ObservadorConcreto implementando la interfaz observador
class ObservadorConcreto implements Observador {
    actualizar(notificacion: string): void {
        console.log('Observador ha recibido la notificación: ', notificacion)
    }
}

// Uso del patrón Observador
const observable = new Observable();
const observador1 = new ObservadorConcreto();
const observador2 = new ObservadorConcreto();

observable.agregarObservador(observador1);
observable.agregarObservador(observador2);

observable.realizarCambio();

observable.eliminarObservador(observador2);

observable.realizarCambio();