let yourBalance = parseInt(prompt("Qual o seu saldo atual?"));
let options;

deposit = 0;
transfer = 0;

do {
  options = parseInt(
    prompt(
      `Seu Saldo: R$ ${yourBalance},00\nDigite a opção desejada:\n\n1) Depósito\n2) Transferência\n3) Sair`
    )
  );
  switch (options) {
    case 1:
      deposit = parseInt(prompt("Digite o valor do depósito"));
      yourBalance += deposit;
      alert(`Seu novo saldo é de: R$ ${yourBalance},00`);
      break;

    case 2:
      transfer = parseInt(prompt("Digite o valor da transerência"));
      if (transfer > yourBalance) {
        alert(
          `Saldo insuficiênte para essa transação\n\nSaldo Atual: R$ ${yourBalance}`
        );
        break;
      } else {
        yourBalance -= transfer;
        alert(`Seu novo Saldo é de: R$ ${yourBalance},00`);
        break;
      }
    case 3:
      alert("Fazendo Logout...");
      break;

    default:
      alert("A opção digitada é inválida, tente novamente!");
  }
} while (options != 3);
