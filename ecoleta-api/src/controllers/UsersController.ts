import { Request, Response } from "express";
import knex from "../database/connection";

class UsersController {
  async login(request: Request, response: Response) {
    const { email, password } = request.params;

    const user = await knex("users")
      .where("email", email)
      .where("senha", password)
      .first()
      .select("id")
      .select("name")
      .select("email")
      .select("senha");

    if (!user) {
      return response.status(400).json({ message: "User not found." });
    }

    return response.json({ user: user });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const user = await knex("users")
      .where("id", id)
      .first()
      .select("id")
      .select("name")
      .select("email")
      .select("senha");

    if (!user) return response.status(404).json({ error: "User not Found" });

    return response.json(user);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const trx = await knex.transaction();

    const user = {
      name,
      email,
      senha: password,
    };

    const insertedIds = await trx("users").insert(user);

    const user_id = insertedIds[0];

    await trx.commit();

    return response.json({
      id: user_id,
      ...user,
    });
  }

  async update(request: Request, response: Response) {
    const { id, name, email, senha } = request.body;

    const trx = await knex.transaction();

    const userToUpdate = {
      name: name,
      email: email,
      senha: senha,
    };

    await trx("users").where("id", id).update(userToUpdate);

    const user = userToUpdate;

    const user_id = id;

    await trx.commit();

    return response.json({
      id: user_id,
      ...user,
    });
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const trx = await knex.transaction();

      await trx("users").where("id", id).first().delete();

      await trx.commit();

      return response.status(200).json();
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default UsersController;
