$(document).ready(function() {
    $('#btnCadastrar').click(function(event) {
        event.preventDefault();  
        
        const novaTarefa = $('#nomeTarefa').val();
        if (novaTarefa) { 
            const novoItem = $('<li></li>').text(novaTarefa);
            novoItem.appendTo('ul');
            $('#nomeTarefa').val(''); 
        }
    });
    
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
