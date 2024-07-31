const express = require('express')
const app = express ();
const port = 3000
app.get('/', (resq, res) =>{
    res.send(`He recibido una peticion get, alguien solicita dato`)
})
app.post('/', (resq, res) =>{
    res.send(`He recibido una peticion post, vienen datos para procesar`)
})
app.put('/actualizar', (resq, res) =>{
    res.send(`Actualizando la informacion`)
})
app.delete('/', (resq, res) =>{
    res.send(`He recibido una peticion post, vienen datos para procesar`)
})
app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
} );
