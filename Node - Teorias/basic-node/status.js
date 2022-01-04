const os = require("os");

setInterval(() => {
  //const freemem = os.freemem
  //const totalmen = os.totalmem
  const { freemem, totalmem } = os;

  const mem = parseInt(freemem() / 1024 / 1024);
  const total = parseInt(totalmem() / 1024 / 1024);
  const percents = parseInt((mem / total) * 100);

  const status = {
    total: `${total} MB - 100%`,
    used: `${total - mem} - ${100 - percents}%`,
    free: `${mem} MB - ${percents}%`,
  };

  console.clear();
  console.log("===PC STATUS===");
  console.table(status);
}, 1000);
