/* Array Principal */
var cantadas = ["Você não tá na fila de transplante mas já ganhou meu coração", "Tô precisando da costela que Deus tirou pra te fazer, mas você não colabora", "A maior declaração de amor por você Jesus já fez na cruz, a segunda maior vou fazer agora", "Vou pedir pra Deus que é juíz, marcar essa falta que você me faz",
"Posso tirar uma foto sua ? Queria mostrar pros meus amigos que os anjos existem", "Não sou profeta mas pode avisar seu passado que o teu futuro é comigo", "Sabe a diferença do meu headset pra você ? Ele eu consigo tirar da cabeça...", "Sabe a diferença entre você e o espelho ? No espelho eu me vejo, em você eu vejo meu futuro", "Você pode me emprestar um dicionário? É quando te vi fiquei sem palavras", "Me chama de sofá e vem perder o controle comigo", "Já que nada é para sempre, quer ser o meu nada ?", "Nem precisa acender a luz pra ficar claro que quero você", "Você sabe estacionar ? É porque tem uma vaga aqui no meu coração", "Me chama de labirinto e vem se perder em mim", "Sabe qual a diferença entre o ferro de passar e a vontade que tenho de te namorar ? É que o ferro passa", "Não acredito em signo mas você comanda meu astral", "Pra que colirio se é você que faz minha pupila dilatar", "Se você encontrasse uma lâmpada mágica quais seriam seus outros dois desejos ? Porquê eu já estou aqui!", "Então, além de me deixar apaixonado, o que mais você faz?", "Eu tenho uma memória horrível. Felizmente, você é inesquecível.", "Com licença, você teria um amigo em comum que pudesse nos apresentar?", "Fui ver a previsão do tempo e li que vai rolar um clima entre nós.", "Você é mágica? Porque toda vez que eu olho para você, o resto do mundo desaparece.", "Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra da frase...", "Por que eu precisaria saber sobre o sistema solar? Meu mundo inteiro gira em torno de você.", "Você deveria entrar em Hogwarts, porque o que você faz com o meu coração só pode ser bruxaria.", "A Marvel criou a Viúva Negra, A DC criou a Mulher-Maravilha, sua mãe não satisfeita foi e criou você...A mulher da minha vida!", "Você é como um dicionário: acrescenta significado à minha vida!", "Nem Salomão com toda sua sabedoria conseguiria descrever o quanto você é perfeita", "Vou te processar por abandono de incapaz...Sou incapaz de viver sem você", "O que é a queda da muralha de jericó perto da queda que tenho por você", "Seiya lutou a vida toda pela saori, Ikki sempre honrou sua esmeralda,  Hyoga foi até o fundo da Sibéria pela sua amada, eu como Shun atravessaria a mais terrível das nebulosas pra conquistar seu coração", "Meu amor por você é estilo One Piece. INTERMINÁVEL!", "Você é tão linda que se o Casimiro te visse até ele ficaria sem reação", "Nem a mais bela das rosas consegue exalar um perfume melhor que o seu", "Você não é a volta de Jesus mas arrebatou meu coração num piscar de olhos", "Sua mãe é dona de perfumaria? É porque você é a essência que falta na minha vida", "Chama minha língua de estrela e deixa ela brilhar no céu da sua boca"];

/* Gera um número randômico para escolher uma cantada */
function getRandom(){

    var num = Math.floor(Math.random() * cantadas.length + 1);

    return num -1;
}

/* Reescreve o parágrafo com a cantada */
function rewrite(){

    let frase = cantadas[getRandom()];

    document.getElementById("cantada").innerHTML = ">>> " + frase + " <<<";
}