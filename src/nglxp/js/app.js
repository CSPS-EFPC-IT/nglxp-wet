( function( $, window, document, undef ) {
    "use strict";

    var $document = wb.doc;

    // Overwrite wet-boew plugin to filter with exact match
    $document.on( "submit", ".wb-tables-filter", function( event ) {

        event.preventDefault();

        var $form = $( this ),
            $datatable = $( "#" + $form.data( "bind-to" ) ).dataTable( { "retrieve": true } ).api();

        // Lets reset the search;
        $datatable.search( "" ).columns().search( "" );

        // Lets loop throug all options
        var $value = "", $lastColumn = -1;
        $form.find( "[name]" ).each( function() {
            var $elm = $( this ),
                $column = parseInt( $elm.attr( "data-column" ), 10 );

            if ( $elm.is( "select" ) ) {
                $value = $elm.find( "option:selected" ).val();
            } else if ( $elm.is( ":checkbox" ) ) {
                if ( $column !== $lastColumn && $lastColumn !== -1 ) {
                    $value = "";
                }
                $lastColumn = $column;

                if ( $elm.is( ":checked" ) ) {
                    $value += ( $value.length > 0 ) ? "|" : "";
                    $value += $elm.val();
                }
            } else {
                $value = $elm.val();
            }

            if ( $value ) {
                $value = $value.replace( /\s/g, "\\s*" );
                // Modified the parameters of .search() to disable datatable   
                // smart search api and enable case sensitivity
                $datatable.column( $column ).search( "(" + $value + ")", true, false, false ).draw();
            }
        } );

        return false;
    } );

} )( jQuery, window, document, wb );