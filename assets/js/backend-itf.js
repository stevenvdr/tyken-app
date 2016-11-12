function issueCertificate( hash ) {
    $.post( './hash', { 'hash' : hash }, function( data )  {
        console.log( data );
    })
        .fail( function( response ) {
            alert('Error: ' + response.responseText);
        })
}

function checkCertificate( hash ) {
    $.get( './hash?hash=', { 'hash' : hash }, function( data )  {
        if ( data.length == 1 ) {
            alert('Hash is certified');
        }
        else {
            alert('No matching hashes');
        }
    })
        .fail( function( response ) {
            alert('Error: ' + response.responseText);
        })
}