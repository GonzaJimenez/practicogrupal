
#Clase producto funciones=
class Suplemento:
    
    def __init__(self, codigo, desc, cant, pre):        
            self.codigo = codigo
            self.descripcion = desc
            self.cantidad = cant
            self.precio = pre
        
    def modificar(self, nue_desc, nue_can, nue_precio):        
            self.descripcion = nue_desc
            self.cantidad = nue_can
            self.precio = nue_precio

        

class Inventario:
    def __init__(self):
        self.suplementos = []

    def agr_suplemento(self, codigo, desc, cant, precio):
        suplemento = self.consultar_suplemento(codigo)
        if suplemento == False:
            nuevo_sup = Suplemento(codigo, desc, cant, precio)
            self.suplementos.append(nuevo_sup)
        else:
            print(f"El suplemento {suplemento.descripcion} ya existe")
            return False
        
    def mod_suplemento(self, codigo, nue_desc, nue_can, nue_precio):
        suplemento = self.consultar_suplemento(codigo)
        if suplemento:
            suplemento.modificar(nue_desc, nue_can, nue_precio)
        else:
            print(f"El suplemento buscado no existe")
    
    def consultar_suplemento(self, codigo):
        for suplemento in self.suplementos:
            if suplemento.codigo == codigo:
                return suplemento
        return False

    
    def list_producto(self):
        print("="*50)
        print("Lista de suplementos en el inventario:")
        print("Código\tDescripción\t\tCant\tPrecio")
        for suplemento in self.suplementos:
            print(f"{suplemento.codigo}\t{suplemento.descripcion}\t\t{suplemento.cantidad}\t{suplemento.precio}")
        print("="*50)

    def eli_producto(self, codigo):
        producto = self.consultar_suplemento(codigo)
        if producto:
            self.suplementos.remove(producto)
            return True
        return False

sanus_inventario = Inventario

sanus_inventario.agr_suplemento(1, 'Teclado USB 101 teclas', 10, 4500)
sanus_inventario.agr_suplemento(2, 'Mouse USB 3 botones', 5, 2500)
sanus_inventario.agr_suplemento(3, 'Monitor LCD 22 pulgadas', 15, 52500)
sanus_inventario.agr_suplemento(4, 'Monitor LCD 27 pulgadas', 25, 78500)
sanus_inventario.agr_suplemento(5, 'Pad mouse', 5, 500)

sanus_inventario.list_producto()
