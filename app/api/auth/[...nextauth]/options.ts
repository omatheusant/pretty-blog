import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Usuário:",
          type: "text",
          placeholder: "Nome de usuário...",
        },
        password: {
            label: "Senha:",
            type: "password",
            placeholder: "Sua senha..."
        },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "lud_caires833",
          password: "admin",
          role: "admin",
        };

        if (
          credentials?.username === user.name &&
          credentials.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
