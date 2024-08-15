document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        nome_evento: document.getElementById('nome_evento').value,
        data_evento: document.getElementById('data_evento').value,
        local_evento: document.getElementById('local_evento').value,
        horario_evento: document.getElementById('horario_evento').value,
        responsavel_evento: document.getElementById('responsavel_evento').value,
        capacidade_maxima: document.getElementById('capacidade_maxima').value,
    };
    alert ("Evento cadastrado com sucesso!");
    
    document.getElementById('eventForm').reset();
});
