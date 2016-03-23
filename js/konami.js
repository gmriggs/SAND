var easter_egg = new Konami();

easter_egg.code = function () {
    $(function () {
        $("#dialog-box").fadeIn("slow")
            .dialog({
                width: 550,
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                }
            });
    });
};

easter_egg.load();
