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

    // carregar jogo
    this.load.image("logo", "assets/logo-inteli_azul.png");

    // carregar tubarao
    this.load.image("tubarao", "assets/tubarao.png");

    // carregar peixe
    this.load.image("peixe", "assets/peixes/peixe_amarelo.png");
}

function create() {
    this.add.image(400, 300, "mar");

    // adicionar logo na tela
    this.add.image(400, 525, "logo").setScale(0.5);

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