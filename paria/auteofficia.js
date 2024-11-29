    // Creating a Map object
    const ancestorParse = new Map();

    // Adding key-value pairs to the Map
    ancestorParse.set('name', 'John Doe');
    ancestorParse.set('age', 30);
    ancestorParse.set('occupation', 'Engineer');

    // Retrieving a value using the get() method
    const field = 'occupation';
    const parsedAs = ancestorParse.get(field);

    console.log(parsedAs); // Output: Engineer
    