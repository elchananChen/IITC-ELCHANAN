"use strict";

const { ages, pepole } = require("./pepole");
console.log(ages, pepole);

const os = require("os");
console.log(os.platform(), os.freemem(), os.totalmem());
