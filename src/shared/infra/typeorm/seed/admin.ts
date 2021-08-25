import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";
import { createConnection } from "typeorm";


async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at)
    values('${id}', 'admin', 'admin@signify.com.br', '${password}', true, 'now()')
    `
  );

  await connection.close();
}
create().then(() => console.log("User admin created"));
