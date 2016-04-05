var commonName = function(name) {
    switch(name) {
        case 'Zekowah.6480':
            return 'Muirellthe Moon';
        case 'memattm.1469':
            return 'Eldrazzi';
        case 'Finix.8672':
            return 'Allisandra';
        case 'ArcticRose.5280':
            return 'Rosie Arrow';
        case 'trumpetman.3028':
            return 'Stel Edelweiss';
        case 'glehmann.9586':
            return 'Victoria Arcwright';
        case 'Peregrinari.5906':
            return 'Ciannali';
        case 'Kolya.8032':
            return 'Kolya Mistiyani';
        case 'PwnedbyJuice.9738':
            return 'Zaidaan Wolfe';
        case 'Caliber.9237':
            return 'Major Caliber';
    }
};

$.get(
    'https://api.guildwars2.com/v2/guild/239F7382-9E2F-E511-A5A9-AC162DAE5A05/members?access_token=B2A35DED-9550-7044-9B1D-A0676E03384D3AD9486C-73ED-435F-9258-2FB2BA53F035',
    function (data) {
        var leaderCode = '';
        var officerCode = '';

        data.forEach(function (member) {
            //todo don't hard code rank names -- this is rank.order 1-4
            member.rank === 'Moondremoth' ?
                leaderCode = leaderCode +
                    "<div class='col-xs-12'>" +
                    "<h2>" + member.name + "</h2>" +
                    "<p>" + member.rank + "</p>" +
                    "<h4>"+ commonName(member.name) +"</h4>" +
                    "</div>"
                : '';

            member.rank === 'Dragon Champion' ?
                officerCode = officerCode +
                    "<div class='col-xs-6 col-md-4'>" +
                    "<h2>" + member.name + "</h2>" +
                    "<p>" + member.rank + "</p>" +
                    "<h4>"+ commonName(member.name) +"</h4>" +
                    "</div>"
                : '';

            member.rank === 'Aspect Master' ?
                officerCode = officerCode +
                    "<div class='col-xs-6 col-md-4'>" +
                    "<h2>" + member.name + "</h2>" +
                    "<p>" + member.rank + "</p>" +
                    "<h4>"+ commonName(member.name) +"</h4>" +
                    "</div>"
                : '';

            member.rank === 'Death God' ?
                officerCode = officerCode +
                    "<div class='col-xs-6 col-md-4'>" +
                    "<h2>" + member.name + "</h2>" +
                    "<p>" + member.rank + "</p>" +
                    "<h4>"+ commonName(member.name) +"</h4>" +
                    "</div>"
                : '';
        });

        $("#leader-info").html(leaderCode);
        $('#officer-info').html(officerCode);
    },
    "json"
);
