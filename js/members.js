$.get(
    'https://api.guildwars2.com/v2/guild/239F7382-9E2F-E511-A5A9-AC162DAE5A05/members?access_token=B2A35DED-9550-7044-9B1D-A0676E03384D3AD9486C-73ED-435F-9258-2FB2BA53F035',
    function (data) {
        var code = '';

        data.forEach(function (member) {
            member.rank !== 'Zephyrite' ?
                code = code +
                    "<div class='col-md-4'>" +
                    "<h2>" + member.name + "</h2>" +
                    "<p> Rank: " + member.rank + "</p>" +
                    "<p> Member since: " + member.joined + "</p>" +
                    "</div>"
                : ''
        });

        $("#members").html(code)
    },
    "json"
);
