var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image("mar", "assets/bg_azul-claro.png");
    this.load.image("mar2", "assets/bg_azul-escuro.png");

    // carregar jogo
    this.load.image("logo", "assets/logo-inteli_azul.png");

    // carregar tubarao
    this.load.image("tubarao", "assets/tubarao.png");

    // carregar peixe
    this.load.image("peixe", "assets/peixes/peixe_amarelo.png");
}

function create() {
    // adicionar logo na tela
    this.add.image(400, 525, "logo").setScale(0.5);
    
    if(game.scale.orientation === Phaser.Scale.LANDSCAPE){
        this.add.image(400, 300, "mar");
    } else if(game.scale.orientation === Phaser.Scale.PORTRAIT){
        this.add.image(400, 300, 'mar2');
    }

    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT')
        }  
        if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE')
        } 
    });

    // adicionar tubarao na tela
    this.add.image(150, 525, "tubarao").setScale(0.2);

    // guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, "peixe");

    // adicional peixe na tela
    peixinho.setFlip(true, false);
}

function update() {

    // adicionando controle no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
