let db;
const request = indexedDB.open('budget-tracker', 1);
request.onupgradeneede = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create an object store(table) called 'new_budget', set it to have an auto incrementing primary key of sorts
    db.createObjectStore('new_pizza', { autoIncrement: true });

    // upon a successful
    request.onsuccess = function(event) {
        // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in a global variable
        db = event.target.result;

        // check f app is online, if yes run uploadPizza() function to send all local db data to api
        if (navigator.onLine) {
            // uploadBudget();
        }
    };
    request.onerror = function(event) {
        // log error here
        console.log(event.target.errorCode);
    };
    // This function will be executed if we attempt to submit a new budget and there's no internet connection
    function saveRecord(record) {
        // open a new transaction with the database with read and write permissions
        const transaction = db.transaction(['new_budget'], 'readwrite');

        // access the object store for 'new pizza'
        const budgetObjectStore = transaction.ObjectStore('new_budget');

        // add record to your store with add method
        budgetObjectStore.add(record);
        
    }
   function checkDatabase() {
       const transaction = db.transaction(['pending_budget'], 'readwrite');
       const budgetObjectStore = transaction.ObjectStore('pending_budget');
       budgetObjectStore.getAll().then
       
    }
}