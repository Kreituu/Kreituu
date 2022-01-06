function changeDisplay(which) {
    let songs = $('#songs')
    let frase = $('#frase')

    let btSongs = $('#button-1')
    let btFrase = $('#button-2')

    if(which === 1) {
        // Alterando as divs
        songs.addClass('oculted')
        songs.removeClass('display')

        frase.addClass('display')
        frase.removeClass('oculted')

        // Alterando os botões
        btSongs.addClass('bt-select')
        btSongs.removeClass('bt-normal')

        btFrase.addClass('bt-normal')
        btFrase.removeClass('bt-select')
    }

    else {
        // Alterando as divs
        songs.addClass('display')
        songs.removeClass('oculted')

        frase.addClass('oculted')
        frase.removeClass('display')

        // Alterando os botões
        btSongs.addClass('bt-normal')
        btSongs.removeClass('bt-select')

        btFrase.addClass('bt-select')
        btFrase.removeClass('bt-normal')
    }
}