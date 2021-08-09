import { readFile, writeFile } from 'fs/promises';
import { Injectable } from "@nestjs/common";


@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');

    const msg: any = JSON.parse(contents);

    return msg;
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    // generate id
    const id = Math.floor(Math.random() * 999);

    const newMessage = { ...messages, [id]: { id, content: message } };

    await writeFile('messages.json', JSON.stringify(newMessage));
  }
}
