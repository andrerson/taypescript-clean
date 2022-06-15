import { Route, RouteProps } from './route.entity'

describe('Route Test', () => {
  test('constructor', () => {
    let routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 }
    }

    let route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: []
    })

    routeProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }]
    }

    route = new Route(routeProps)
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }]
    })
  })

  test('updateTitle Method', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 }
    }

    const route = new Route(routeProps)
    route.updateTitle('anderson')
    expect(route.title).toBe('anderson')
  })
})
