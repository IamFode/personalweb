$(document).ready(function(){

      //posts
    var posts = [
      {
        title: 'Prueba de título 1',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Consequatur quisquam  aspernatur minima at reiciendis? Est natus  praesentium earum consequatur! Hic animi  unde, at sapiente voluptatum eius vitae  eveniet quasi harum.'
      },
      {
        title: 'Prueba de título 2',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Consequatur quisquam  aspernatur minima at reiciendis? Est natus  praesentium earum consequatur! Hic animi  unde, at sapiente voluptatum eius vitae  eveniet quasi harum.'
      },
      {
        title: 'Prueba de título 3',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Consequatur quisquam  aspernatur minima at reiciendis? Est natus  praesentium earum consequatur! Hic animi  unde, at sapiente voluptatum eius vitae  eveniet quasi harum.'
      },
      {
        title: 'Prueba de título 4',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Consequatur quisquam  aspernatur minima at reiciendis? Est natus  praesentium earum consequatur! Hic animi  unde, at sapiente voluptatum eius vitae  eveniet quasi harum.'
      },
      {
        title: 'Prueba de título 5',
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Consequatur quisquam  aspernatur minima at reiciendis? Est natus  praesentium earum consequatur! Hic animi  unde, at sapiente voluptatum eius vitae  eveniet quasi harum.'
      }    
    ];
    
    posts.forEach((item, index) => {
      var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>

        <a href="#" class="button-more">Leer más...</a>

      </article>
      `;

      $("#posts").append(post);
      
    });

    //scroll arriba de la web
    $('.subir').click(function(){
      e.preventDefault();
      $('html, body').animate({
        scrollTop:0
      },500);
      return false
    });


})