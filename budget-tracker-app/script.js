const inpDescription = document.getElementById("input-description");
const inpSum = document.getElementById("input-sum");
const addButton = document.getElementById("btn-addTransaction");
const balance = document.getElementById("user-balance");


const userTrasactions = [];
let transactionCount = 0;
let userBalance = 200;


clearInputs();
loadTransactions();


function clearInputs() {
    balance.innerHTML = userBalance + " €";
    inpDescription.value = "";

}

function Transaction(id, description, sum) {
        this.id = id;
        this.description = description;
        this.sum = parseFloat(sum);
}

addButton.addEventListener('click', () => {
    let description = inpDescription.value.trim();
    let sum = parseFloat(inpSum.value.trim());
    let id = transactionCount;

    if(description === "" || isNaN(sum) || sum === "" ) {
        alert("Fill all fields");
        return;
    }

    const transaction = new Transaction(id, description, sum);
    userTrasactions.push(transaction);
    transactionCount++;

    saveTransactions();
    createTransactionCard();
    clearInputs();
});


function createTransactionCard() {
    const transactionContent = document.getElementById("transaction-content");
    transactionContent.innerHTML = "";
    
    userTrasactions.forEach((transaction) => {
        const transactionCard = document.createElement("div");
        transactionCard.classList.add("transaction");

        if (transaction.sum < 0) {
            transactionCard.classList.add("negative");
        }

        const description = document.createElement("span");
        description.textContent = transaction.description;

        const sum = document.createElement("span");
        sum.textContent = `${transaction.sum.toFixed(2)} €`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => deleteTransaction(transaction.id);

        transactionCard.appendChild(description);
        transactionCard.appendChild(sum);
        transactionCard.appendChild(deleteBtn);

        transactionContent.appendChild(transactionCard);
    });

    updateBalance();
}

function deleteTransaction(id) {
    const index = userTrasactions.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
        userTrasactions.splice(index, 1);
        saveTransactions();
        createTransactionCard();
    }
}

function updateBalance() {
    const balanceContent = document.getElementById("balance-content");

    // Total sum of all transactions
    const transactionSum = userTrasactions.reduce((acc, transaction) => acc + transaction.sum, 0);

    const finalBalance = userBalance + transactionSum;

    balanceContent.innerHTML = `${finalBalance.toFixed(2)} €`;
}

function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(userTrasactions));
}

function loadTransactions() {
    const savedTransactions = localStorage.getItem("transactions");
    if(savedTransactions) {
        userTrasactions.push(...JSON.parse(savedTransactions));
    }

    createTransactionCard();
}





