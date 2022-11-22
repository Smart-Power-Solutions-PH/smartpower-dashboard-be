import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DashboardController {
  public async fetchDetails({ response }: HttpContextContract) {
    const rawDatas = await Database.query().from('sdm_raw_reports').select('*')

    response.send(rawDatas)
  }

  public async saveDetails({ request, response }: HttpContextContract) {
    const { name, model, data } = request.all()

    await Database.insertQuery().table('sdm_raw_reports').insert({ name, model, data })

    return response.send('Saved!')
  }
}
