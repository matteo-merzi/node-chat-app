jQuery.get("/rooms", function(rooms) {
    var datalist = jQuery('#rooms');
    rooms.forEach(function(room) {
        datalist.append(jQuery('<option></option>').text(room));
    });
});
