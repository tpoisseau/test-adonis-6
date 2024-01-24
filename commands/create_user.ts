import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import User from "#models/user";

export default class CreateUser extends BaseCommand {
  static commandName = 'create:user'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    this.logger.info('Hello world from "CreateUser"')
    await User.create({fullName: 'test', email: 'test@example.com', password: 'verysecurepassword'});
  }
}
