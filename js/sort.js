$(document).ready( function() {
    /* We want the user to be able to sort our information so that they have the
     * pieces they want to look at right next to each other. There's much less need
     * for eye movement because of this. */
    $(".sortable").sortable({
        axis: "y", //Only sort up and down. Left and right not viable
        opacity: 0.5, //While moving, allow them to see under the text and know what they're doing
        handle: "h2", //Only allow the h2 to be grabbed. This allows the text to be highlighted easier
        tolerance: "pointer", //Make the tolerance on sorting more slack
        cursor: "move"
   });
});