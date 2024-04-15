  // Selecciona todos los elementos con la clase 'producto'
  const productos = document.querySelectorAll('.producto');
  // Selecciona el elemento que mostrará el mensaje de producto agregado
  const mensaje = document.getElementById('mensaje');
  // Selecciona el elemento donde se mostrará el nombre del producto en el mensaje
  const mensajeContenido = document.getElementById('mensaje-contenido');

  // Itera sobre cada elemento 'producto'
  productos.forEach(producto => {
      // Agrega un event listener para el clic en cada producto
      producto.addEventListener('click', function() {
          // Actualiza el contenido del mensaje con el nombre del producto
          mensajeContenido.textContent = `Producto agregado al carrito: ${producto.querySelector('h3').textContent} ${producto.querySelector('p').textContent}`;
          // Muestra el mensaje
          mensaje.style.display = 'block';

          // Oculta el mensaje después de 3 segundos
          setTimeout(function() {
              mensaje.style.display = 'none';
          }, 3000);
      });
  });
