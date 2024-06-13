function calculaRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias < 20) {
        nivel = "Bronze";
    } else if (saldoVitorias < 50) {
        nivel = "Prata";
    } else if (saldoVitorias < 80) {
        nivel = "Ouro";
    } else if (saldoVitorias < 90) {
        nivel = "Diamante";
    } else if (saldoVitorias < 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    //confuso a explicação, deixei numero fechado pra subir de rank
    return { saldoVitorias, nivel };
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

async function main() {
    while (true) {
        const vitorias = parseInt(await promptUser("Digite o número de vitórias: "));
        const derrotas = parseInt(await promptUser("Digite o número de derrotas: "));

        const resultado = calculaRank(vitorias, derrotas);
        console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`);

        const continuar = await promptUser("Deseja calcular para outro jogador? (sim/não): ");
        if (continuar.toLowerCase() !== "sim") {
            break;
        }
    }

    readline.close();
}

main();