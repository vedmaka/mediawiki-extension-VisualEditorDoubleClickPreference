/*!
 * Enables double-click-to-edit functionalit being aware of Visual Editor extension.
 */
( function ( mw, $ ) {
    $( function () {
        mw.util.$content.dblclick( function ( e ) {
            var $a;
            // Recheck preference so extensions can do a hack to disable this code.
            if ( parseInt( mw.user.options.get( 'editondblclick' ), 10 ) ) {
                e.preventDefault();

                // Visual editor click
                $a = $('#ca-ve-edit');
                if( $a.length ) {
                    $a.get( 0 ).click();
                    return;
                }

                // Trigger native HTMLElement click instead of opening URL (T45052)
                $a = $( '#ca-edit a' );
                // Not every page has an edit link (T59713)
                if ( $a.length ) {
                    $a.get( 0 ).click();
                }
            }
        } );
    } );
}( mediaWiki, jQuery ) );
