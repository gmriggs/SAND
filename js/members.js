var guildId = '239F7382-9E2F-E511-A5A9-AC162DAE5A05';
var token = 'B2A35DED-9550-7044-9B1D-A0676E03384D3AD9486C-73ED-435F-9258-2FB2BA53F035';

var commonName = function(name) {
  var accounts = {
    'Zekowah.6480': 'Muirellthe Moon',
    'memattm.1469': 'Eldrazzi',
    'Finix.8672': 'Allisandra',
    'ArcticRose.5280': 'Rosie Arrow',
    'trumpetman.3028': 'Stel Edelweiss',
    'glehmann.9586': 'Victoria Arcwright',
    'Peregrinari.5906': 'Ciannali',
    'Kolya.8032': 'Kolya Mistiyani',
    'PwnedbyJuice.9738': 'Zaidaan Wolfe',
    'Caliber.9237': 'Major Caliber',
    'Arithmancer.5307': 'Dancira'
  };

  return accounts[name] ? accounts[name] : '';
};

$.get('https://api.guildwars2.com/v2/guild/' + guildId + '/members?access_token=' + token, function(data) {
  var leaderCode = '';
  var officerCode = '';
  var webDevCode = '';
  var memberCode = function(member) {
    return "<div class='col-xs-6 col-md-4'>" +
        "<h2>" + member.name + "</h2>" +
        "<p>" + member.rank + "</p>" +
        "<h4>" + commonName(member.name) + "</h4>" +
        "</div>"
  };

  data.forEach(function(member) {
    //todo don't hard code rank names -- this is rank.order 1 && rank.order 2-4
    leaderCode = leaderCode +
        (member.rank === 'Moondremoth' ? memberCode(member) : '');

    officerCode = officerCode +
        ((member.rank === 'Dragon Champion' || member.rank === 'Aspect Master' || member.rank === 'Death God') ?
            memberCode(member) : '');

    webDevCode = webDevCode +
        (member.name === 'Arithmancer.5307' ? memberCode(member) : '');
  });

  $("#leader-info").html(leaderCode);
  $('#officer-info').html(officerCode);
  $('#web-dev').html(webDevCode);
  $('#member-count').html(data.length);
}, "json");
