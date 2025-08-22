import { hash } from "bcryptjs";

const password = 'verbum';
console.log(await hash(password, 10));
