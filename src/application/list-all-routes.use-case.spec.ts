import { RouteInMemoryRepository } from '../infra/db/route-in-memory.repository'
import { ListAllRoutesUseCase } from './list-all-routes.use-case'

describe('ListAllRouteUserCase Test', () => {
  it('List All Routes', async () => {
    const repository = new RouteInMemoryRepository()
    const listAllUserCase = new ListAllRoutesUseCase(repository)
    const output = await listAllUserCase.execute()
    expect(output).toStrictEqual([])
  })
})
