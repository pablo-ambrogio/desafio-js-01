let input = document.querySelector( '#inputText' );
let message = document.getElementById( 'message' );

let form = document.getElementById( 'form' ).addEventListener( 'submit', ( event ) => {
    event.preventDefault;
} );

let sendInfo = ( ) => {

    let caracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if( input.value !== '' ) {
        if( caracteres.test( input.value ) ) {
            message.innerHTML = 'Correcto';
        }
        else {
            message.innerHTML = 'Incorrecto';
            message.style.visibility = "visible";
            input.classList.add( 'form__text--border' );
        }
    }
    else {
        message.innerHTML = 'Por favor, complete el campo';
        message.style.visibility = "visible";
        input.classList.add( 'form__text--border' );
    }

    
    // message.innerHTML = input.value;
    
    // input.classList.add( '.form__text--border' );
    input.value= '';
}


