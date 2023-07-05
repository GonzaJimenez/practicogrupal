import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS

DATABASE = 'inventario.db'
#Clase Suplemento con constructor y un metodo
class Suplemento:
    
    def __init__(self, codigo, nombre, desc, cant, pre):        
            self.codigo = codigo
            self.nombre = nombre
            self.descripcion = desc
            self.cantidad = cant
            self.precio = pre
        
    def modificar(self, nue_nom, nue_desc, nue_can, nue_precio): 
            self.nombre = nue_nom      
            self.descripcion = nue_desc
            self.cantidad = nue_can
            self.precio = nue_precio

        
#Clase Inventario con constructor y sus metodos
class Inventario:
    def __init__(self):
        self.conexion = obtener_conn_db()
        self.cursor = self.conexion.cursor()
       

    def agr_suplemento(self, codigo, nom, desc, cant, precio):
        suplemento_existente = self.consultar_suplemento(codigo)
        if suplemento_existente:
            return jsonify({'message': 'Ya existe un suplemento con ese codigo.'}), 400
        
        sql = f'INSERT INTO suplementos VALUES ({codigo}, "{nom}", "{desc}", {cant}, {precio});'
        self.cursor.execute(sql)
        self.conexion.commit()
        return jsonify({'message': 'Suplemento agregado correctamente.'}), 200
       
        
    def mod_suplemento(self, codigo, nue_nom, nue_desc, nue_can, nue_precio):
        suplemento = self.consultar_suplemento(codigo)
        if suplemento:
            if nue_nom == '' or ' ':
                nue_nom = suplemento.nombre
            if nue_desc == '' or ' ':
                nue_desc = suplemento.descripcion
            if nue_precio ==  '' or ' ':
                nue_precio = suplemento.precio
            sql = f'UPDATE suplementos SET nombre = "{nue_nom}", descripcion = "{nue_desc}", cantidad = {nue_can}, precio = {nue_precio} WHERE codigo = {codigo};'
            self.cursor.execute(sql)
            self.conexion.commit()
            return jsonify({'message': 'Suplemento modificado exitosamente.'}), 200
        else:
            return jsonify({'message': 'Suplemento no encontrado.'}), 404
    
    def eli_suplemento(self, codigo):
        sql = f'DELETE FROM suplementos WHERE codigo = {codigo};'
        self.cursor.execute(sql)
        if self.cursor.rowcount > 0:
            self.conexion.commit()
            return jsonify({'message': 'Suplemento eliminado correctamente.'}), 200
        return jsonify({'message': 'Suplemento no encontrado.'}), 404
    
    def consultar_suplemento(self, codigo):
        sql = f'SELECT * FROM suplementos WHERE codigo = {codigo};'
        self.cursor.execute(sql)
        row = self.cursor.fetchone()
        if row:            
            codigo, nombre, descripcion, cantidad, precio = row
            return Suplemento(codigo, nombre, descripcion, cantidad, precio)
        return None

    def mostrar_suplementos(self):
        self.cursor.execute("SELECT * FROM suplementos")
        rows = self.cursor.fetchall()
        suplementos = []
        for row in rows:
            codigo, nombre, descripcion, cantidad, precio = row
            suplemento = {'codigo': codigo, 'nombre':nombre, 'descripcion': descripcion, 'cantidad': cantidad, 'precio': precio}
            suplementos.append(suplemento)
        return jsonify(suplementos), 200

#Clase carrito con constructor y sus metodos

