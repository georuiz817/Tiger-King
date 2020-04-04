let quotes = [
    '“I’ve been on the cover of Hollywood Magazine twice.” -Joe Exotic',
    '“He’s a completely insane, gay, gun-toting, drug-addict fanatic.” -Dr. Bhagavan Antle',
    '“I’d shoot you before I shot my cat.” -Joe Exotic',
    '“I’ve done a lot of shit in my life, but I never experienced anything like Joe Exotic.” -Rick Kirkham',
    '“I saw a tiger, and the tiger saw a man.” -Joe Exotic',
    '“You can see how they go from being so sweet to tearing your face off, just like that, and it’s amazing to have that range.” -Carole Baskin',
    '“Does it feel good to stand on my stage with 500-pound tigers and everybody envy you? Absolutely.” -Joe Exotic',
    '“If somebody thinks they’re gonna come in here and take my animals away, it’s gonna be a small Waco.” -Joe Exotic',
    '“What is a snow leopard doing in the back of this guy’s hot van?” -Rick Kirkham',
    '“That lady profits over $1.5m, suckin’ on your heartstrings about shit on the internet that ain’t even true.” -Joe Exotic',
    '“Before you bring me down, it is my belief that you will stop breathing.” -Joe Exotic',
    '“I don’t watch news on television, unless there’s a cat involved.” -Carole Baskin',
    '“This is my little town. I’m the mayor, the prosecutor, the cop, and executioner.” -Joe Exotic',
]

function newQuote(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}