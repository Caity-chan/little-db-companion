const dbc = require('./little-db-companion/db-commands.js');


testb = async () => {
    //test = await dbc.register("testusername", "testpassword");
    //testab = await dbc.login("testusername", "testpassword");
    testaa = await dbc.set("testtable", "testkey", "testvalue");
    testa = await dbc.get("testtable", "testkey", "testvalue");
    await console.log(testa)
}
testb();