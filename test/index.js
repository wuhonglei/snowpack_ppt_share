function doSomething(arg1, arg2) {
    function doSomethingElse(arg) {
        console.info(arg);
    }

    return (arg1, arg2) => doSomethingElse(arg1) + doSomethingElse(arg2);
}

doSomething()('hello', 'world')