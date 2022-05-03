const data = new Date();
    const diaSemana = data.getDay();
    const diaNumero = data.getDate();
    const mesDoAno = data.getMonth();
    const anoNumero = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundos = data.getSeconds();
    let segundosTexto, horaTexto, anoNumeroTexto, mesDoAnoTexto, diaNumeroTexto, minutoTexto;
    switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                break;
            case 1:
                diaSemanaTexto = 'Segunda-Feira';
                break;
            case 2:
                diaSemanaTexto = 'Terça-Feira';
                break;
            case 3:
                diaSemanaTexto = 'Quarta-Feira';
                break;
            case 4:
                diaSemanaTexto = 'Quinta-Feira';
                break;
            case 5:
                diaSemanaTexto = 'Sexta-Feira';
                break;
            case 6:
                diaSemanaTexto = 'Sabado';
                break;
};
    switch (mesDoAno) {
            case 0:
                mesDoAnoTexto = 'Janeiro'
                break;
            case 1:
                mesDoAnoTexto = 'Fevereiro'
                break;
            case 2:
                mesDoAnoTexto = 'Março'
                break;
            case 3:
                mesDoAnoTexto = 'Abril'
                break;
            case 4:
                mesDoAnoTexto = 'Maio'
                break;
            case 5:
                mesDoAnoTexto = 'Junho'
                break;
};
    //ifs para adicionar os 0 a esquerda
        diaNumero >= 9 ? diaNumeroTexto = diaNumero : diaNumeroTexto = `0${diaNumero}`;
        hora >= 9 ? horaTexto = hora : horaTexto = `0${hora}`;
        minuto >= 9 ? minutoTexto = minuto : minutoTexto = `0${minuto}`
        segundos >= 9 ? segundosTexto = segundos : segundosTexto = `0${segundos}`

    //contrução do reusltado
        const textoPronto = (`${diaSemanaTexto}, ${(diaNumeroTexto)} de ${mesDoAnoTexto} de ${anoNumero}, ${horaTexto}:${minutoTexto}:${segundosTexto}`);
        console.log(`${textoPronto}`)
        var $conteiner = document.querySelector('.conteiner')
        $conteiner.innerHTML = textoPronto;

    