class Carrito:

    def __init__(self):
        self.conexion = obtener_conn_db()
        self.cursor = self.conexion.cursor()
        self.items = []

    def sumar_suplemento(self, codigo, cantidad, inventario):
        suplemento = inventario.consultar_suplemento(codigo)
        if suplemento is False:
            return jsonify({'message': 'El suplemento no existe.'}), 404
        if cantidad > suplemento.cantidad:
            return jsonify({'message': 'La cantidad en stock no es suficiente.'}), 400
        
        for item in self.items:
            if item.codigo == codigo:
                item.cantidad += cantidad
                sql = f'UPDATE suplementos SET cantidad = cantidad - {cantidad} WHERE codigo = {codigo};'
                self.cursor.execute(sql)
                self.conexion.commit()
                return jsonify({'message': 'Suplemento agregado al carrito con exito.'}), 200
            
        nuevoItem = Suplemento(codigo, suplemento.nombre, suplemento.descripcion, cantidad, suplemento.precio)
        self.items.append(nuevoItem)
        sql = f'UPDATE suplementos SET cantidad = cantidad - {cantidad} WHERE codigo = {codigo};'
        self.cursor.execute(sql)
        self.conexion.commit()  
        return jsonify({'message': 'Suplemento agregado al carrito con exito.'}), 200
        
    def restar_suplemento(self, codigo, cantidad, inventario):
        for item in self.items:
            if item.codigo == codigo:
                if cantidad > item.cantidad:
                    return jsonify({'message': 'Cantidad a quitar mayor a la cantidad en el carrito.'}), 400
                    
                item.cantidad -= cantidad
                if item.cantidad == 0:
                    self.items.remove(item)
                sql = f'UPDATE suplementos SET cantidad = cantidad + {cantidad} WHERE codigo = {codigo};'
                self.cursor.execute(sql)
                self.conexion.commit()
                return jsonify({'message': 'Suplemento retirado del carrito con exito'}), 200        
        return jsonify({'message': 'El suplemento no se encuentra en el carrito.'}), 404

    def mostrarCarrito(self):
        suple_carrito = []
        for item in self.items:
            suplemento = {'codigo': item.codigo, 'nombre': item.nombre, 'descripcion': item.descripcion, 'cantidad': item.cantidad, 'precio': item.precio}
            suple_carrito.append(suplemento)
        return jsonify(suple_carrito), 200



def obtener_conn_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def crear_tabla():
    conn = obtener_conn_db()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS suplementos (
        codigo INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        cantidad INTEGER NOT NULL,
        precio REAL NOT NULL
        ) ''')
    conn.commit()
    cursor.close()
    conn.close()

def crear_database():
    conn = sqlite3.connect(DATABASE)
    conn.close()
    crear_tabla()


#codigo Principal

crear_database()
app = Flask(__name__)
CORS(app)
sanus_inventario = Inventario()
carrito_sanus = Carrito()
if __name__ ==  '__main__':
    app.run()

#Configuracion y rutas API Flask

@app.route('/suplementos/<int:codigo>', methods=['GET'])
def obtener_suplemento(codigo):
    suplemento = sanus_inventario.consultar_suplemento(codigo)
    if suplemento:
        return jsonify({
            'codigo': suplemento.codigo,
            'nombre': suplemento.nombre,
            'descripcion': suplemento.descripcion,
            'cantidad': suplemento.cantidad,
            'precio': suplemento.precio
        }), 200
    return jsonify({'message': 'Suplemento no encontrado.'}), 404

@app.route('/')
def index():
    return 'API de Inventario' #Podriamos colocar el html index de sanus vita

@app.route('/suplementos', methods=['GET'])
def obtener_suplementos():
    return sanus_inventario.mostrar_suplementos()

@app.route('/suplementos', methods=['POST'])
def agregar_suplemento():
    codigo = request.json.get('codigo')
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    cantidad = request.json.get('cantidad')
    precio = request.json.get('precio')
    return sanus_inventario.agr_suplemento(codigo, nombre, descripcion, cantidad, precio)

@app.route('/suplementos/<int:codigo>', methods=['PUT'])
def modificar_suplemento(codigo):
    nue_nom = request.json.get('nombre')
    nue_descripcion = request.json.get('descripcion')
    nue_cant = request.json.get('cantidad')
    nue_pre = request.json.get('precio')
    return sanus_inventario.mod_suplemento(codigo, nue_nom, nue_descripcion, nue_cant, nue_pre)

@app.route('/suplementos/<int:codigo>', methods=['DELETE'])
def eliminar_suplemento(codigo):
    return sanus_inventario.eli_suplemento(codigo)

@app.route('/carrito', methods=['POST'])
def sumar_carrito():
    codigo = request.json.get('codigo')
    cantidad = request.json.get('cantidad')
    inventario = sanus_inventario
    return carrito_sanus.sumar_suplemento(codigo, cantidad, inventario)

@app.route('/carrito', methods=['DELETE'])
def restar_carrito():
    codigo = request.json.get('codigo')
    cantidad = request.json.get('cantidad')
    inventario = sanus_inventario
    return carrito_sanus.restar_suplemento(codigo, cantidad, inventario)

@app.route('/carrito', methods=['GET'])
def obtener_carrito():
    return carrito_sanus.mostrarCarrito()

