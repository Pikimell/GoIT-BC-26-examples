/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    name: 'awd',

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        let transaction = {
            amount,
            type,
            id: this.transactions.length
        }
        this.transactions.push(transaction)
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.createTransaction(amount, Transaction.DEPOSIT)
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if(this.balance >= amount){
            this.balance -= amount;
            this.createTransaction(amount, Transaction.WITHDRAW)
        }else{
            console.log('Error!')
        }
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for(let transaction of this.transactions){
            if(transaction.id === id){
                return transaction
            }
        }
        return 'Error!'
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let sum = 0

        for(let transaction of this.transactions){

        }

        return sum;
    },
};