class ReproductorAntiguo:
    def reproducir(self):
        pass

    def detener(self):
        pass

class ReproductorModerno:
    def reproducir_moderno(self):
        pass

    def detener_moderno(self):
        pass

class ReproductorDeVinilo(ReproductorAntiguo):
    def reproducir(self):
        print("Reproduciendo música desde un tocadiscos de vinilo")

    def detener(self):
        print("Deteniendo el tocadiscos de vinilo")


# Adaptador: adapta el reproductor antiguo a la nueva interfaz
class Adaptador(ReproductorModerno):
    def __init__(self, reproductor_antiguo):
        self.reproductor_antiguo = reproductor_antiguo

    def play_song(self):
        self.reproductor_antiguo.reproducir()

    def stop_song(self):
        self.reproductor_antiguo.detener()

reproductor_vinilo = ReproductorDeVinilo()
adaptador = Adaptador(reproductor_vinilo)

adaptador.play_song()
adaptador.stop_song()
