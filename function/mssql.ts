import * as sql from 'mssql';

const config: sql.config = {
  user: "sa",
  password: "Automatic",
  database: "",
  server: '172.23.10.51',
  pool: {
    // max: 10,
    // min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  }
}

export async function  mssqlquery(input: string)  {
  try {
    // await sql.connect(config);
    let output
    await sql.connect(config)
   .then((conn) => 
      conn.query(input)
         .then((v:any) => {
          console.log(v)
          output = v
         
         })
         .then(() => conn.close())
   )
   return output
    // const result = await sql.query(input).then((v: any) => {
    //     // console.log(`---------------`);
    //     // console.log(v);  
    //     const out = v;   
    //     // console.log(`---------------`);
    //     return v;
    //   // }).then(() => sql.close());
    // }).then(() => sql.close());
    //   //  console.dir(result)
    //   return result;
  } catch (err) {
    return err;
  }
};