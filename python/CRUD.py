#Clase Suplemento con constructor y un metodo
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

        
#Clase Inventario con constructor y sus metodos
class Inventario:
    def __init__(self):
        self.suplementos = []
        self.agr_suplemento(1, 'Proteina', 10, 4500)
        self.agr_suplemento(2, 'Creatina', 5, 3500)
        self.agr_suplemento(3, 'BCCA', 15, 1500)
        self.agr_suplemento(4, 'MutanMass', 25, 78500)
        self.agr_suplemento(5, 'QuemaGrasas', 9, 15000)
        self.agr_suplemento(6, 'Trembolona', 10, 23500)

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
    
    def eliminar_producto(self, codigo):
        producto = self.consultar_suplemento(codigo)
        if producto:
            self.suplementos.remove(producto)
            return True
        return False
    
    def consultar_suplemento(self, codigo):
        for suplemento in self.suplementos:
            if suplemento.codigo == codigo:
                return suplemento
        return False

    def mostrar_suplementos(self):
        print("="*50)
        print("Lista de suplementos en el inventario:")
        print("Código\tDescripción\t\tCant\tPrecio")
        for suplemento in self.suplementos:
            print(f"{suplemento.codigo}\t{suplemento.descripcion}\t{suplemento.cantidad}\t{suplemento.precio}")
        print("="*50)

#Clase carrito con constructor y sus metodos

class Carrito:

    def __init__(self):
        self.items = []

    def sumar_suplemento(self, codigo, cantidad, inventario):
        suplemento = inventario.consultar_suplemento(codigo)
        if suplemento == False:
            print("El suplemento no existe.")
            return False
        if cantidad > suplemento.cantidad:
            print("No tenemos suficiente stock disponible.")
            return False
        
        for item in self.items:
            if item.codigo == codigo:
                item.cantidad += cantidad
                suplemento.modificar(suplemento.descripcion, suplemento.cantidad - cantidad, suplemento.precio)
                return True
            
        nuevoItem = Suplemento(codigo, suplemento.descripcion, cantidad, suplemento.precio)
        # self.carrito.append(nuevoItem) #¿puede ser que el error esté aca?
        self.items.append(nuevoItem)
        suplemento.modificar(suplemento.descripcion, suplemento.cantidad - cantidad, suplemento.precio)
        return True
        
    def quitar_suplemento(self, codigo, cantidad, inventario):
        for item in self.items:
            if item.codigo == codigo:
                if cantidad > item.cantidad:
                    print("Cantidad a quitar mayor a la cantidad en el carrito.")
                    return False
                item.cantidad -= cantidad
                if item.cantidad == 0:
                    self.items.remove(item)
                
                suplemento = inventario.consultar_suplemento(codigo)
                suplemento.modificar(suplemento.descripcion, suplemento.cantidad + cantidad, suplemento.precio)
                return True
            
            print("El suplemento no se encuentra en el carrito.")
        return False

    def mostrarCarrito(self):
        print("-"*50)
        print("Lista de suplementos en el carrito: ")
        print("Codigo\tDescripcion\t\tCant\tPrecio")
        for item in self.items:
            print(f'{item.codigo}\t{item.descripcion}\t{item.cantidad}\t{item.precio}')
        print("-"*50)




#codigo Principal
sanus_inventario = Inventario()
carrito_sanus = Carrito()

sanus_inventario.mostrar_suplementos()

carrito_sanus.sumar_suplemento(3,5, sanus_inventario)
carrito_sanus.sumar_suplemento(2,4, sanus_inventario)

carrito_sanus.mostrarCarrito()

carrito_sanus.quitar_suplemento(3,2, sanus_inventario)
carrito_sanus.quitar_suplemento(2,3, sanus_inventario)

carrito_sanus.mostrar()
sanus_inventario.mostrar_suplementos()
